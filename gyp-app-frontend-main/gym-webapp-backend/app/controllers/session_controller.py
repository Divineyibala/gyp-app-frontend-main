from flask import request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from datetime import datetime
from ..models.session_model import TrainingSession
from ..models.subscription_models import Subscription
from .. import db

@jwt_required()
def book_session():
    user_id = get_jwt_identity()
    data = request.get_json()

    trainer_id = data.get("trainer_id")
    date_str = data.get("date")      # YYYY-MM-DD
    time_str = data.get("time")      # HH:MM

    # membership check
    active_sub = Subscription.query.filter_by(
        user_id=user_id,
        active=True
    ).first()

    if not active_sub:
        return jsonify({"error": "Active membership required"}), 403

    session_date = datetime.strptime(date_str, "%Y-%m-%d").date()
    session_time = datetime.strptime(time_str, "%H:%M").time()

    new_session = TrainingSession(
        user_id=user_id,
        trainer_id=trainer_id,
        session_date=session_date,
        session_time=session_time
    )

    try:
        db.session.add(new_session)
        db.session.commit()
    except:
        db.session.rollback()
        return jsonify({"error": "Time slot already booked"}), 409

    return jsonify({"message": "Session booked successfully"}), 201


@jwt_required()
def get_trainer_availability(trainer_id):
    date_str = request.args.get("date")
    session_date = datetime.strptime(date_str, "%Y-%m-%d").date()

    booked = TrainingSession.query.filter_by(
        trainer_id=trainer_id,
        session_date=session_date
    ).all()

    booked_times = [s.session_time.strftime("%H:%M") for s in booked]

    all_slots = [
        "09:00", "10:30", "11:45",
        "13:15", "14:45", "17:30",
        "19:00", "20:30"
    ]

    return jsonify({
        "date": date_str,
        "available": [t for t in all_slots if t not in booked_times],
        "booked": booked_times
    })
    

@jwt_required()
def cancel_session(session_id):
    user_id = get_jwt_identity()

    session = TrainingSession.query.filter_by(
        id=session_id,
        user_id=user_id
    ).first_or_404()

    db.session.delete(session)
    db.session.commit()

    return jsonify({"message": "Session cancelled"})



@jwt_required()
def reschedule_session(session_id):
    user_id = get_jwt_identity()
    data = request.get_json()

    session = TrainingSession.query.filter_by(
        id=session_id,
        user_id=user_id
    ).first_or_404()

    session.session_date = datetime.strptime(data["date"], "%Y-%m-%d").date()
    session.session_time = datetime.strptime(data["time"], "%H:%M").time()

    try:
        db.session.commit()
    except:
        db.session.rollback()
        return jsonify({"error": "Slot unavailable"}), 409

    return jsonify({"message": "Session rescheduled"})




def trainer_sessions(trainer_id):
    sessions = TrainingSession.query.filter_by(trainer_id=trainer_id).all()

    return jsonify([
        {
            "date": s.session_date.isoformat(),
            "time": s.session_time.strftime("%H:%M"),
            "user_id": s.user_id
        } for s in sessions
    ])