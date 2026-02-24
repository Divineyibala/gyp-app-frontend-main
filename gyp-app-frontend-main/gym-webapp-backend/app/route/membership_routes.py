from flask import Blueprint
from ..controllers.membership_controller import get_plans, subscribe

membership_bp = Blueprint("membership_bp", __name__)

membership_bp.route("/plans", methods=["GET"])(get_plans)
membership_bp.route("/subscribe", methods=["POST"])(subscribe)