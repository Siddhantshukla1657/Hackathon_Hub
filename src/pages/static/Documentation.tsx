import React from 'react';
import { Book, Code, Terminal, Settings, Shield, Database } from 'lucide-react';

const Documentation = () => {
  const sections = [
    {
      icon: <Book className="h-6 w-6" />,
      title: "Getting Started",
      description: "Learn the basics of setting up and configuring your hackathon platform.",
      links: ["Quick Start Guide", "Platform Overview", "Basic Concepts"]
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "API Reference",
      description: "Comprehensive API documentation for integrating with our platform.",
      links: ["Authentication", "Endpoints", "Rate Limits", "Webhooks"]
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "SDK & Tools",
      description: "Official SDKs and development tools for building on our platform.",
      links: ["JavaScript SDK", "Python SDK", "CLI Tools", "GitHub Actions"]
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Platform Configuration",
      description: "Detailed guides for configuring and customizing your events.",
      links: ["Event Settings", "Judging Criteria", "Team Formation", "Submissions"]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security",
      description: "Security best practices and guidelines for platform usage.",
      links: ["Security Overview", "Authentication", "Data Protection", "Compliance"]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data & Analytics",
      description: "Understanding and utilizing platform analytics and data.",
      links: ["Analytics Dashboard", "Data Export", "Custom Reports", "Metrics"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about using and integrating with our platform.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-soft-md p-6">
            <div className="p-3 rounded-lg bg-primary-50 text-primary-600 w-fit mb-4">
              {section.icon}
            </div>
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#" className="text-primary-600 hover:text-primary-700">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-primary-50 rounded-lg p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Technical Support?</h2>
          <p className="text-gray-600 mb-6">
            Our developer support team is available to help you with any technical questions.
          </p>
          <div className="space-x-4">
            <button className="btn btn-primary">Contact Support</button>
            <button className="btn btn-outline">Join Developer Community</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;