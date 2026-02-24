import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Profile = ({ navigate, userData }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: userData?.fullName || 'John Doe',
    email: userData?.email || 'john.doe@example.com',
    phone: userData?.phone || '+1 (555) 123-4567',
    dateOfBirth: '1990-05-15',
    height: '180',
    weight: '75',
    fitnessGoal: 'Build Muscle',
    experience: 'Intermediate'
  });

  const [stats, setStats] = useState({
    totalWorkouts: 127,
    totalHours: 89,
    caloriesBurned: 15420,
    currentStreak: 12,
    personalBests: [
      { exercise: 'Bench Press', weight: '85kg', date: '2026-02-10' },
      { exercise: 'Deadlift', weight: '120kg', date: '2026-02-08' },
      { exercise: 'Squat', weight: '100kg', date: '2026-02-05' }
    ]
  });

  const achievements = [
    { id: 1, title: 'First Workout', description: 'Complete your first workout', earned: true, date: '2025-12-01' },
    { id: 2, title: '7-Day Streak', description: 'Workout for 7 consecutive days', earned: true, date: '2026-01-15' },
    { id: 3, title: 'Strength Builder', description: 'Complete 50 strength workouts', earned: true, date: '2026-02-01' },
    { id: 4, title: 'Cardio King', description: 'Burn 10,000 calories', earned: true, date: '2026-01-28' },
    { id: 5, title: 'Century Club', description: 'Complete 100 workouts', earned: true, date: '2026-02-12' },
    { id: 6, title: 'Marathon Runner', description: 'Complete 30 cardio sessions', earned: false, progress: 24 }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Handle save logic here
  };

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'stats', name: 'Statistics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { id: 'achievements', name: 'Achievements', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Profile</h1>
          <p className="text-gray-400">Manage your personal information and track your progress</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-800/50 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
              </svg>
              <span className="font-medium">{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Profile Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-3xl font-bold">
                    {profileData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-1">{profileData.name}</h2>
                    <p className="text-gray-400">{profileData.email}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                        {profileData.experience}
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {profileData.fitnessGoal}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all"
                >
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
              </div>

              {/* Profile Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
                    />
                  ) : (
                    <p className="text-lg">{profileData.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
                    />
                  ) : (
                    <p className="text-lg">{profileData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
                    />
                  ) : (
                    <p className="text-lg">{profileData.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Date of Birth</label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={profileData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
                    />
                  ) : (
                    <p className="text-lg">{new Date(profileData.dateOfBirth).toLocaleDateString()}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Height (cm)</label>
                  {isEditing ? (
                    <input
                      type="number"
                      value={profileData.height}
                      onChange={(e) => handleInputChange('height', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
                    />
                  ) : (
                    <p className="text-lg">{profileData.height} cm</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Weight (kg)</label>
                  {isEditing ? (
                    <input
                      type="number"
                      value={profileData.weight}
                      onChange={(e) => handleInputChange('weight', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
                    />
                  ) : (
                    <p className="text-lg">{profileData.weight} kg</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Fitness Goal</label>
                  {isEditing ? (
                    <select
                      value={profileData.fitnessGoal}
                      onChange={(e) => handleInputChange('fitnessGoal', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
                    >
                      <option>Build Muscle</option>
                      <option>Lose Weight</option>
                      <option>Improve Endurance</option>
                      <option>General Fitness</option>
                      <option>Athletic Performance</option>
                    </select>
                  ) : (
                    <p className="text-lg">{profileData.fitnessGoal}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Experience Level</label>
                  {isEditing ? (
                    <select
                      value={profileData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500"
                    >
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Expert</option>
                    </select>
                  ) : (
                    <p className="text-lg">{profileData.experience}</p>
                  )}
                </div>
              </div>

              {isEditing && (
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={handleSaveProfile}
                    className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all font-medium"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 border border-orange-500/30 rounded-xl p-6">
                <div className="text-3xl font-bold mb-1">{stats.totalWorkouts}</div>
                <div className="text-sm text-gray-400">Total Workouts</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-6">
                <div className="text-3xl font-bold mb-1">{stats.totalHours}h</div>
                <div className="text-sm text-gray-400">Training Hours</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6">
                <div className="text-3xl font-bold mb-1">{stats.caloriesBurned.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Calories Burned</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6">
                <div className="text-3xl font-bold mb-1">{stats.currentStreak} 🔥</div>
                <div className="text-sm text-gray-400">Day Streak</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Statistics Tab */}
        {activeTab === 'stats' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Personal Bests */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Personal Bests</h3>
              <div className="space-y-4">
                {stats.personalBests.map((pb, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{pb.exercise}</div>
                        <div className="text-sm text-gray-400">{new Date(pb.date).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-orange-400">{pb.weight}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Charts Placeholder */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Progress Over Time</h3>
              <div className="h-64 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p>Progress charts coming soon</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Your Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      achievement.earned
                        ? 'bg-gradient-to-br from-orange-500/20 to-red-600/20 border-orange-500/50'
                        : 'bg-gray-700/30 border-gray-600 opacity-60'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                        achievement.earned
                          ? 'bg-gradient-to-br from-orange-500 to-red-600'
                          : 'bg-gray-600'
                      }`}>
                        {achievement.earned ? '🏆' : '🔒'}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1">{achievement.title}</h4>
                        <p className="text-sm text-gray-400 mb-2">{achievement.description}</p>
                        {achievement.earned ? (
                          <p className="text-xs text-orange-400">Earned on {new Date(achievement.date).toLocaleDateString()}</p>
                        ) : achievement.progress ? (
                          <div className="mt-2">
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                              <span>Progress</span>
                              <span>{achievement.progress}/30</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full"
                                style={{ width: `${(achievement.progress / 30) * 100}%` }}
                              />
                            </div>
                          </div>
                        ) : (
                          <p className="text-xs text-gray-500">Not yet earned</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Profile;