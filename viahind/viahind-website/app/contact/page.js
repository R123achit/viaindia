'use client';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaClock, FaRocket, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', company: '', email: '', mobile: '', message: '' });
  };

  const locations = [
    {
      country: '🇮🇳 India',
      city: 'Mumbai',
      address: '123 Business Park, Andheri East, Mumbai, Maharashtra 400069',
      phone: '+91 261 312 1140',
      email: 'info@viahind.com',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      country: '🇺🇸 USA',
      city: 'San Francisco',
      address: '456 Tech Avenue, Suite 200, San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'usa@viahind.com',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      country: '🇶🇦 Qatar',
      city: 'Doha',
      address: '789 Business District, Doha, Qatar',
      phone: '+974 1234 5678',
      email: 'qatar@viahind.com',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100'
    }
  ];

  const stats = [
    { icon: FaGlobe, value: '50+', label: 'Countries Served', color: 'text-blue-600' },
    { icon: FaClock, value: '24/7', label: 'Support Available', color: 'text-blue-600' },
    { icon: FaRocket, value: '650+', label: 'Projects Delivered', color: 'text-blue-600' },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Animated Background */}
      <section className="relative py-32 overflow-hidden">
        {/* Professional blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
        
        {/* Animated circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/30">
            ✨ Let's Build Something Amazing Together
          </div>
          <h1 className="text-white mb-6 animate-fadeIn">Get In Touch</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          
          {/* Floating stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <stat.icon className={`text-4xl ${stat.color} mb-3 mx-auto`} />
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section with 3D Cards */}
      <section className="section-spacing relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-blue-100 rounded-full text-primary text-sm font-bold">
              🌍 Global Presence
            </div>
            <h2 className="mb-4">Our Offices Worldwide</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're strategically located across the globe to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {locations.map((location, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-3"
              >
                {/* Gradient top border */}
                <div className={`h-2 bg-gradient-to-r ${location.color}`}></div>
                
                {/* Card content */}
                <div className="p-8">
                  {/* Country badge */}
                  <div className={`inline-block mb-6 px-5 py-2 bg-gradient-to-r ${location.bgColor} rounded-full`}>
                    <span className="text-2xl mr-2">{location.country.split(' ')[0]}</span>
                    <span className="font-bold text-gray-800">{location.city}</span>
                  </div>

                  {/* Location details */}
                  <div className="space-y-5">
                    <div className="flex items-start gap-4 group/item">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${location.color} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                        <FaMapMarkerAlt className="text-white text-lg" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">Address</div>
                        <p className="text-gray-700 leading-relaxed">{location.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group/item">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${location.color} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                        <FaPhone className="text-white text-lg" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">Phone</div>
                        <a href={`tel:${location.phone}`} className="text-gray-700 hover:text-primary transition-colors font-medium">
                          {location.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group/item">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${location.color} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                        <FaEnvelope className="text-white text-lg" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">Email</div>
                        <a href={`mailto:${location.email}`} className="text-gray-700 hover:text-primary transition-colors font-medium">
                          {location.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${location.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Contact Form with Advanced Design */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-6 py-2 bg-blue-100 rounded-full text-primary text-sm font-bold">
                💬 Start a Conversation
              </div>
              <h2 className="mb-4">Send Us A Message</h2>
              <p className="text-gray-600 text-lg">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse animation-delay-200"></div>

              <form onSubmit={handleSubmit} className="relative bg-white p-10 md:p-14 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white focus:shadow-lg"
                    />
                    {focusedField === 'name' && (
                      <div className="absolute -top-2 left-4 px-2 bg-white text-xs text-blue-600 font-semibold">
                        Full Name
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white focus:shadow-lg"
                    />
                    {focusedField === 'company' && (
                      <div className="absolute -top-2 left-4 px-2 bg-white text-xs text-blue-600 font-semibold">
                        Company Name
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white focus:shadow-lg"
                    />
                    {focusedField === 'email' && (
                      <div className="absolute -top-2 left-4 px-2 bg-white text-xs text-blue-600 font-semibold">
                        Email Address
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile *"
                      value={formData.mobile}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('mobile')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white focus:shadow-lg"
                    />
                    {focusedField === 'mobile' && (
                      <div className="absolute -top-2 left-4 px-2 bg-white text-xs text-blue-600 font-semibold">
                        Phone Number
                      </div>
                    )}
                  </div>
                </div>

                <div className="relative mb-8">
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows="6"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-blue-500 transition-all duration-300 resize-vertical bg-gray-50 focus:bg-white focus:shadow-lg"
                  />
                  {focusedField === 'message' && (
                    <div className="absolute -top-2 left-4 px-2 bg-white text-xs text-blue-600 font-semibold">
                      Tell us about your project
                    </div>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="relative w-full px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-xl overflow-hidden group shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.5)] transition-all duration-500 hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <FaPaperPlane className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    <span className="font-black tracking-wide">Send Message</span>
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
                </button>

                <p className="text-center text-gray-500 text-sm mt-6">
                  🔒 Your information is safe with us. We respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with Overlay */}
      <section className="relative h-[500px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8267168676843!2d72.8776559!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjUiTiA3MsKwNTInMzkuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Viahind Location"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
        
        {/* Map overlay card */}
        <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl max-w-sm border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
          <p className="text-gray-600 text-sm mb-4">
            Drop by for a coffee and let's discuss your next big project!
          </p>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Get Directions
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
