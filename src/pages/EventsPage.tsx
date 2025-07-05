import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Search, 
  Filter, 
  Users, 
  Award, 
  Clock, 
  ChevronRight, 
  PlusCircle,
  Check
} from 'lucide-react';

// Mock data
const eventsData = [
  { 
    id: 'event1', 
    name: 'Innovation Challenge 2025', 
    description: 'A 48-hour hackathon focused on solving real-world problems using emerging technologies.',
    startDate: '2025-02-20T09:00:00', 
    endDate: '2025-02-22T09:00:00',
    status: 'active',
    registrationOpen: true,
    location: 'Virtual',
    participants: 128,
    teams: 32,
    submissions: 28,
    image: 'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  { 
    id: 'event2', 
    name: 'Code for Good Hackathon', 
    description: 'Bringing together developers to create solutions for nonprofit organizations.',
    startDate: '2025-03-15T10:00:00', 
    endDate: '2025-03-16T18:00:00',
    status: 'scheduled',
    registrationOpen: true,
    location: 'San Francisco, CA',
    participants: 56,
    teams: 14,
    submissions: 0,
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  { 
    id: 'event3', 
    name: 'AI Solutions Jam', 
    description: 'Exploring artificial intelligence solutions for business challenges.',
    startDate: '2025-04-10T08:30:00', 
    endDate: '2025-04-12T17:00:00',
    status: 'draft',
    registrationOpen: false,
    location: 'Virtual',
    participants: 0,
    teams: 0,
    submissions: 0,
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  { 
    id: 'event4', 
    name: 'Sustainability Hackathon', 
    description: 'Creating innovative solutions to address climate change and promote sustainability.',
    startDate: '2025-05-05T09:00:00', 
    endDate: '2025-05-07T18:00:00',
    status: 'scheduled',
    registrationOpen: false,
    location: 'Berlin, Germany',
    participants: 12,
    teams: 4,
    submissions: 0,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  { 
    id: 'event5', 
    name: 'Health Tech Innovations', 
    description: 'Developing solutions to improve healthcare delivery and patient outcomes.',
    startDate: '2025-06-15T09:00:00', 
    endDate: '2025-06-17T17:00:00',
    status: 'scheduled',
    registrationOpen: false,
    location: 'Boston, MA',
    participants: 0,
    teams: 0,
    submissions: 0,
    image: 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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

// Format date range
const formatDateRange = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  // If same day
  if (start.toDateString() === end.toDateString()) {
    return `${formatDate(startDate)}, ${formatTime(startDate)} - ${formatTime(endDate)}`;
  }
  
  // Different days
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};

const EventsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');

  // Filter events based on search term and filters
  const filteredEvents = eventsData.filter(event => {
    // Search term filter
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Status filter
    const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
    
    // Location filter
    const matchesLocation = locationFilter === 'all' || 
                           (locationFilter === 'virtual' && event.location === 'Virtual') ||
                           (locationFilter === 'in-person' && event.location !== 'Virtual');
    
    return matchesSearch && matchesStatus && matchesLocation;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Events</h1>
          <p className="text-gray-600">Manage your hackathons and coding events.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link to="/events/create" className="btn btn-primary flex items-center">
            <PlusCircle className="h-5 w-5 mr-2" />
            Create New Event
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="card p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search events..."
                className="form-input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-auto">
              <div className="relative">
                <select
                  className="form-input pr-10 appearance-none"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="draft">Draft</option>
                  <option value="completed">Completed</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="w-full sm:w-auto">
              <div className="relative">
                <select
                  className="form-input pr-10 appearance-none"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                >
                  <option value="all">All Locations</option>
                  <option value="virtual">Virtual</option>
                  <option value="in-person">In-Person</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <div key={event.id} className="card overflow-hidden group">
            <div className="h-40 overflow-hidden relative">
              <img 
                src={event.image} 
                alt={event.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute top-3 right-3">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  event.status === 'active' ? 'bg-success-100 text-success-800' :
                  event.status === 'scheduled' ? 'bg-primary-100 text-primary-800' :
                  event.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {event.status === 'active' ? (
                    <>
                      <span className="w-1.5 h-1.5 bg-success-600 rounded-full mr-1.5 animate-pulse"></span>
                      Active
                    </>
                  ) : (
                    event.status.charAt(0).toUpperCase() + event.status.slice(1)
                  )}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formatDateRange(event.startDate, event.endDate)}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="bg-gray-50 px-2 py-1 rounded-md flex items-center">
                  <Users className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm">{event.participants}</span>
                </div>
                <div className="bg-gray-50 px-2 py-1 rounded-md flex items-center">
                  <Award className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm">{event.submissions}</span>
                </div>
                {event.registrationOpen && (
                  <div className="bg-primary-50 px-2 py-1 rounded-md flex items-center">
                    <Check className="h-4 w-4 text-primary-500 mr-1" />
                    <span className="text-sm text-primary-700">Open</span>
                  </div>
                )}
              </div>

              <Link 
                to={`/events/${event.id}`} 
                className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
              >
                View details <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-4">
            <Calendar className="h-16 w-16 text-gray-300" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search or filter criteria, or create a new event.
          </p>
          <Link to="/events/create" className="btn btn-primary">
            Create New Event
          </Link>
        </div>
      )}
    </div>
  );
};

export default EventsPage;