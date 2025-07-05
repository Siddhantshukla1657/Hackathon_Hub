import React from 'react';
import { Shield, Lock, FileText } from 'lucide-react';

const Legal = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Information</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Important legal documents and policies governing the use of our platform.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <div className="bg-white rounded-lg shadow-soft-md p-6">
          <div className="p-3 rounded-lg bg-primary-50 text-primary-600 w-fit mb-4">
            <Shield className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
          <p className="text-gray-600 mb-4">
            Learn about how we collect, use, and protect your personal information.
          </p>
          <a href="/privacy-policy" className="text-primary-600 hover:text-primary-700 font-medium">
            Read Privacy Policy →
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-soft-md p-6">
          <div className="p-3 rounded-lg bg-primary-50 text-primary-600 w-fit mb-4">
            <FileText className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-semibold mb-4">Terms of Service</h2>
          <p className="text-gray-600 mb-4">
            Review the terms and conditions for using our platform and services.
          </p>
          <a href="/terms-of-service" className="text-primary-600 hover:text-primary-700 font-medium">
            Read Terms of Service →
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-soft-md p-6">
          <div className="p-3 rounded-lg bg-primary-50 text-primary-600 w-fit mb-4">
            <Lock className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-semibold mb-4">Cookie Policy</h2>
          <p className="text-gray-600 mb-4">
            Understand how we use cookies and similar technologies.
          </p>
          <a href="/cookie-policy" className="text-primary-600 hover:text-primary-700 font-medium">
            Read Cookie Policy →
          </a>
        </div>
      </div>

      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Additional Legal Resources</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Data Processing Agreement</h3>
            <p className="text-gray-600 mb-2">
              Details about how we process and handle data in compliance with GDPR and other regulations.
            </p>
            <a href="#" className="text-primary-600 hover:text-primary-700">Learn more →</a>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Intellectual Property Rights</h3>
            <p className="text-gray-600 mb-2">
              Information about copyright, trademarks, and other intellectual property matters.
            </p>
            <a href="#" className="text-primary-600 hover:text-primary-700">Learn more →</a>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Security Practices</h3>
            <p className="text-gray-600 mb-2">
              Overview of our security measures and data protection practices.
            </p>
            <a href="#" className="text-primary-600 hover:text-primary-700">Learn more →</a>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Compliance</h3>
            <p className="text-gray-600 mb-2">
              Information about our compliance with various regulations and standards.
            </p>
            <a href="#" className="text-primary-600 hover:text-primary-700">Learn more →</a>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Need Legal Assistance?</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions about our legal documents or policies, please contact our legal team.
        </p>
        <button className="btn btn-primary">Contact Legal Team</button>
      </div>
    </div>
  );
};

export default Legal;