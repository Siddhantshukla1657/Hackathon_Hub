import React from 'react';
import { Search, Book, MessageCircle, FileText, ArrowRight } from 'lucide-react';

const HelpCenter = () => {
  const categories = [
    {
      title: "Getting Started",
      icon: <Book className="h-6 w-6" />,
      articles: [
        "Quick Start Guide",
        "Creating Your First Event",
        "Team Formation Basics",
        "Managing Participants"
      ]
    },
    {
      title: "Event Management",
      icon: <FileText className="h-6 w-6" />,
      articles: [
        "Setting Up Registration",
        "Creating Judging Criteria",
        "Managing Submissions",
        "Event Timeline Setup"
      ]
    },
    {
      title: "Platform Features",
      icon: <MessageCircle className="h-6 w-6" />,
      articles: [
        "Communication Tools",
        "Analytics Dashboard",
        "Project Showcase",
        "Team Collaboration"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help?</h1>
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-soft-md p-6">
            <div className="p-3 rounded-lg bg-primary-50 text-primary-600 w-fit mb-4">
              {category.icon}
            </div>
            <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
            <ul className="space-y-3">
              {category.articles.map((article, articleIndex) => (
                <li key={articleIndex}>
                  <a href="#" className="flex items-center text-gray-600 hover:text-primary-600">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {article}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-600 mb-6">Our support team is here to help you with any questions you may have.</p>
          <button className="btn btn-primary">Contact Support</button>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;