import { useState } from "react";

const CATEGORIES = ["All", "Strength", "Cardio", "Yoga", "HIIT"];
const LEVELS = ["Basic", "Intermediate", "Advance"];

const EXERCISES = [
  "Squats",
  "Bench Press",
  "Deadlifts",
  "Pull-Ups",
  "Burpees",
  "Mountain Climbs",
  "Jump Squats",
  "High Knees",
  "Sun Salutation",
  "Warrior Pose",
  "Downward Dog",
  "Tree Pose",
  "Lunges",
  "Leg Press",
  "Calf Raises",
  "Dance Moves",
  "Jumping Jacks",
  "Side Steps",
  "Arm Circles",
  "Planks",
  "Crunches",
  "Russian Twists",
];

export default function WorkoutLibrary() {
  const [formData, setFormData] = useState({
    title: "",
    category: "All",
    level: "Basic",
    duration: "",
    calories: "",
    description: "",
    exercises: [],
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleExerciseToggle = (exercise) => {
    setFormData((prev) => ({
      ...prev,
      exercises: prev.exercises.includes(exercise)
        ? prev.exercises.filter((e) => e !== exercise)
        : [...prev.exercises, exercise],
    }));
  };

   const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("title", formData.title);
    payload.append("description", formData.description);
    payload.append("duration", formData.duration);
    payload.append("calories", formData.calories);
    payload.append("category", formData.category);
    payload.append("level", formData.level);

    if (formData.image) {
      payload.append("image", formData.image.name); // backend stores filename
    }

    selectedExercises.forEach((ex) =>
      payload.append("exercises", ex)
    );

    const res = await fetch("http://127.0.0.1:5000/api/workout/workout", {
      method: "POST",
      body: payload
    });

    if (!res.ok) {
      alert("Failed to create workout");
      return;
    }

    fetchWorkouts();
    alert("Workout created successfully");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Workout Library
          </h1>
          <p className="text-gray-600">
            Create and manage workout programs
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Workout Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Category & Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Level
              </label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
              >
                {LEVELS.map((lvl) => (
                  <option key={lvl}>{lvl}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Duration & Calories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration (minutes)
              </label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Calories Burned
              </label>
              <input
                type="number"
                name="calories"
                value={formData.calories}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Workout Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.files[0] })
              }
              className="w-full"
            />
          </div>

          {/* Exercises */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Exercises
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {EXERCISES.map((exercise) => (
                <label
                  key={exercise}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={formData.exercises.includes(exercise)}
                    onChange={() => handleExerciseToggle(exercise)}
                    className="text-green-500 focus:ring-green-500"
                  />
                  {exercise}
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Save Workout
          </button>
        </form>
      </div>
    </div>
  );
}