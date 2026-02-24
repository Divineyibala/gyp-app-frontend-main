import { useState } from 'react';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';

export default function Trainers({ navigate }) {
  const trainers = [
    { id: 1, name: 'Mike Thompson', specialty: 'Strength Training', email: 'mike@gym.com', phone: '+1234567890', status: 'Active', experience: '5 years' },
    { id: 2, name: 'Sarah Johnson', specialty: 'Yoga & Wellness', email: 'sarah@gym.com', phone: '+1234567891', status: 'Active', experience: '8 years' },
    { id: 3, name: 'David Miller', specialty: 'Cardio Training', email: 'david@gym.com', phone: '+1234567892', status: 'Active', experience: '3 years' },
    { id: 4, name: 'Emily Davis', specialty: 'CrossFit', email: 'emily@gym.com', phone: '+1234567893', status: 'Inactive', experience: '6 years' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Trainers Management</h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              <Plus className="w-5 h-5" />
              Add Trainer
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search trainers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  trainer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {trainer.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{trainer.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{trainer.specialty}</p>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600">{trainer.email}</p>
                <p className="text-sm text-gray-600">{trainer.phone}</p>
                <p className="text-sm text-gray-600">Experience: {trainer.experience}</p>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button className="px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trainers Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">All Trainers</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Specialty</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Experience</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {trainers.map((trainer) => (
                  <tr key={trainer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{trainer.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{trainer.specialty}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{trainer.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{trainer.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{trainer.experience}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        trainer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {trainer.status}
                      </span>
                    </td>
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
