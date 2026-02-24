import { useState } from 'react';
import { Plus, Edit, Trash2, Calendar, Clock, Users } from 'lucide-react';

export default function Classes({ navigate }) {
  const classes = [
    { id: 1, name: 'Morning Yoga', trainer: 'Sarah Johnson', time: '06:00 AM', duration: '60 min', capacity: 20, enrolled: 15, days: 'Mon, Wed, Fri' },
    { id: 2, name: 'HIIT Training', trainer: 'Mike Thompson', time: '07:00 AM', duration: '45 min', capacity: 15, enrolled: 15, days: 'Tue, Thu' },
    { id: 3, name: 'Strength & Conditioning', trainer: 'David Miller', time: '05:00 PM', duration: '90 min', capacity: 25, enrolled: 18, days: 'Mon, Wed, Fri' },
    { id: 4, name: 'Spin Class', trainer: 'Emily Davis', time: '06:30 PM', duration: '45 min', capacity: 20, enrolled: 12, days: 'Tue, Thu, Sat' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Classes Management</h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              <Plus className="w-5 h-5" />
              Add Class
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-gray-600 text-sm">Total Classes</h3>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-gray-600 text-sm">Total Enrolled</h3>
                <p className="text-2xl font-bold text-gray-900">342</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-gray-600 text-sm">Avg Duration</h3>
                <p className="text-2xl font-bold text-gray-900">60 min</p>
              </div>
            </div>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {classes.map((classItem) => (
            <div key={classItem.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{classItem.name}</h3>
                  <p className="text-sm text-gray-600">Trainer: {classItem.trainer}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  {classItem.time} • {classItem.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  {classItem.days}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  {classItem.enrolled}/{classItem.capacity} enrolled
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${(classItem.enrolled / classItem.capacity) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Classes Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">All Classes</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trainer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Days</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Enrolled</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {classes.map((classItem) => (
                  <tr key={classItem.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{classItem.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{classItem.trainer}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{classItem.time}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{classItem.duration}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{classItem.days}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{classItem.enrolled}/{classItem.capacity}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
