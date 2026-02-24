import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Clock, Flame, Target, ChevronRight, Star } from 'lucide-react';

const Workouts = ({ navigate, userData }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const categories = [
    { id: 'all', name: 'All', count: 24 },
    { id: 'strength', name: 'Strength', count: 8 },
    { id: 'cardio', name: 'Cardio', count: 6 },
    { id: 'yoga', name: 'Yoga', count: 5 },
    { id: 'hiit', name: 'HIIT', count: 5 }
  ];

  const workouts = [
    {
      id: 1,
      title: 'Full Body Strength',
      category: 'strength',
      duration: '45 min',
      calories: '320 cal',
      difficulty: 'Intermediate',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
      exercises: ['Squats', 'Bench Press', 'Deadlifts', 'Pull-ups'],
      description: 'Complete full body workout targeting all major muscle groups'
    },
    {
      id: 2,
      title: 'HIIT Cardio Blast',
      category: 'hiit',
      duration: '30 min',
      calories: '450 cal',
      difficulty: 'Advanced',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop',
      exercises: ['Burpees', 'Mountain Climbers', 'Jump Squats', 'High Knees'],
      description: 'High-intensity interval training for maximum calorie burn'
    },
    {
      id: 3,
      title: 'Morning Yoga Flow',
      category: 'yoga',
      duration: '25 min',
      calories: '150 cal',
      difficulty: 'Beginner',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
      exercises: ['Sun Salutation', 'Warrior Pose', 'Downward Dog', 'Tree Pose'],
      description: 'Gentle morning flow to energize your day'
    },
    {
      id: 4,
      title: 'Leg Day Power',
      category: 'strength',
      duration: '50 min',
      calories: '380 cal',
      difficulty: 'Advanced',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop',
      exercises: ['Squats', 'Lunges', 'Leg Press', 'Calf Raises'],
      description: 'Intense lower body workout for strength and power'
    },
    {
      id: 5,
      title: 'Cardio Dance Party',
      category: 'cardio',
      duration: '35 min',
      calories: '280 cal',
      difficulty: 'Intermediate',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop',
      exercises: ['Dance Moves', 'Jumping Jacks', 'Side Steps', 'Arm Circles'],
      description: 'Fun dance-based cardio workout'
    },
    {
      id: 6,
      title: 'Core Crusher',
      category: 'strength',
      duration: '20 min',
      calories: '200 cal',
      difficulty: 'Intermediate',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      exercises: ['Planks', 'Crunches', 'Russian Twists', 'Leg Raises'],
      description: 'Targeted core strengthening exercises'
    }
  ];

  const filteredWorkouts = activeCategory === 'all' 
    ? workouts 
    : workouts.filter(w => w.category === activeCategory);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

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
            Workout Library
          </h1>
          <p className="text-gray-600">Choose from expert-designed workouts</p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Workouts Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorkouts.map((workout, index) => (
              <motion.div
                key={workout.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedWorkout(workout)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={workout.image}
                    alt={workout.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Difficulty Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(workout.difficulty)}`}>
                      {workout.difficulty}
                    </span>
                  </div>

                  {/* Play Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute bottom-4 right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{workout.title}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                      <span className="text-sm font-semibold text-gray-700">{workout.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{workout.description}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{workout.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame className="w-4 h-4 text-orange-500" />
                      <span>{workout.calories}</span>
                    </div>
                  </div>

                  {/* Start Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl py-3 font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    Start Workout
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Workout Detail Modal */}
        <AnimatePresence>
          {selectedWorkout && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedWorkout(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Image */}
                <div className="relative h-64">
                  <img
                    src={selectedWorkout.image}
                    alt={selectedWorkout.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <button
                    onClick={() => setSelectedWorkout(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedWorkout.title}</h2>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(selectedWorkout.difficulty)}`}>
                          {selectedWorkout.difficulty}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                          <span className="font-semibold text-gray-700">{selectedWorkout.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{selectedWorkout.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Clock className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-bold text-gray-900">{selectedWorkout.duration}</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Flame className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                      <p className="text-sm text-gray-600">Calories</p>
                      <p className="font-bold text-gray-900">{selectedWorkout.calories}</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Target className="w-6 h-6 mx-auto mb-2 text-green-600" />
                      <p className="text-sm text-gray-600">Level</p>
                      <p className="font-bold text-gray-900">{selectedWorkout.difficulty}</p>
                    </div>
                  </div>

                  {/* Exercises */}
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Exercises Included</h3>
                    <div className="space-y-3">
                      {selectedWorkout.exercises.map((exercise, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center p-4 bg-gray-50 rounded-xl"
                        >
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                            <span className="text-white font-bold">{index + 1}</span>
                          </div>
                          <span className="text-gray-900 font-medium">{exercise}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl py-4 font-bold shadow-lg hover:shadow-xl transition-all"
                    >
                      Start Workout
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 bg-gray-100 text-gray-900 rounded-xl py-4 font-bold hover:bg-gray-200 transition-all"
                    >
                      Save
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Workouts;