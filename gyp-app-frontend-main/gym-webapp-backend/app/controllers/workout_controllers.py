from flask import request, jsonify
from app.extensions import db
from app.models.workout import Workout, WorkoutCategory, WorkoutLevel
from app.models.exercise import Exercise


def create_workout():
    data = request.form

    workout = Workout(
        title=data.get("title"),
        description=data.get("description"),
        duration=int(data.get("duration")),
        calories=int(data.get("calories")),
        category=WorkoutCategory(data.get("category")),
        level=WorkoutLevel(data.get("level")),
        image=data.get("image")  # filename
    )

    exercise_names = request.form.getlist("exercises")
    exercises = Exercise.query.filter(Exercise.name.in_(exercise_names)).all()
    workout.exercises = exercises

    db.session.add(workout)
    db.session.commit()

    return jsonify({"message": "Workout created"}), 201


def list_workouts():
    workouts = Workout.query.all()

    return jsonify([
        {
            "id": w.id,
            "title": w.title,
            "category": w.category.value,
            "level": w.level.value,
            "duration": w.duration,
            "calories": w.calories,
            "exercises": [e.name for e in w.exercises]
        }
        for w in workouts
    ])