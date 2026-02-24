from flask import Blueprint
from ..controllers.session_controller import (
    book_session,
    get_trainer_availability
)

session_bp = Blueprint("session_bp", __name__)

session_bp.route("/sessions/book", methods=["POST"])(book_session)
session_bp.route(
    "/trainers/<int:trainer_id>/availability",
    methods=["GET"]
)(get_trainer_availability)