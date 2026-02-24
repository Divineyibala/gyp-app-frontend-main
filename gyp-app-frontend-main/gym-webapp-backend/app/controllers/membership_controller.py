from flask import jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..models.plans_models import Plan
from ..models.subscription_models import Subscription
from .. import db

def get_plans():
    plans = Plan.query.all()
    return jsonify([
        {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "features": p.features.split(",")
        } for p in plans
    ])

@jwt_required()
def subscribe():
    user_id = get_jwt_identity()
    data = request.get_json()
    plan_id = data.get("plan_id")

    existing = Subscription.query.filter_by(user_id=user_id, active=True).first()
    if existing:
        existing.active = False

    new_sub = Subscription(user_id=user_id, plan_id=plan_id)
    db.session.add(new_sub)
    db.session.commit()

    return jsonify({"message": "Subscription activated"}), 201