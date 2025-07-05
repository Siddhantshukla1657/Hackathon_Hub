import React from 'react';
import { CheckCircle, AlertCircle, Clock } from 'lucide-react';

const Status = () => {
  const systems = [
    {
      name: "API",
      status: "operational",
      uptime: "99.99%",
      lastIncident: "30 days ago"
    },
    {
      name: "Web Application",
      status: "operational",
      uptime: "99.95%",
      lastIncident: "15 days ago"
    },
    {
      name: "Authentication",
      status: "operational",
      uptime: "99.99%",
      lastIncident: "45 days ago"
    },
    {
      name: "Database",
      status: "operational",
      uptime: "99.99%",
      lastIncident: "60 days ago"
    },
    {
      name: "File Storage",
      status: "operational",
      uptime: "99.95%",
      lastIncident: "25 days ago"
    },
    {
      name: "Real-time Services",
      status: "degraded",
      uptime: "99.90%",
      lastIncident: "2 hours ago"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-5 w-5 text-success-500" />;
      case 'degraded':
        return <Clock className="h-5 w-5 text-warning-500" />;
      case 'down':
        return <AlertCircle className="h-5 w-5 text-error-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-success-50 text-success-700';
      case 'degraded':
        return 'bg-warning-50 text-warning-700';
      case 'down':
        return 'bg-error-50 text-error-700';
      default:
        return '';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 mb-4">
          <CheckCircle className="h-6 w-6 text-success-500" />
          <h1 className="text-4xl font-bold text-gray-900">System Status</h1>
        </div>
        <p className="text-lg text-gray-600">
          Current status of all Hackathon Hub services and components.
        </p>
      </div>

      <div className="mt-16">
        <div className="bg-white rounded-lg shadow-soft-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Current Status</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {systems.map((system, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{system.name}</h3>
                    {getStatusIcon(system.status)}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(system.status)}`}>
                      {system.status.charAt(0).toUpperCase() + system.status.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">
                      {system.uptime} uptime
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Last incident: {system.lastIncident}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Incident History</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="h-5 w-5 text-warning-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Real-time Services Degraded Performance</h3>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                  <p className="mt-2 text-sm text-gray-600">
                    We're experiencing increased latency in our real-time services. Our team is investigating the cause.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-success-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">API Performance Issues Resolved</h3>
                  <p className="text-sm text-gray-500">15 days ago</p>
                  <p className="mt-2 text-sm text-gray-600">
                    The API performance issues have been resolved. All systems are operating normally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-primary-50 rounded-lg p-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Subscribe to Updates</h2>
            <p className="text-gray-600 mb-4">
              Get notified about system status changes and incidents.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input flex-1"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;