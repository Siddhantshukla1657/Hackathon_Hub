import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for small events and hackathons",
      features: [
        "Up to 2-hour events",
        "Basic team formation",
        "Project submissions",
        "Public voting",
        "Basic analytics",
        "Email support"
      ]
    },
    {
      name: "Pro",
      price: "99",
      description: "For growing communities and organizations",
      features: [
        "Unlimited event duration",
        "Advanced team matching",
        "Custom judging criteria",
        "Live messaging",
        "Advanced analytics",
        "Priority support",
        "Custom branding",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations and educational institutions",
      features: [
        "Everything in Pro",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantees",
        "Custom features",
        "Training sessions",
        "Multiple organizations",
        "Advanced security"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the plan that best fits your needs. All plans include our core features.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white rounded-lg shadow-soft-md p-8 hover:shadow-soft-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold">${plan.price}</span>
              {plan.price !== "Custom" && <span className="text-gray-600 ml-2">/month</span>}
            </div>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <Check className="h-5 w-5 text-success-500 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full btn btn-primary">
              {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;