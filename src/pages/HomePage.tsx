import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  Award, 
  BarChart2, 
  Monitor, 
  MessageCircle, 
  CheckCircle, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-soft-md hover:shadow-soft-lg transition-shadow">
      <div className="p-3 rounded-lg bg-primary-50 text-primary-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 opacity-70 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                The Ultimate Platform <span className="text-primary-600">For Hackathon</span> Success
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
                Plan, host, and manage your hackathons with our comprehensive platform. Connect participants, streamline judging, and showcase innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register" className="btn btn-primary px-8 py-3 text-center">
                  Get Started
                </Link>
                <a href="#features" className="btn btn-outline flex items-center justify-center">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
              <div className="mt-8 flex items-center text-sm text-gray-600">
                <span className="flex items-center mr-6">
                  <CheckCircle className="h-5 w-5 text-success-500 mr-2" />
                  No credit card required
                </span>
                <span className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success-500 mr-2" />
                  Free for small events
                </span>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img 
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Hackathon team collaboration"
                className="rounded-lg shadow-xl w-full max-w-xl mx-auto" 
              />
              {/* Floating badges */}
              <div className="absolute top-4 -left-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-primary-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-medium text-gray-500">Active Participants</p>
                    <p className="text-lg font-bold text-gray-900">5,200+</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-secondary-100 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-secondary-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-medium text-gray-500">Hackathons Hosted</p>
                    <p className="text-lg font-bold text-gray-900">1,200+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Hackathon Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to run successful hackathons, from registration to judging and beyond.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Feature 
              icon={<Users className="h-6 w-6" />}
              title="Team Formation"
              description="Intuitive tools for creating and joining teams, with skill-based matchmaking for ideal collaborations."
            />
            <Feature 
              icon={<Calendar className="h-6 w-6" />}
              title="Event Scheduling"
              description="Create detailed schedules with automated notifications for key milestones and deadlines."
            />
            <Feature 
              icon={<Award className="h-6 w-6" />}
              title="Judging & Voting"
              description="Streamlined judging process with customizable criteria and real-time leaderboards."
            />
            <Feature 
              icon={<Monitor className="h-6 w-6" />}
              title="Project Showcase"
              description="Dynamic gallery to highlight submissions with filtering and sorting capabilities."
            />
            <Feature 
              icon={<MessageCircle className="h-6 w-6" />}
              title="Real-time Communication"
              description="Built-in messaging and discussion forums for participants, mentors, and judges."
            />
            <Feature 
              icon={<BarChart2 className="h-6 w-6" />}
              title="Analytics & Insights"
              description="Comprehensive dashboards to track engagement, participation, and other key metrics."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Innovators Worldwide</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from organizers and participants who have transformed their hackathon experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-soft-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                  <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Jane Smith" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Jane Smith</h4>
                  <p className="text-gray-600 text-sm">Hackathon Organizer, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"The platform transformed our virtual hackathon experience. The seamless project submissions and judging system saved us countless hours of coordination."</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-soft-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                  <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Mark Johnson" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Mark Johnson</h4>
                  <p className="text-gray-600 text-sm">Participant, CodeFest 2023</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Finding the right teammates was always a challenge until we used Hackathon Hub. The skill-matching feature helped me connect with the perfect collaborators."</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-soft-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                  <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sarah Chen" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Sarah Chen</h4>
                  <p className="text-gray-600 text-sm">Judge, Innovation Expo</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"The judging dashboard made evaluating dozens of projects manageable and fair. I could easily compare submissions based on consistent criteria."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl py-12 px-8 md:px-12 shadow-xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Host Your Next Hackathon?</h2>
              <p className="text-lg text-primary-100 mb-8">
                Join thousands of innovators who have transformed their hackathon experiences with our comprehensive platform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/register" className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 text-center">
                  Get Started for Free
                </Link>
                <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 text-center">
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;