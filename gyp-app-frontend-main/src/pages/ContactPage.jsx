import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import logo from "../assets/logo.png";

export default function ContactPage({ navigate }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate("home")}
            >
              <img
                src={logo}
                alt="FitBase Logo"
                className="h-8 w-auto sm:h-10"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => navigate("home")}
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Home
              </button>
              <button
                onClick={() => navigate("membership")}
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Packages
              </button>
              <button
                onClick={() => navigate("contact")}
                className="text-green-500 font-semibold"
              >
                Contact
              </button>
              <button
                onClick={() => navigate("signup")}
                className="px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Sign Up
              </button>
              <button
                onClick={() => navigate("login")}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Login
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Have questions about our high-performance facilities or
                personalized training packages? Our team is here to help you
                start your journey.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help you achieve your goals..."
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-200 flex items-center justify-center gap-2"
              >
                Send Message
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Right Side - Map and Contact Info */}
          <div className="space-y-8">
            {/* Map */}
            <div className="bg-gray-300 rounded-2xl h-64 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <MapPin className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold">Main Training Center</span>
              </div>
            </div>

            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Physical Address */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Physical Address
                    </h3>
                    <p className="text-gray-600 text-sm">
                      123 Fitness Ave, Iron City,
                      <br />
                      NY 54321
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Support */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Phone Support
                    </h3>
                    <p className="text-gray-600 text-sm">
                      (555) 012-3456
                      <br />
                      Mon-Fri: 5am - 11pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Us */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Email Us
                    </h3>
                    <p className="text-gray-600 text-sm">
                      hello@irongym.com
                      <br />
                      support@irongym.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Weekend Hours */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Weekend Hours
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Sat-Sun: 7am - 9pm
                      <br />
                      Holidays: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <p className="text-gray-600 mb-4 font-medium">FOLLOW US</p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center hover:shadow-md transition"
                >
                  <Facebook className="w-5 h-5 text-gray-600" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center hover:shadow-md transition"
                >
                  <Instagram className="w-5 h-5 text-gray-600" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center hover:shadow-md transition"
                >
                  <Twitter className="w-5 h-5 text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 IronGym Management System.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-green-500 hover:text-green-600 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-green-500 hover:text-green-600 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-green-500 hover:text-green-600 text-sm"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
