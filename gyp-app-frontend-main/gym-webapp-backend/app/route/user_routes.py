from flask import Blueprint
from ..controllers.user_controllers import register_user, login_user, forgot_password, reset_password

user_bp = Blueprint("user_bp", __name__)

user_bp.route("/register", methods=["POST"])(register_user)
user_bp.route("/login", methods=["POST"])(login_user)
user_bp.route("/forget_password", methods=["POST"])(forgot_password)
user_bp.route("/reset_password", methods=["POST"])(reset_password)