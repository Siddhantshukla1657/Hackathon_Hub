import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Calendar, 
  Users, 
  Award, 
  Clock, 
  ArrowUpRight, 
  ChevronRight, 
  BarChart3,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

// Mock data
const upcomingEvents = [
  { 
    id: 'event1', 
    name: 'Innovation Challenge 2025', 
    date: '2025-02-20T09:00:00', 
    status: 'active',
    participants: 128,
    teams: 32,
    submissions: 28
  },
  { 
    id: 'event2', 
    name: 'Code for Good Hackathon', 
    date: '2025-03-15T10:00:00', 
    status: 'scheduled',
    participants: 56,
    teams: 14,
    submissions: 0
  },
  { 
    id: 'event3', 
    name: 'AI Solutions Jam', 
    date: '2025-04-10T08:30:00', 
    status: 'draft',
    participants: 0,
    teams: 0,
    submissions: 0
  },
];

const recentActivities = [
  { 
    id: 'activity1', 
    type: 'submission', 
    user: 'Team Alpha', 
    action: 'submitted a project', 
    target: 'Smart City Model', 
    date: '2025-01-15T14:20:00', 
    eventId: 'event1' 
  },
  { 
    id: 'activity2', 
    type: 'team', 
    user: 'Jane Cooper', 
    action: 'joined the team', 
    target: 'Code Warriors', 
    date: '2025-01-15T10:45:00', 
    eventId: 'event1' 
  },
  { 
    id: 'activity3', 
    type: 'judging', 
    user: 'Mark Wilson', 
    action: 'completed judging', 
    target: '5 projects', 
    date: '2025-01-14T17:30:00', 
    eventId: 'event1' 
  },
  { 
    id: 'activity4', 
    type: 'registration', 
    user: 'Sarah Chen', 
    action: 'registered for', 
    target: 'Code for Good Hackathon', 
    date: '2025-01-14T09:15:00', 
    eventId: 'event2' 
  },
];

const todosData = [
  { 
    id: 'todo1', 
    task: 'Review project submissions', 
    event: 'Innovation Challenge 2025',
    eventId: 'event1',
    deadline: '2025-01-20T23:59:59',
    priority: 'high'
  },
  { 
    id: 'todo2', 
    task: 'Finalize judge assignments', 
    event: 'Innovation Challenge 2025',
    eventId: 'event1',
    deadline: '2025-01-18T23:59:59',
    priority: 'medium'
  },
  { 
    id: 'todo3', 
    task: 'Send reminder to participants', 
    event: 'Code for Good Hackathon',
    eventId: 'event2',
    deadline: '2025-01-25T23:59:59',
    priority: 'medium'
  },
  { 
    id: 'todo4', 
    task: 'Update event schedule', 
    event: 'AI Solutions Jam',
    eventId: 'event3',
    deadline: '2025-02-01T23:59:59',
    priority: 'low'
  },
];

// Format date for display
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Format time for display
const formatTime = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleTimeString(undefined, options);
};

// Format date and time for display
const formatDateTime = (dateString: string) => {
  return `${formatDate(dateString)} at ${formatTime(dateString)}`;
};

