// import { Download, TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';

// export default function Reports({ navigate }) {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex justify-between items-center">
//             <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
//             <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
//               <Download className="w-5 h-5" />
//               Download Report
//             </button>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Key Metrics */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-blue-100 rounded-lg">
//                 <Users className="w-6 h-6 text-blue-600" />
//               </div>
//               <div>
//                 <h3 className="text-gray-600 text-sm">Total Members</h3>
//                 <p className="text-2xl font-bold text-gray-900">2,847</p>
//                 <p className="text-xs text-green-600">+12% this month</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-green-100 rounded-lg">
//                 <DollarSign className="w-6 h-6 text-green-600" />
//               </div>
//               <div>
//                 <h3 className="text-gray-600 text-sm">Revenue</h3>
//                 <p className="text-2xl font-bold text-gray-900">$45,231</p>
//                 <p className="text-xs text-green-600">+8% this month</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-purple-100 rounded-lg">
//                 <Calendar className="w-6 h-6 text-purple-600" />
//               </div>
//               <div>
//                 <h3 className="text-gray-600 text-sm">Classes</h3>
//                 <p className="text-2xl font-bold text-gray-900">24</p>
//                 <p className="text-xs text-blue-600">Active classes</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-orange-100 rounded-lg">
//                 <TrendingUp className="w-6 h-6 text-orange-600" />
//               </div>
//               <div>
//                 <h3 className="text-gray-600 text-sm">Growth Rate</h3>
//                 <p className="text-2xl font-bold text-gray-900">18%</p>
//                 <p className="text-xs text-green-600">+5% from last month</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           {/* Revenue Chart */}
//           <div className="bg-white rounded-lg shadow p-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h2>
//             <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
//               <div className="text-center">
//                 <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-2" />
//                 <p className="text-gray-500">Chart visualization</p>
//               </div>
//             </div>
//           </div>

//           {/* Membership Distribution */}
//           <div className="bg-white rounded-lg shadow p-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-4">Membership Distribution</h2>
//             <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
//               <div className="text-center">
//                 <div className="w-32 h-32 rounded-full border-8 border-green-500 mx-auto mb-2"></div>
//                 <p className="text-gray-500">Pie chart visualization</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Detailed Reports */}
//         <div className="bg-white rounded-lg shadow">
//           <div className="px-6 py-4 border-b border-gray-200">
//             <h2 className="text-lg font-semibold text-gray-900">Monthly Performance</h2>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">New Members</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Classes Held</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Growth</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 <tr className="hover:bg-gray-50">
//                   <td className="px-6 py-4 text-sm font-medium text-gray-900">February 2024</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">342</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">$45,231</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">96</td>
//                   <td className="px-6 py-4 text-sm text-green-600">+12%</td>
//                 </tr>
//                 <tr className="hover:bg-gray-50">
//                   <td className="px-6 py-4 text-sm font-medium text-gray-900">January 2024</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">305</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">$41,850</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">92</td>
//                   <td className="px-6 py-4 text-sm text-green-600">+8%</td>
//                 </tr>
//                 <tr className="hover:bg-gray-50">
//                   <td className="px-6 py-4 text-sm font-medium text-gray-900">December 2023</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">283</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">$38,720</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">88</td>
//                   <td className="px-6 py-4 text-sm text-green-600">+5%</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


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
    <div className="min-h-screen  px-4 py-12">
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