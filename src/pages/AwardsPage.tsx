import React from 'react';
import { Award, Trophy, Medal, Star, Gift, ChevronRight, Search } from 'lucide-react';

const AwardsPage = () => {
  const awards = [
    {
      id: 1,
      name: 'Grand Prize',
      event: 'Innovation Challenge 2025',
      description: 'Best overall project demonstrating innovation and impact',
      value: '$5,000',
      status: 'upcoming',
      icon: <Trophy className="h-6 w-6" />
    },
    {
      id: 2,
      name: 'Best Technical Achievement',
      event: 'Innovation Challenge 2025',
      description: 'Excellence in technical implementation and architecture',
      value: '$2,500',
      status: 'upcoming',
      icon: <Medal className="h-6 w-6" />
    },
    {
      id: 3,
      name: 'Community Choice',
      event: 'Innovation Challenge 2025',
      description: 'Most popular project voted by the community',
      value: '$1,500',
      status: 'upcoming',
      icon: <Star className="h-6 w-6" />
    },
    {
      id: 4,
      name: 'Best UI/UX Design',
      event: 'Innovation Challenge 2025',
      description: 'Outstanding user interface and experience design',
      value: '$1,000',
      status: 'upcoming',
      icon: <Gift className="h-6 w-6" />
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Awards</h1>
          <p className="text-gray-600">Manage awards and recognition for your events.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="btn btn-primary flex items-center">
            <Award className="h-5 w-5 mr-2" />
            Create New Award
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search awards..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>All Events</option>
              <option>Innovation Challenge 2025</option>
              <option>Code for Good</option>
            </select>
            <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>All Status</option>
              <option>Upcoming</option>
              <option>Awarded</option>
            </select>
          </div>
        </div>
      </div>

      {/* Awards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awards.map(award => (
          <div key={award.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary-50 text-primary-600">
                  {award.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{award.name}</h3>
                  <p className="text-sm text-gray-500">{award.event}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{award.description}</p>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Prize Value</span>
                  <span className="font-medium text-primary-600">{award.value}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Status</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning-100 text-warning-800">
                    {award.status}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full btn btn-outline flex items-center justify-center">
                  Manage Award
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsPage;