import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, TrendingUp, Award, Dumbbell, Activity } from 'lucide-react';

const Dashboard = ({ navigate, userData }) => {
  const [activeGoal, setActiveGoal] = useState('weight');
  
  // Extract first name from full name
  const firstName = userData?.fullName?.split(' ')[0] || 'Alex';

  const stats = [
    { label: 'Workouts', value: '12', change: '+2', icon: Dumbbell, color: 'from-green-400 to-green-600' },
    { label: 'Calories', value: '2,847', change: '+340', icon: Activity, color: 'from-orange-400 to-orange-600' },
    { label: 'Minutes', value: '420', change: '+45', icon: Clock, color: 'from-blue-400 to-blue-600' },
    { label: 'Streak', value: '7', change: 'days', icon: Award, color: 'from-purple-400 to-purple-600' }
  ];

  const todayWorkouts = [
    { time: '07:00 AM', name: 'Morning Cardio', duration: '30 min', type: 'Cardio', completed: true },
    { time: '12:00 PM', name: 'Strength Training', duration: '45 min', type: 'Strength', completed: false },
    { time: '06:00 PM', name: 'Yoga Session', duration: '60 min', type: 'Flexibility', completed: false }
  ];

  const weeklyProgress = [
    { day: 'Mon', value: 85 },
    { day: 'Tue', value: 92 },
    { day: 'Wed', value: 78 },
    { day: 'Thu', value: 95 },
    { day: 'Fri', value: 88 },
    { day: 'Sat', value: 70 },
    { day: 'Sun', value: 60 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {firstName}! 👋
          </h1>
          <p className="text-gray-600">Here's your fitness summary for today</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                </div>
                <span className="text-green-600 text-sm font-semibold">{stat.change}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-600" />
                Today's Schedule
              </h2>
              <button className="text-green-600 hover:text-green-700 font-semibold text-sm">
                View All
              </button>
            </div>

            <div className="space-y-3">
              {todayWorkouts.map((workout, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                    workout.completed
                      ? 'bg-green-50 border-green-200'
                      : 'bg-gray-50 border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        workout.completed ? 'bg-green-500' : 'bg-gray-300'
                      }`}>
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{workout.name}</h3>
                        <p className="text-sm text-gray-600">{workout.time} • {workout.duration}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        workout.completed
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {workout.type}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Weekly Progress Chart */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Weekly Activity</h3>
              <div className="flex items-end justify-between h-40 gap-2">
                {weeklyProgress.map((day, index) => (
                  <motion.div
                    key={day.day}
                    initial={{ height: 0 }}
                    animate={{ height: `${day.value}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="flex-1 flex flex-col items-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-full rounded-t-lg cursor-pointer transition-all ${
                        day.value > 80
                          ? 'bg-gradient-to-t from-green-400 to-green-600'
                          : day.value > 60
                          ? 'bg-gradient-to-t from-blue-400 to-blue-600'
                          : 'bg-gradient-to-t from-gray-300 to-gray-400'
                      }`}
                      style={{ height: '100%' }}
                    />
                    <span className="text-xs text-gray-600 mt-2 font-medium">{day.day}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('user-workouts')}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-4 font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Start Workout
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('user-schedule')}
                  className="w-full bg-gray-100 text-gray-900 rounded-xl p-4 font-semibold hover:bg-gray-200 transition-all"
                >
                  Book Class
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('user-profile')}
                  className="w-full bg-gray-100 text-gray-900 rounded-xl p-4 font-semibold hover:bg-gray-200 transition-all"
                >
                  Track Progress
                </motion.button>
              </div>
            </motion.div>

            {/* Goals */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 shadow-lg text-white"
            >
              <h2 className="text-xl font-bold mb-4">Monthly Goal</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Workouts Completed</span>
                    <span className="font-bold">12/20</span>
                  </div>
                  <div className="w-full bg-purple-400 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '60%' }}
                      transition={{ delay: 0.6, duration: 1 }}
                      className="bg-white h-3 rounded-full"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-purple-400">
                  <TrendingUp className="w-8 h-8" />
                  <div className="text-right">
                    <p className="text-2xl font-bold">60%</p>
                    <p className="text-sm opacity-90">Complete</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;