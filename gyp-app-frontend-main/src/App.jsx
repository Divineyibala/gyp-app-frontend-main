import { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import logo from './assets/logo.png';

export default function HomePage({ navigate }) {
  const [currentFacilityIndex, setCurrentFacilityIndex] = useState(0);

  const facilities = [
    {
      id: 1,
      title: 'Cardiovascular Training',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Strength Sanctuary',
      image: 'https://media.istockphoto.com/id/1925398083/photo/3d-render-gym-fitness-wellness-center.jpg?s=612x612&w=0&k=20&c=X9qs9rA5tVMd3z4Wva8AN7eJGfuVcvfjd6mwxJr0O0k='
    },
    {
      id: 3,
      title: 'Yoga & Wellness',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=300&fit=crop'
    }
  ];

  const trainers = [
    {
      id: 1,
      name: 'Mike Thompson',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      bg: 'bg-yellow-400'
    },
    {
      id: 2,
      name: 'David Miller',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop',
      bg: 'bg-blue-900'
    },
    {
      id: 3,
      name: 'Sarah Jane',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop',
      bg: 'bg-gray-300'
    }
  ];

  const memberships = [
    {
      id: 1,
      name: 'Basic',
      price: 29,
      period: 'month',
      popular: false,
      features: [
        'Access to gym facilities',
        'Group fitness classes',
        'Basic locker room access',
        'Personalized workout plan'
      ]
    },
    {
      id: 2,
      name: 'Pro',
      price: 49,
      period: 'month',
      popular: true,
      features: [
        'All Basic benefits',
        'Access to all gym facilities',
        'Unlimited group classes',
        'Monthly personal training sessions'
      ]
    },
    {
      id: 3,
      name: 'Elite',
      price: 79,
      period: 'month',
      popular: false,
      features: [
        'Access to all gym facilities',
        'Unlimited group classes',
        'Unlimited personal training',
        'Priority scheduling'
      ]
    }
  ];

  const timeline = [
    { year: '2018', title: 'The Foundation', side: 'left' },
    { year: '2020', title: 'Scaling Up', side: 'right' },
    { year: '2025', title: 'Digital Transformation', side: 'left' }
  ];

  const nextFacility = () => {
    setCurrentFacilityIndex((prev) => (prev + 1) % facilities.length);
  };

  const prevFacility = () => {
    setCurrentFacilityIndex((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="FitBase Logo" className="h-8 w-auto sm:h-10" />
          </div>
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => navigate('home')} className="text-gray-600 hover:text-gray-900 transition">
                Home
              </button>
              <button onClick={() => navigate('membership')} className="text-gray-600 hover:text-gray-900 transition">
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
      </header>

      {/* Hero Section */}
      <section className="w-full relative h-96 sm:h-[500px] md:h-[600px] lg:h-[700px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=800&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Elevate Your
            <br />
            <span className="text-green-400 text-4xl sm:text-5xl md:text-6xl">Strength</span>
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6 max-w-md">
            Transform your body and mind with our state-of-the-art facilities and expert trainers.
          </p>
          <button 
            onClick={() => navigate('signup')}
            className="mt-2 px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 hover:scale-105 transition-all duration-300 text-sm sm:text-base shadow-lg"
          >
            Register Now
          </button>
        </div>
      </section>

      {/* Why Choose FitBase */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16">
            Why Choose FitBase
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {['Expert Trainers', 'Elite Equipment', 'Premium Services'].map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-2xl p-8 sm:p-10 text-center hover:border-green-400 transition min-h-48 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Facilities */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Explore FitBase Facilities</h2>
            <div className="flex gap-2">
              <button
                onClick={prevFacility}
                className="p-2 sm:p-3 border-2 border-green-400 rounded-full hover:bg-green-400 hover:text-white transition"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextFacility}
                className="p-2 sm:p-3 border-2 border-green-400 rounded-full hover:bg-green-400 hover:text-white transition"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {facilities.map((facility, idx) => (
              <div
                key={facility.id}
                className={`rounded-2xl overflow-hidden transition ${
                  idx === currentFacilityIndex ? 'ring-4 ring-green-400' : ''
                }`}
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="p-4 sm:p-6 bg-white">
                  <p className="font-semibold text-sm sm:text-base">{facility.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Squad */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16">
            Meet Our Elite Squad
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="text-center">
                <div className={`${trainer.bg} rounded-2xl overflow-hidden mb-4 h-64 sm:h-80`}>
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{trainer.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Packages */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16">
            Membership Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {memberships.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-8 transition ${
                  plan.popular
                    ? 'bg-white border-2 border-purple-600 shadow-lg'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="mb-4 inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg sm:text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600 text-sm sm:text-base">/{plan.period}</span>
                </div>
                <button
                  onClick={() => navigate('membership')}
                  className={`w-full py-2 sm:py-3 rounded-full font-semibold mb-6 transition text-sm sm:text-base ${
                    plan.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  Get Started
                </button>
                <div className="space-y-3 sm:space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empowering Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="inline-block bg-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Since 2018
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Empowering Your Fitness Journey Through Community And Expert Coaching
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We believe in transforming lives through dedicated fitness coaching and community support.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden h-64 sm:h-80">
              <img
                src="https://media.istockphoto.com/id/1402296134/photo/low-angle-diverse-group-of-ambitious-smiling-businesswomen-huddled-together-with-hands.jpg?s=612x612&w=0&k=20&c=4fYg1VHPkrmYvkJ6dOD97b-s79-PtSZNkCCZNUilV34="
                alt="Empowering"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-green-400 transform sm:-translate-x-1/2"></div>
            <div className="space-y-8 sm:space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className={`flex gap-6 sm:gap-8 ${item.side === 'right' ? 'sm:flex-row-reverse' : ''}`}>
                  <div className="flex-shrink-0 w-8 sm:w-10 pt-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-400 rounded-full border-4 border-white"></div>
                  </div>
                  <div className={`flex-1 ${item.side === 'right' ? 'sm:text-right' : ''}`}>
                    <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-400 to-green-500 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">
            Ready To Rewrite Your Story?
          </h2>
          <button 
            onClick={() => navigate('contact')}
            className="px-8 sm:px-12 py-3 sm:py-4 bg-white text-green-600 rounded-full font-bold hover:bg-gray-100 transition text-sm sm:text-base"
          >
            Contact us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm sm:text-base text-gray-400">
            © 2026 FitBase. All rights reserved. | Transforming Lives Through Fitness
          </p>
        </div>
      </footer>
    </div>
  );
}
