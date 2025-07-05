import React from 'react';
import { Calendar, Users, Award, BarChart2, Monitor, MessageCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Formation",
      description: "Intuitive tools for creating and joining teams, with skill-based matchmaking for ideal collaborations."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Event Scheduling",
      description: "Create detailed schedules with automated notifications for key milestones and deadlines."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Judging & Voting",
      description: "Streamlined judging process with customizable criteria and real-time leaderboards."
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Project Showcase",
      description: "Dynamic gallery to highlight submissions with filtering and sorting capabilities."
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Real-time Communication",
      description: "Built-in messaging and discussion forums for participants, mentors, and judges."
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Analytics & Insights",
      description: "Comprehensive dashboards to track engagement, participation, and other key metrics."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Platform Features</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to run successful hackathons, from registration to judging and beyond.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-soft-md p-6 hover:shadow-soft-lg transition-shadow">
            <div className="p-3 rounded-lg bg-primary-50 text-primary-600 w-fit mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;