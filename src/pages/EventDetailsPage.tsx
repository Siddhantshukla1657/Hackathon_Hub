import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Award, 
  FileText, 
  Edit, 
  Settings, 
  Share2, 
  ExternalLink, 
  MessageCircle, 
  User,
  ChevronDown,
  Check,
  AlertTriangle
} from 'lucide-react';

// Mock data for the event
const eventData = {
  id: 'event1',
  name: 'Innovation Challenge 2025',
  description: 'A 48-hour hackathon focused on solving real-world problems using emerging technologies. Participants will work in teams to develop innovative solutions that address challenges in areas such as healthcare, sustainability, and education.',
  startDate: '2025-02-20T09:00:00',
  endDate: '2025-02-22T09:00:00',
  status: 'active',
  registrationOpen: true,
  location: 'Virtual',
  participants: 128,
  teams: 32,
  submissions: 28,
  judges: 8,
  prizes: [
    { name: 'Grand Prize', value: '$5,000', description: 'For the most innovative solution' },
    { name: 'Runner-up', value: '$2,500', description: 'For the second-place team' },
    { name: 'Best UI/UX', value: '$1,000', description: 'For the project with the best user experience' },
    { name: 'Community Choice', value: '$1,000', description: 'Voted by all participants' }
  ],
  timeline: [
    { name: 'Registration Opens', date: '2025-01-15T09:00:00', completed: true },
    { name: 'Registration Closes', date: '2025-02-19T23:59:59', completed: true },
    { name: 'Opening Ceremony', date: '2025-02-20T09:00:00', completed: true },
    { name: 'Hacking Begins', date: '2025-02-20T10:00:00', completed: true },
    { name: 'Mentor Sessions', date: '2025-02-20T14:00:00', completed: true },
    { name: 'Workshop: AI Basics', date: '2025-02-20T16:00:00', completed: true },
    { name: 'Dinner Break', date: '2025-02-20T18:00:00', completed: true },
    { name: 'Workshop: APIs', date: '2025-02-21T10:00:00', completed: false },
    { name: 'Project Check-in', date: '2025-02-21T15:00:00', completed: false },
    { name: 'Hacking Ends', date: '2025-02-22T09:00:00', completed: false },
    { name: 'Presentations', date: '2025-02-22T11:00:00', completed: false },
    { name: 'Judging Period', date: '2025-02-22T13:00:00', completed: false },
    { name: 'Awards Ceremony', date: '2025-02-22T16:00:00', completed: false }
  ],
  sponsors: [
    { id: 'sponsor1', name: 'TechCorp', tier: 'platinum', logo: 'https://images.pexels.com/photos/9566025/pexels-photo-9566025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 'sponsor2', name: 'Innovate Inc.', tier: 'gold', logo: 'https://images.pexels.com/photos/9566025/pexels-photo-9566025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 'sponsor3', name: 'Future Systems', tier: 'silver', logo: 'https://images.pexels.com/photos/9566025/pexels-photo-9566025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 'sponsor4', name: 'Code Labs', tier: 'bronze', logo: 'https://images.pexels.com/photos/9566025/pexels-photo-9566025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
  ],
  image: 'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
};

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

const EventDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  
  // In a real application, you would fetch the event data based on the ID
  // For this demo, we'll use the mock data

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-success-100 text-success-800';
      case 'scheduled':
        return 'bg-primary-100 text-primary-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="space-y-8">
      {/* Event Header */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="h-48 relative">
          <img 
            src={eventData.image} 
            alt={eventData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <div className="flex items-center mb-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-opacity-80 ${
                getStatusClass(eventData.status)
              }`}>
                {eventData.status === 'active' ? (
                  <>
                    <span className="w-1.5 h-1.5 bg-success-600 rounded-full mr-1.5 animate-pulse"></span>
                    Active
                  </>
                ) : (
                  eventData.status.charAt(0).toUpperCase() + eventData.status.slice(1)
                )}
              </span>
              {eventData.registrationOpen && (
                <span className="inline-flex items-center ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 bg-opacity-80">
                  <Check className="h-3 w-3 mr-1" />
                  Registration Open
                </span>
              )}
            </div>
            <h1 className="text-4xl font-bold mb-1">{eventData.name}</h1>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatDate(eventData.startDate)} - {formatDate(eventData.endDate)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{formatTime(eventData.startDate)} - {formatTime(eventData.endDate)}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{eventData.location}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="border-b border-gray-200 px-6 py-4 bg-white">
          <div className="flex flex-wrap gap-3 justify-end">
            <button className="btn btn-outline text-sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </button>
            <Link to={`/events/${id}/edit`} className="btn btn-outline text-sm">
              <Edit className="h-4 w-4 mr-2" />
              Edit Event
            </Link>
            <button className="btn btn-primary text-sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Public Page
            </button>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200 px-6 bg-white">
          <button
            className={`py-4 px-4 text-sm font-medium border-b-2 ${
              activeTab === 'overview'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`py-4 px-4 text-sm font-medium border-b-2 ${
              activeTab === 'participants'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('participants')}
          >
            Participants
          </button>
          <button
            className={`py-4 px-4 text-sm font-medium border-b-2 ${
              activeTab === 'projects'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button
            className={`py-4 px-4 text-sm font-medium border-b-2 ${
              activeTab === 'judging'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('judging')}
          >
            Judging
          </button>
          <button
            className={`py-4 px-4 text-sm font-medium border-b-2 ${
              activeTab === 'settings'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Description */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">About this Hackathon</h2>
              <p className="text-gray-700 whitespace-pre-line mb-6">{eventData.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Users className="h-6 w-6 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{eventData.participants}</div>
                  <div className="text-sm text-gray-500">Participants</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Users className="h-6 w-6 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{eventData.teams}</div>
                  <div className="text-sm text-gray-500">Teams</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <FileText className="h-6 w-6 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{eventData.submissions}</div>
                  <div className="text-sm text-gray-500">Submissions</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Award className="h-6 w-6 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{eventData.judges}</div>
                  <div className="text-sm text-gray-500">Judges</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Event Timeline</h2>
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-6 mt-5 mb-5 w-0.5 bg-gray-200"></div>
                <div className="space-y-4">
                  {eventData.timeline.map((item, index) => (
                    <div key={index} className="flex items-start ml-2">
                      <div className={`flex-shrink-0 h-4 w-4 rounded-full mt-1 mr-3 ${
                        item.completed ? 'bg-success-500' : 'bg-gray-300'
                      }`}></div>
                      <div className={`flex flex-col sm:flex-row sm:justify-between w-full pb-4 ${
                        index === eventData.timeline.length - 1 ? 'pb-0' : ''
                      }`}>
                        <div>
                          <h3 className={`text-base font-medium ${
                            item.completed ? 'text-gray-900' : 'text-gray-700'
                          }`}>
                            {item.name}
                          </h3>
                        </div>
                        <div className="text-sm text-gray-500 mt-1 sm:mt-0">
                          {formatDateTime(item.date)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Prizes */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Prizes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eventData.prizes.map((prize, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-primary-500 mr-2" />
                      <h3 className="text-lg font-medium">{prize.name}</h3>
                    </div>
                    <div className="text-xl font-bold text-primary-600 mb-2">{prize.value}</div>
                    <p className="text-gray-600 text-sm">{prize.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sponsors */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Sponsors</h2>
              <div className="space-y-6">
                {/* Platinum Sponsors */}
                <div>
                  <h3 className="text-base font-medium text-gray-700 mb-3">Platinum Sponsors</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {eventData.sponsors
                      .filter(sponsor => sponsor.tier === 'platinum')
                      .map(sponsor => (
                        <div key={sponsor.id} className="border border-gray-200 rounded-lg p-4 flex items-center justify-center h-24">
                          <img src={sponsor.logo} alt={sponsor.name} className="max-h-16 max-w-full" />
                        </div>
                      ))}
                  </div>
                </div>
                
                {/* Gold Sponsors */}
                <div>
                  <h3 className="text-base font-medium text-gray-700 mb-3">Gold Sponsors</h3>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    {eventData.sponsors
                      .filter(sponsor => sponsor.tier === 'gold')
                      .map(sponsor => (
                        <div key={sponsor.id} className="border border-gray-200 rounded-lg p-4 flex items-center justify-center h-20">
                          <img src={sponsor.logo} alt={sponsor.name} className="max-h-12 max-w-full" />
                        </div>
                      ))}
                  </div>
                </div>
                
                {/* Other Sponsors */}
                <div>
                  <h3 className="text-base font-medium text-gray-700 mb-3">Other Sponsors</h3>
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                    {eventData.sponsors
                      .filter(sponsor => ['silver', 'bronze'].includes(sponsor.tier))
                      .map(sponsor => (
                        <div key={sponsor.id} className="border border-gray-200 rounded-lg p-2 flex items-center justify-center h-16">
                          <img src={sponsor.logo} alt={sponsor.name} className="max-h-10 max-w-full" />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Event Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Event Status</h2>
              
              {/* Current Status */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Current Status</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    getStatusClass(eventData.status)
                  }`}>
                    {eventData.status === 'active' ? (
                      <>
                        <span className="w-1.5 h-1.5 bg-success-600 rounded-full mr-1.5 animate-pulse"></span>
                        Active
                      </>
                    ) : (
                      eventData.status.charAt(0).toUpperCase() + eventData.status.slice(1)
                    )}
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                  <div className="bg-primary-500 h-2.5 rounded-full w-3/5"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Start</span>
                  <span>In Progress (Day 1 of 3)</span>
                  <span>End</span>
                </div>
              </div>
              
              {/* Key Dates */}
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Key Dates</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Registration Opens</span>
                    <span className="font-medium">{formatDate(eventData.timeline[0].date)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Registration Closes</span>
                    <span className="font-medium">{formatDate(eventData.timeline[1].date)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Event Starts</span>
                    <span className="font-medium">{formatDate(eventData.timeline[2].date)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Event Ends</span>
                    <span className="font-medium">{formatDate(eventData.timeline[11].date)}</span>
                  </div>
                </div>
              </div>
              
              {/* Registration Status */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Registration</h3>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Status</span>
                  <span className={`font-medium ${eventData.registrationOpen ? 'text-success-600' : 'text-error-600'}`}>
                    {eventData.registrationOpen ? 'Open' : 'Closed'}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Registered Participants</span>
                  <span className="font-medium">{eventData.participants}</span>
                </div>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full btn btn-primary text-sm justify-between">
                  <span className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Announcement
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <button className="w-full btn btn-outline text-sm justify-between">
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Manage Participants
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <button className="w-full btn btn-outline text-sm justify-between">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Update Schedule
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="mr-3">
                    <div className="bg-success-100 p-2 rounded-full">
                      <Check className="h-4 w-4 text-success-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">Team Alpha</span> submitted their project
                    </p>
                    <span className="text-xs text-gray-500">1 hour ago</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3">
                    <div className="bg-primary-100 p-2 rounded-full">
                      <Users className="h-4 w-4 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">Jane Cooper</span> joined Team CodeWarriors
                    </p>
                    <span className="text-xs text-gray-500">3 hours ago</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3">
                    <div className="bg-warning-100 p-2 rounded-full">
                      <AlertTriangle className="h-4 w-4 text-warning-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">Workshop: AI Basics</span> completed
                    </p>
                    <span className="text-xs text-gray-500">5 hours ago</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3">
                    <div className="bg-accent-100 p-2 rounded-full">
                      <User className="h-4 w-4 text-accent-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">Mark Wilson</span> registered for the event
                    </p>
                    <span className="text-xs text-gray-500">8 hours ago</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 text-center text-sm font-medium text-primary-600 hover:text-primary-700">
                View all activity
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Placeholder for other tabs */}
      {activeTab !== 'overview' && (
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
          <p className="text-gray-600 mb-8">This tab is not implemented in the demo.</p>
          <button 
            className="btn btn-primary"
            onClick={() => setActiveTab('overview')}
          >
            Return to Overview
          </button>
        </div>
      )}
    </div>
  );
};

export default EventDetailsPage;