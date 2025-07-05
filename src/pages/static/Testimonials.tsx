import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Hackathon Organizer",
      company: "TechCorp",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      quote: "The platform transformed our virtual hackathon experience. The seamless project submissions and judging system saved us countless hours of coordination.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "University Professor",
      company: "Tech University",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      quote: "As an educator, I've found this platform invaluable for organizing student hackathons. The team formation features and project management tools are exceptional.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Community Manager",
      company: "Innovation Hub",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      quote: "We've seen a 50% increase in participant engagement since switching to this platform. The user experience is unmatched.",
      rating: 5
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what organizers and participants have to say about their experience.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-soft-md p-6 hover:shadow-soft-lg transition-shadow">
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
              </div>
            </div>

            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-warning-400 fill-current" />
              ))}
            </div>

            <blockquote className="text-gray-700 italic">"{testimonial.quote}"</blockquote>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-primary-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Hackathon Experience?</h2>
        <p className="text-gray-600 mb-6">Join thousands of satisfied users who have chosen our platform for their events.</p>
        <button className="btn btn-primary">Get Started Today</button>
      </div>
    </div>
  );
};

export default Testimonials;