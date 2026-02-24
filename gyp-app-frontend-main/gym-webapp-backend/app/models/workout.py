from app.extensions import db
from enum import Enum


class WorkoutCategory(Enum):
    ALL = "All"
    STRENGTH = "Strength"
    CARDIO = "Cardio"
    YOGA = "Yoga"
    HIIT = "HIIT"


class WorkoutLevel(Enum):
    BASIC = "Basic"
    INTERMEDIATE = "Intermediate"
    ADVANCE = "Advance"


workout_exercises = db.Table(
    "workout_exercises",
    db.Column("workout_id", db.Integer, db.ForeignKey("workouts.id")),
    db.Column("exercise_id", db.Integer, db.ForeignKey("exercises.id")),
)


class Workout(db.Model):
    __tablename__ = "workouts"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    description = db.Column(db.Text)
    duration = db.Column(db.Integer)
    calories = db.Column(db.Integer)
    image = db.Column(db.String(255))

    category = db.Column(db.Enum(WorkoutCategory), nullable=False)
    level = db.Column(db.Enum(WorkoutLevel), nullable=False)

    exercises = db.relationship(
        "Exercise",
        secondary=workout_exercises,
        backref="workouts"
    )

    created_at = db.Column(db.DateTime, server_default=db.func.now())