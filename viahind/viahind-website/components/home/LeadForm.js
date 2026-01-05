'use client';

import { useState } from 'react';
import { 
  FaRocket, 
  FaCheckCircle, 
  FaUsers, 
  FaAward, 
  FaStar,
  FaLightbulb,
  FaChartLine,
  FaClock,
  FaShieldAlt,
  FaPaperPlane
} from 'react-icons/fa';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    mobile: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          handleReset();
        }, 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      mobile: '',
      description: ''
    });
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#0066FF 1px, transparent 1px), linear-gradient(90deg, #0066FF 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-20 w-20 h-20 border-4 border-blue-200 rounded-lg rotate-12 animate-spin-slow opacity-30" />
        <div className="absolute bottom-40 right-40 w-16 h-16 border-4 border-cyan-200 rounded-full animate-bounce opacity-30" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full mb-6">
            <FaRocket className="text-blue-500" />
            <span className="text-sm font-semibold text-blue-600">Start Your Journey</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Your Idea Could Be The
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Next Revolution
            </span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-4">
            Let's Discuss & Make It Happen
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaCheckCircle className="text-green-500" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaCheckCircle className="text-green-500" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaCheckCircle className="text-green-500" />
              <span>NDA Protected</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Premium Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Form Decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                {submitted ? (
                  // Success State
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <FaCheckCircle className="text-white text-4xl" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
                    <p className="text-lg text-gray-600 mb-2">Your message has been received.</p>
                    <p className="text-gray-500">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Form Header */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Tell Us About Your Project</h3>
                      <p className="text-gray-600">Fill in the details and we'll reach out to you shortly</p>
                    </div>

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div className="relative">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-blue-500 focus:bg-white transition-all placeholder-gray-400"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">*</div>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-blue-500 focus:bg-white transition-all placeholder-gray-400"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">*</div>
                      </div>
                    </div>

                    {/* Company & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div className="relative">
                        <input
                          type="text"
                          name="company"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-blue-500 focus:bg-white transition-all placeholder-gray-400"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">*</div>
                      </div>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-blue-500 focus:bg-white transition-all placeholder-gray-400"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">*</div>
                      </div>
                    </div>

                    {/* Mobile */}
                    <div className="relative mb-5">
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-blue-500 focus:bg-white transition-all placeholder-gray-400"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">*</div>
                    </div>

                    {/* Project Details */}
                    <div className="relative mb-8">
                      <textarea
                        name="description"
                        placeholder="Tell us about your project, goals, and timeline..."
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-vertical placeholder-gray-400"
                      />
                      <div className="absolute right-4 top-4 text-red-500">*</div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col md:flex-row gap-4">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                            Send Message
                          </>
                        )}
                      </button>
                      <button 
                        type="button" 
                        onClick={handleReset}
                        className="flex-1 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
                      >
                        Reset Form
                      </button>
                    </div>

                    {/* Privacy Note */}
                    <p className="text-xs text-gray-500 mt-6 text-center">
                      <FaShieldAlt className="inline mr-1" />
                      Your information is secure and will never be shared with third parties
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Premium Sidebar */}
          <div className="space-y-6">
            {/* Main CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6">
                  <FaLightbulb className="text-3xl text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  Looking to Build Something Incredible?
                </h3>
                
                <p className="text-white/90 mb-6 leading-relaxed">
                  Transform your vision into reality with our expert team. We've helped over 650+ clients achieve their goals.
                </p>
                
                <button className="w-full px-6 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg">
                  Book A Consultation
                  <FaRocket className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FaUsers className="text-white text-xl" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">650+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FaAward className="text-white text-xl" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">13+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            {/* Features List */}
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                Why Choose Us?
              </h4>
              <ul className="space-y-3">
                {[
                  { icon: FaStar, text: 'Expert Team of 50+ Developers' },
                  { icon: FaChartLine, text: '98% Project Success Rate' },
                  { icon: FaClock, text: 'On-Time Delivery Guaranteed' },
                  { icon: FaShieldAlt, text: 'NDA & IP Protection' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-blue-500" />
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
