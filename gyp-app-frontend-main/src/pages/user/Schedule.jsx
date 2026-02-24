import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, ChevronLeft, ChevronRight, X } from 'lucide-react';

const Schedule = ({ navigate, userData }) => {
  const [selectedDate, setSelectedDate] = useState(17);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const weekDays = [
    { date: 15, day: 'Sun', isToday: false },
    { date: 16, day: 'Mon', isToday: false },
    { date: 17, day: 'Tue', isToday: true },
    { date: 18, day: 'Wed', isToday: false },
    { date: 19, day: 'Thu', isToday: false },
    { date: 20, day: 'Fri', isToday: false },
    { date: 21, day: 'Sat', isToday: false }
  ];

  const classes = [
    {
      id: 1,
      name: 'Morning Yoga',
      trainer: 'Emma Davis',
      time: '07:00 AM',
      duration: 60,
      spots: 12,
      maxSpots: 15,
      type: 'Yoga',
      location: 'Studio A',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'HIIT Training',
      trainer: 'Mike Johnson',
      time: '09:00 AM',
      duration: 45,
      spots: 8,
      maxSpots: 10,
      type: 'HIIT',
      location: 'Main Floor',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Strength Training',
      trainer: 'Sarah Wilson',
      time: '11:00 AM',
      duration: 60,
      spots: 6,
      maxSpots: 8,
      type: 'Strength',
      location: 'Weight Room',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=100&h=100&fit=crop'
    },
    {
      id: 4,
      name: 'Pilates',
      trainer: 'Lisa Chen',
      time: '02:00 PM',
      duration: 50,
      spots: 10,
      maxSpots: 12,
      type: 'Pilates',
      location: 'Studio B',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=100&h=100&fit=crop'
    },
    {
      id: 5,
      name: 'Cardio Blast',
      trainer: 'Tom Rodriguez',
      time: '04:00 PM',
      duration: 45,
      spots: 15,
      maxSpots: 20,
      type: 'Cardio',
      location: 'Main Floor',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=100&h=100&fit=crop'
    },
    {
      id: 6,
      name: 'Evening Yoga',
      trainer: 'Emma Davis',
      time: '06:00 PM',
      duration: 60,
      spots: 8,
      maxSpots: 15,
      type: 'Yoga',
      location: 'Studio A',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=100&h=100&fit=crop'
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      'Yoga': 'from-purple-400 to-purple-600',
      'HIIT': 'from-red-400 to-red-600',
      'Strength': 'from-blue-400 to-blue-600',
      'Pilates': 'from-pink-400 to-pink-600',
      'Cardio': 'from-orange-400 to-orange-600'
    };
    return colors[type] || 'from-gray-400 to-gray-600';
  };

  const handleBookClass = (classItem) => {
    setSelectedClass(classItem);
    setShowBookingModal(true);
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
            Class Schedule
          </h1>
          <p className="text-gray-600">Book your favorite classes</p>
        </motion.div>

        {/* Calendar Week View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 shadow-lg mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-600" />
              February 2026
            </h2>
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {weekDays.map((day, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDate(day.date)}
                className={`p-4 rounded-xl text-center transition-all ${
                  day.isToday
                    ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg'
                    : selectedDate === day.date
                    ? 'bg-green-100 text-green-700'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="text-xs font-medium mb-1">{day.day}</div>
                <div className="text-lg font-bold">{day.date}</div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Classes List */}
        <div className="space-y-4">
          {classes.map((classItem, index) => (
            <motion.div
              key={classItem.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Class Image */}
                <div className="relative">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${getTypeColor(classItem.type)} flex items-center justify-center overflow-hidden`}>
                    <img
                      src={classItem.image}
                      alt={classItem.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Class Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{classItem.name}</h3>
                      <p className="text-gray-600 text-sm">with {classItem.trainer}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${getTypeColor(classItem.type)} text-white shadow-lg`}>
                      {classItem.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">{classItem.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{classItem.duration} min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{classItem.location}</span>
                    </div>
                  </div>

                  {/* Spots Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Available Spots</span>
                      <span className="font-semibold text-gray-900">
                        {classItem.spots}/{classItem.maxSpots}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(classItem.spots / classItem.maxSpots) * 100}%` }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        className={`h-2 rounded-full ${
                          classItem.spots < 5 ? 'bg-red-500' : 'bg-green-500'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Book Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleBookClass(classItem)}
                  disabled={classItem.spots === 0}
                  className={`px-8 py-3 rounded-xl font-bold transition-all ${
                    classItem.spots === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {classItem.spots === 0 ? 'Full' : 'Book Now'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Booking Modal */}
        <AnimatePresence>
          {showBookingModal && selectedClass && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setShowBookingModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-md w-full p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Confirm Booking</h2>
                  <button
                    onClick={() => setShowBookingModal(false)}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-6">
                  <div className={`w-full h-32 rounded-xl bg-gradient-to-br ${getTypeColor(selectedClass.type)} mb-4 overflow-hidden`}>
                    <img
                      src={selectedClass.image}
                      alt={selectedClass.name}
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedClass.name}</h3>
                  <p className="text-gray-600 mb-4">with {selectedClass.trainer}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Clock className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm text-gray-600">Time</p>
                      <p className="font-bold text-gray-900">{selectedClass.time}</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Users className="w-6 h-6 mx-auto mb-2 text-green-600" />
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-bold text-gray-900">{selectedClass.duration} min</p>
                    </div>
                  </div>

                  <div className="text-center p-4 bg-green-50 rounded-xl border-2 border-green-200">
                    <p className="text-sm text-green-600 mb-1">Available Spots</p>
                    <p className="text-2xl font-bold text-green-700">{selectedClass.spots} remaining</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowBookingModal(false)}
                    className="flex-1 bg-gray-100 text-gray-900 rounded-xl py-3 font-bold hover:bg-gray-200 transition-all"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowBookingModal(false);
                      // Handle booking logic
                    }}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl py-3 font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                    Confirm
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Schedule;
