import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions? We're here to help. Choose the best way to reach us.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow-soft-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="form-input w-full"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="form-input w-full"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                className="form-input w-full"
                placeholder="How can we help?"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="form-input w-full"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-soft-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Other ways to reach us</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-primary-50 text-primary-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">support@hackathonhub.com</p>
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                    Send an email
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-primary-50 text-primary-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri from 8am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-primary-50 text-primary-600">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Live Chat</h3>
                  <p className="text-gray-600">Chat with our support team</p>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    Start a chat
                  </button>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-primary-50 text-primary-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Office</h3>
                  <p className="text-gray-600">
                    123 Innovation Street<br />
                    San Francisco, CA 94107<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-soft-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">How quickly do you respond?</h3>
                <p className="text-gray-600">We typically respond within 24 hours.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Do you offer technical support?</h3>
                <p className="text-gray-600">Yes, our technical team is available for platform-related issues.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;