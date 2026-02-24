from flask import Blueprint
from app.controllers.equipment_controller import create_equipment, get_equipments

equipment_bp = Blueprint("equipment", __name__)

equipment_bp.route("/equip", methods=["POST"])(create_equipment)
equipment_bp.route("/equip", methods=["GET"])(get_equipments)