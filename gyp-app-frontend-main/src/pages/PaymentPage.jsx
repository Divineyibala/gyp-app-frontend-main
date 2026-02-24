import { useState } from 'react';
import { CreditCard, Check, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

export default function PaymentPage({ navigate }) {
  const [selectedPayment, setSelectedPayment] = useState('credit-card');
  const [formData, setFormData] = useState({
    fullName: '',
    cardholderName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted:', formData);
  };

  const paymentMethods = [
    {
      id: 'credit-card',
      title: 'PAY WITH CREDIT CARD',
      icon: <CreditCard className="w-8 h-8 text-blue-500" />,
      available: true
    },
    {
      id: 'paypal',
      title: 'currently unavailable',
      icon: <div className="w-8 h-8 bg-gray-300 rounded"></div>,
      available: false
    },
    {
      id: 'apple-pay',
      title: 'currently unavailable',
      icon: <div className="w-8 h-8 bg-gray-300 rounded"></div>,
      available: false
    }
  ];

  const months = [
    '01', '02', '03', '04', '05', '06',
    '07', '08', '09', '10', '11', '12'
  ];

  const years = Array.from({ length: 10 }, (_, i) => {
    const year = new Date().getFullYear() + i;
    return year.toString().slice(-2);
  });

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
          
          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Payment</h1>
          <p className="text-gray-600 mb-8 sm:mb-12">Choose payment method below</p>

          {/* Payment Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`relative border-2 rounded-xl p-6 sm:p-8 cursor-pointer transition ${
                  method.available
                    ? selectedPayment === method.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                    : 'border-gray-200 bg-gray-100 cursor-not-allowed'
                }`}
                onClick={() => method.available && setSelectedPayment(method.id)}
              >
                {method.available && selectedPayment === method.id && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {method.icon}
                  </div>
                  <p className={`text-sm font-medium ${
                    method.available ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {method.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Billing Info */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Billing Info</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Credit Card Info */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Credit Card Info</h2>
                </div>

                <div className="space-y-4">
                  {/* Cardholder Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CARDHOLDER'S NAME
                    </label>
                    <input
                      type="text"
                      name="cardholderName"
                      value={formData.cardholderName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      required
                    />
                  </div>

                  {/* Card Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CARD NUMBER
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="5645-6456-7665-0456"
                      maxLength="19"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      required
                    />
                  </div>

                  {/* Expiry Date */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        EXP. MONTH
                      </label>
                      <div className="relative">
                        <select
                          name="expMonth"
                          value={formData.expMonth}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition appearance-none bg-white"
                          required
                        >
                          <option value="">12</option>
                          {months.map((month) => (
                            <option key={month} value={month}>
                              {month}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        EXP. YEAR
                      </label>
                      <div className="relative">
                        <select
                          name="expYear"
                          value={formData.expYear}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition appearance-none bg-white"
                          required
                        >
                          <option value="">18</option>
                          {years.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* CVC */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVC NUMBER
                    </label>
                    <input
                      type="text"
                      name="cvc"
                      value={formData.cvc}
                      onChange={handleInputChange}
                      placeholder="468"
                      maxLength="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6">
              <button
                type="submit"
                className="px-8 sm:px-12 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-semibold hover:from-purple-600 hover:to-purple-700 transition duration-200 text-sm sm:text-base"
              >
                Proceed
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2024 F3 Fitness. All rights reserved. | Secure Payment Processing
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}