from app.extensions import db
from app.models.exercise import Exercise

EXERCISES = [
    "Squats", "Bench Press", "Deadlifts", "Pull-Ups", "Burpees",
    "Mountain Climbs", "Jump Squats", "High Knees", "Sun Salutation",
    "Warrior Pose", "Downward Dog", "Tree Pose", "Lunges", "Leg Press",
    "Calf Raises", "Dance Moves", "Jumping Jacks", "Side Steps",
    "Arm Circles", "Planks", "Crunches", "Russian Twists"
]

def seed_exercises():
    for name in EXERCISES:
        if not Exercise.query.filter_by(name=name).first():
            db.session.add(Exercise(name=name))
    db.session.commit()