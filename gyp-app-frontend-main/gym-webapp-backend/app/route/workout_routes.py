from flask import Blueprint
from app.controllers.workout_controllers import (
    create_workout,
    list_workouts
)

workout_bp = Blueprint("workouts", __name__) 

workout_bp.route("/workout", methods=["POST"])(create_workout)
workout_bp.route("/workout", methods=["GET"])(list_workouts)