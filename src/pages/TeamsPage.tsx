import React from 'react';
import { Link } from 'react-router-dom';
import { Users, UserPlus, Settings, ChevronRight, Search } from 'lucide-react';

const TeamsPage = () => {
  const teams = [
    {
      id: 1,
      name: 'Team Alpha',
      members: 4,
      leader: 'Sarah Chen',
      projects: 2,
      status: 'active',
      avatar: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'Code Warriors',
      members: 3,
      leader: 'James Wilson',
      projects: 1,
      status: 'active',
      avatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: 'Innovation Hub',
      members: 5,
      leader: 'Emily Rodriguez',
      projects: 3,
      status: 'active',
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Teams</h1>
          <p className="text-gray-600">Manage your teams and collaborations.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="btn btn-primary flex items-center">
            <UserPlus className="h-5 w-5 mr-2" />
            Create New Team
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
                placeholder="Search teams..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Sort By</option>
              <option>Name</option>
              <option>Members</option>
              <option>Projects</option>
            </select>
          </div>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map(team => (
          <div key={team.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src={team.avatar}
                  alt={team.name}
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{team.name}</h3>
                  <p className="text-sm text-gray-500">Led by {team.leader}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Members</span>
                  <span className="font-medium">{team.members}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Projects</span>
                  <span className="font-medium">{team.projects}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Status</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                    {team.status}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <Link
                  to={`/teams/${team.id}`}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
                >
                  View details
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Settings className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;