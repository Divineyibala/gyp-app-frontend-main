import { Users, DollarSign, Calendar, TrendingUp } from 'lucide-react';

export default function Dashboard({ navigate }) {
  const stats = [
    { label: 'Total Members', value: '2,847', change: '+12%', icon: Users, color: 'bg-blue-500' },
    { label: 'Revenue', value: '$45,231', change: '+8%', icon: DollarSign, color: 'bg-green-500' },
    { label: 'Active Classes', value: '24', change: '+3%', icon: Calendar, color: 'bg-purple-500' },
    { label: 'Growth', value: '18%', change: '+5%', icon: TrendingUp, color: 'bg-orange-500' }
  ];

  const recentMembers = [
    { name: 'John Doe', email: 'john@example.com', plan: 'Pro', status: 'Active' },
    { name: 'Jane Smith', email: 'jane@example.com', plan: 'Elite', status: 'Active' },
    { name: 'Mike Johnson', email: 'mike@example.com', plan: 'Basic', status: 'Pending' }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-2 sm:p-3 rounded-lg`}>
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-green-500 text-xs sm:text-sm font-semibold">{stat.change}</span>
            </div>
            <h3 className="text-gray-600 text-xs sm:text-sm mb-1">{stat.label}</h3>
            <p className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Members */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">Recent Members</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Email</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Plan</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentMembers.map((member, idx) => (
                <tr key={idx}>
                  <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">{member.name}</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-gray-600 hidden sm:table-cell">{member.email}</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">{member.plan}</td>
                  <td className="px-4 sm:px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