// Format time ago for activities
const formatTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}d ago`;
  } else if (hours > 0) {
    return `${hours}h ago`;
  } else if (minutes > 0) {
    return `${minutes}m ago`;
  } else {
    return 'Just now';
  }
};

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name || 'User'}! Here's what's happening.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link to="/events/create" className="btn btn-primary">
            Create New Event
          </Link>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6 flex flex-col">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-primary-100 text-primary-600">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="ml-3 text-lg font-medium text-gray-700">Active Events</h3>
          </div>
          <div className="flex-1">
            <p className="text-3xl font-bold mb-1">3</p>
            <p className="text-sm text-gray-500">2 active, 1 upcoming</p>
          </div>
          <Link to="/events" className="mt-4 text-primary-600 hover:text-primary-700 text-sm flex items-center">
            View all events <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="card p-6 flex flex-col">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-secondary-100 text-secondary-600">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="ml-3 text-lg font-medium text-gray-700">Participants</h3>
          </div>
          <div className="flex-1">
            <p className="text-3xl font-bold mb-1">184</p>
            <p className="text-sm text-gray-500">46 teams formed</p>
          </div>
          <Link to="/teams" className="mt-4 text-primary-600 hover:text-primary-700 text-sm flex items-center">
            Manage teams <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="card p-6 flex flex-col">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-accent-100 text-accent-600">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h3 className="ml-3 text-lg font-medium text-gray-700">Submissions</h3>
          </div>
          <div className="flex-1">
            <p className="text-3xl font-bold mb-1">28</p>
            <p className="text-sm text-gray-500">12 pending review</p>
          </div>
          <Link to="/projects" className="mt-4 text-primary-600 hover:text-primary-700 text-sm flex items-center">
            View submissions <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="card p-6 flex flex-col">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-success-100 text-success-600">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="ml-3 text-lg font-medium text-gray-700">Judging</h3>
          </div>
          <div className="flex-1">
            <p className="text-3xl font-bold mb-1">15%</p>
            <p className="text-sm text-gray-500">Judging in progress</p>
          </div>
          <Link to="/judging" className="mt-4 text-primary-600 hover:text-primary-700 text-sm flex items-center">
            Go to judging <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upcoming Events */}
        <div className="lg:col-span-2">
          <div className="card p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
              <Link to="/events" className="text-primary-600 hover:text-primary-700 text-sm flex items-center">
                View all <ArrowUpRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="space-y-6">
              {upcomingEvents.map(event => (
                <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center">
                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                          event.status === 'active' ? 'bg-success-500' :
                          event.status === 'scheduled' ? 'bg-warning-500' : 'bg-gray-400'
                        }`}></span>
                        <span className="text-sm text-gray-500 capitalize">{event.status}</span>
                      </div>
                      <h3 className="text-lg font-medium mt-1">{event.name}</h3>
                      <div className="flex items-center mt-2 text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{formatDate(event.date)}</span>
                        <Clock className="h-4 w-4 ml-3 mr-1" />
                        <span>{formatTime(event.date)}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <div className="bg-gray-50 px-3 py-2 rounded-md">
                        <div className="text-sm text-gray-500">Participants</div>
                        <div className="font-medium">{event.participants}</div>
                      </div>
                      <div className="bg-gray-50 px-3 py-2 rounded-md">
                        <div className="text-sm text-gray-500">Teams</div>
                        <div className="font-medium">{event.teams}</div>
                      </div>
                      <div className="bg-gray-50 px-3 py-2 rounded-md">
                        <div className="text-sm text-gray-500">Submissions</div>
                        <div className="font-medium">{event.submissions}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <Link to={`/events/${event.id}`} className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      View details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* To-do List */}
        <div className="lg:col-span-1">
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-6">To-Do List</h2>
            
            <div className="space-y-4">
              {todosData.map(todo => (
                <div 
                  key={todo.id} 
                  className={`rounded-lg p-3 ${
                    todo.priority === 'high' ? 'bg-error-50 border-l-4 border-error-500' :
                    todo.priority === 'medium' ? 'bg-warning-50 border-l-4 border-warning-500' :
                    'bg-gray-50 border-l-4 border-gray-300'
                  }`}
                >
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h4 className="font-medium">{todo.task}</h4>
                      <div className="text-sm text-gray-600 mt-1">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDate(todo.deadline)}
                        </span>
                        <span className="flex items-center mt-1">
                          <Link to={`/events/${todo.eventId}`} className="text-primary-600 hover:text-primary-700">
                            {todo.event}
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className="ml-2">
                      <button 
                        className="p-1 hover:bg-white rounded-full transition-colors"
                        aria-label="Mark as complete"
                      >
                        <CheckCircle className="h-5 w-5 text-gray-400 hover:text-success-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 py-2 text-center text-sm font-medium text-primary-600 hover:text-primary-700 border border-gray-200 hover:border-primary-300 rounded-md transition-colors">
              + Add new task
            </button>
          </div>

          {/* Recent Activity */}
          <div className="card p-6 mt-6">
            <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
            
            <div className="space-y-4">
              {recentActivities.map(activity => (
                <div key={activity.id} className="flex">
                  <div className="mr-3">
                    <div className={`rounded-full p-2 ${
                      activity.type === 'submission' ? 'bg-success-100 text-success-600' :
                      activity.type === 'team' ? 'bg-accent-100 text-accent-600' :
                      activity.type === 'judging' ? 'bg-primary-100 text-primary-600' :
                      'bg-secondary-100 text-secondary-600'
                    }`}>
                      {activity.type === 'submission' ? <CheckCircle className="h-4 w-4" /> :
                      activity.type === 'team' ? <Users className="h-4 w-4" /> :
                      activity.type === 'judging' ? <Award className="h-4 w-4" /> :
                      <AlertCircle className="h-4 w-4" />}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>
                      {' '}{activity.action}{' '}
                      <span className="font-medium">{activity.target}</span>
                    </p>
                    <span className="text-xs text-gray-500">{formatTimeAgo(activity.date)}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/activity" className="block w-full mt-4 py-2 text-center text-sm font-medium text-primary-600 hover:text-primary-700 border border-gray-200 hover:border-primary-300 rounded-md transition-colors">
              View all activity
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;