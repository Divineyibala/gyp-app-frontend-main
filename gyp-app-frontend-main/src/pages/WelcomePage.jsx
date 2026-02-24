import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function WelcomePage({ navigate }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleClick = () => {
    navigate("home");
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop"
          alt="Fitness Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Logo Animation */}
        <div
          className={`transform transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {/* Logo */}
          <div className="mb-8 sm:mb-12">
            <div className="relative flex justify-center">
              {/* Logo Background */}
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
                <img
                  src={logo}
                  alt="FitBase Logo"
                  className="h-32 sm:h-40 lg:h-48 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-8 sm:mb-12">
            <h1
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-purple-400 mb-4 transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              Welcome To FitBase
            </h1>
            <h2
              className={`text-4xl sm:text-5xl lg:text-6xl font-black text-yellow-400 mb-8 transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              FITBASE
            </h2>
          </div>

          {/* Navigation Dots */}
          <div
            className={`flex justify-center gap-2 mb-8 sm:mb-12 transition-all duration-1000 delay-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-gray-600"></div>
            <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          </div>

          {/* Click Button */}
          <div
            className={`text-center transition-all duration-1000 delay-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <button
              onClick={handleClick}
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-12 sm:px-16 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Click
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1500"></div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-50"></div>
    </div>
  );
}
