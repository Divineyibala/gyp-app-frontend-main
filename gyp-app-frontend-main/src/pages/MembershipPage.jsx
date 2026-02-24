import { useState } from 'react';
import { Check } from 'lucide-react';
import logo from '../assets/logo.png';

export default function MembershipPage({ navigate }) {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const membershipPlans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 29,
      period: 'month',
      isPremium: false,
      features: [
        'Access to basic gym facilities',
        'Group fitness classes',
        'Personalized workout plan'
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 49,
      period: 'month',
      isPremium: false,
      features: [
        'Access to all gym facilities',
        'Unlimited group fitness classes',
        'Personalized workout plan',
        'Monthly personal training session'
      ]
    },
    {
      id: 'elite',
      name: 'Elite',
      price: 79,
      period: 'month',
      isPremium: true,
      features: [
        'Access to all gym facilities',
        'Unlimited group fitness classes',
        'Personalized workout plan',
        'Weekly personal training session',
        'Exclusive member events'
      ]
    }
  ];

  const handlePayToJoin = (planId) => {
    setSelectedPlan(planId);
    navigate('payment');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate('home')}>
              <img src={logo} alt="FitBase Logo" className="h-8 w-auto sm:h-10" />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => navigate('home')} className="text-gray-600 hover:text-gray-900 transition">
                Home
              </button>
              <button className="text-green-500 font-semibold">
                Packages
              </button>
              <button onClick={() => navigate('contact')} className="text-gray-600 hover:text-gray-900 transition">
                Contact
              </button>
              <button onClick={() => navigate('login')} className="px-6 py-2 bg-green-400 text-white rounded-full font-semibold hover:bg-green-500 transition">
                Log In
              </button>
              <button onClick={() => navigate('signup')} className="px-6 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition">
                Register
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Membership Packages
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the plan that best fits your fitness goals and lifestyle.
          </p>
        </div>

        {/* Membership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {membershipPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl ${
                plan.isPremium ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Premium Badge */}
              {plan.isPremium && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Premium
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">
                    /{plan.period}
                  </span>
                </div>
              </div>

              {/* Pay to Join Button */}
              <button
                onClick={() => handlePayToJoin(plan.id)}
                className={`w-full py-3 rounded-lg font-semibold mb-6 transition duration-200 ${
                  plan.isPremium
                    ? 'bg-purple-500 text-white hover:bg-purple-600'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Pay to Join
              </button>

              {/* Features List */}
              <div className="space-y-3">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Membership?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Plans</h3>
                <p className="text-gray-600 text-sm">
                  Choose from multiple membership options that fit your lifestyle and budget.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Trainers</h3>
                <p className="text-gray-600 text-sm">
                  Work with certified personal trainers to achieve your fitness goals faster.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Modern Equipment</h3>
                <p className="text-gray-600 text-sm">
                  Access state-of-the-art fitness equipment and facilities for optimal workouts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of members who have transformed their lives with our comprehensive fitness programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('signup')}
              className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Get Started Today
            </button>
            <button
              onClick={() => navigate('contact')}
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2024 F3 Fitness. All rights reserved. | Transform Your Life Today
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}