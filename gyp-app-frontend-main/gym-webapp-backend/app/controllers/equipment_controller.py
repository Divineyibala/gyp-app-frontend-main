from flask import request, jsonify
from datetime import datetime
from app.extensions import db
from app.models.equipment_models import Equipment

VALID_CATEGORIES = [
    "Cardio",
    "Strength",
    "Flexibility",
    "Accessories",
    "Other",
]

VALID_STATUS = ["Good", "Bad", "Maintenance"]


def create_equipment():
    data = request.get_json()

    name = data.get("name")
    category = data.get("category")
    quantity = data.get("quantity")
    status = data.get("status", "Good")
    last_maintenance = data.get("lastMaintenance")
    location = data.get("location")

    # Validation
    if not name or not category or not quantity:
        return jsonify({"error": "Missing required fields"}), 400

    if category not in VALID_CATEGORIES:
        return jsonify({"error": "Invalid category"}), 400

    if status not in VALID_STATUS:
        return jsonify({"error": "Invalid status"}), 400

    equipment = Equipment(
        name=name,
        category=category,
        quantity=int(quantity),
        status=status,
        location=location,
    )

    if last_maintenance:
        equipment.last_maintenance = datetime.strptime(
            last_maintenance, "%Y-%m-%d"
        ).date()

    db.session.add(equipment)
    db.session.commit()

    return jsonify({
        "message": "Equipment added successfully",
        "equipment": equipment.to_dict()
    }), 201
    
def get_equipments():
    equipments = Equipment.query.order_by(Equipment.created_at.desc()).all()

    return jsonify([
        equipment.to_dict()
        for equipment in equipments
    ]), 200