import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "TechCorp Innovation Challenge",
      company: "TechCorp",
      description: "How TechCorp used our platform to host a global hackathon with 5000+ participants across 20 countries.",
      results: {
        participants: "5,000+",
        projects: "850+",
        satisfaction: "98%"
      },
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
    },
    {
      title: "University Hackathon Series",
      company: "Global University Network",
      description: "A series of connected hackathons across 15 universities, fostering innovation in education technology.",
      results: {
        participants: "3,000+",
        projects: "600+",
        satisfaction: "95%"
      },
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
    },
    {
      title: "Sustainability Solutions Jam",
      company: "GreenTech Initiative",
      description: "A virtual hackathon focused on developing sustainable technology solutions for urban challenges.",
      results: {
        participants: "2,500+",
        projects: "400+",
        satisfaction: "97%"
      },
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          See how organizations are using our platform to create impactful hackathon experiences.
        </p>
      </div>

      <div className="mt-16 space-y-12">
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-white rounded-lg shadow-soft-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-primary-600 font-semibold">
                  {study.company}
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-gray-900">{study.title}</h2>
                <p className="mt-4 text-gray-600">{study.description}</p>
                
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{study.results.participants}</div>
                    <div className="text-sm text-gray-600">Participants</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{study.results.projects}</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{study.results.satisfaction}</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="text-primary-600 font-medium flex items-center hover:text-primary-700">
                    Read full case study <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;