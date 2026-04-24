'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaHotel, FaShoppingBag, FaHeartbeat, FaPhone, FaShoppingCart, FaIndustry, FaTruck, FaChartLine, FaArrowRight, FaCheckCircle, FaStar, FaRocket, FaAward } from 'react-icons/fa';

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const industries = [
    {
      id: 'hospitality',
      icon: <FaHotel />,
      name: 'Hospitality',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      description: 'Transform your hospitality business with comprehensive digital solutions for hotels, resorts, and travel companies.',
      features: [
        'Online Booking Systems',
        'Payment Integration',
        'Guest Management',
        'Inventory Control',
        'Customer Analytics',
        'Mobile Check-in'
      ],
      stats: { projects: '120+', clients: '45+', satisfaction: '98%' }
    },
    {
      id: 'retail',
      icon: <FaShoppingBag />,
      name: 'Retail',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      description: 'Modernize retail operations with intelligent POS systems, inventory management, and omnichannel solutions.',
      features: [
        'Point of Sale Systems',
        'Inventory Tracking',
        'Loyalty Programs',
        'Multi-channel Sales',
        'Real-time Analytics',
        'Supply Chain Optimization'
      ],
      stats: { projects: '95+', clients: '38+', satisfaction: '97%' }
    },
    {
      id: 'healthcare',
      icon: <FaHeartbeat />,
      name: 'Healthcare',
      gradient: 'from-rose-500 to-rose-600',
      bgGradient: 'from-rose-50 to-rose-100',
      description: 'Enhance patient care with secure, HIPAA-compliant healthcare IT solutions and telemedicine platforms.',
      features: [
        'Electronic Health Records',
        'Telemedicine Platforms',
        'Patient Portals',
        'Appointment Scheduling',
        'HIPAA Compliance',
        'Medical Billing'
      ],
      stats: { projects: '85+', clients: '32+', satisfaction: '99%' }
    },
    {
      id: 'telecom',
      icon: <FaPhone />,
      name: 'Telecom',
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
      description: 'Power telecom operations with robust billing systems, network management, and customer service platforms.',
      features: [
        'Billing & Invoicing',
        'Network Monitoring',
        'Customer Management',
        'Service Provisioning',
        'Real-time Analytics',
        'Fraud Detection'
      ],
      stats: { projects: '75+', clients: '28+', satisfaction: '96%' }
    },
    {
      id: 'ecommerce',
      icon: <FaShoppingCart />,
      name: 'E-commerce',
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
      description: 'Build powerful online stores with seamless shopping experiences, secure payments, and advanced analytics.',
      features: [
        'Custom Storefronts',
        'Payment Gateways',
        'Order Management',
        'Product Catalogs',
        'Marketing Automation',
        'Mobile Commerce'
      ],
      stats: { projects: '150+', clients: '62+', satisfaction: '98%' }
    },
    {
      id: 'manufacturing',
      icon: <FaIndustry />,
      name: 'Manufacturing',
      gradient: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-50 to-indigo-100',
      description: 'Optimize production with ERP systems, supply chain management, and IoT-enabled smart manufacturing.',
      features: [
        'Production Planning',
        'Quality Control',
        'Supply Chain Management',
        'Equipment Monitoring',
        'Inventory Optimization',
        'Predictive Maintenance'
      ],
      stats: { projects: '68+', clients: '25+', satisfaction: '97%' }
    },
    {
      id: 'fintech',
      icon: <FaChartLine />,
      name: 'Fintech',
      gradient: 'from-teal-500 to-teal-600',
      bgGradient: 'from-teal-50 to-teal-100',
      description: 'Build secure financial platforms with payment processing, digital banking, and investment management.',
      features: [
        'Payment Processing',
        'Digital Wallets',
        'Loan Management',
        'Investment Platforms',
        'Fraud Prevention',
        'Regulatory Compliance'
      ],
      stats: { projects: '92+', clients: '35+', satisfaction: '99%' }
    },
    {
      id: 'logistics',
      icon: <FaTruck />,
      name: 'Logistics',
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100',
      description: 'Optimize logistics with warehouse management, fleet tracking, and end-to-end supply chain visibility.',
      features: [
        'Warehouse Management',
        'Fleet Tracking',
        'Route Optimization',
        'Inventory Control',
        'Shipment Tracking',
        'Supplier Management'
      ],
      stats: { projects: '78+', clients: '30+', satisfaction: '96%' }
    }
  ];

  const selectedData = selectedIndustry ? industries.find(ind => ind.id === selectedIndustry) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/30 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg mb-8 border border-blue-100">
              <FaStar className="text-yellow-500" />
              Industries We Serve
            </div>
            
            <h1 className="text-gray-900 mb-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Tailored IT Solutions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mt-2">
                Across 70+ Industries
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              From healthcare to fintech, manufacturing to e-commerce - we deliver industry-specific 
              solutions that drive growth and innovation.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-primary">750+</div>
                <div className="text-sm text-gray-600 font-semibold">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary">70+</div>
                <div className="text-sm text-gray-600 font-semibold">Industries Served</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary">98%</div>
                <div className="text-sm text-gray-600 font-semibold">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Industries We Specialize In
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click on any industry to explore our solutions and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`group relative p-6 rounded-2xl transition-all duration-300 text-left ${
                  selectedIndustry === industry.id
                    ? `bg-gradient-to-br ${industry.gradient} text-white shadow-2xl scale-105`
                    : `bg-gradient-to-br ${industry.bgGradient} hover:shadow-xl hover:-translate-y-2`
                }`}
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-3xl transition-all duration-300 ${
                  selectedIndustry === industry.id
                    ? 'bg-white/20 text-white'
                    : `bg-gradient-to-br ${industry.gradient} text-white shadow-lg group-hover:scale-110`
                }`}>
                  {industry.icon}
                </div>
                <h3 className={`text-xl font-black mb-2 ${
                  selectedIndustry === industry.id ? 'text-white' : 'text-gray-900'
                }`}>
                  {industry.name}
                </h3>
                <p className={`text-sm ${
                  selectedIndustry === industry.id ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {industry.stats.projects} Projects
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Industry Details */}
      {selectedData && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className={`w-24 h-24 bg-gradient-to-br ${selectedData.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-5xl text-white shadow-2xl`}>
                  {selectedData.icon}
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  {selectedData.name} Solutions
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  {selectedData.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                <div className={`bg-gradient-to-br ${selectedData.bgGradient} p-6 rounded-2xl text-center border-2 border-white shadow-lg`}>
                  <div className="text-3xl font-black text-gray-900 mb-2">{selectedData.stats.projects}</div>
                  <div className="text-sm font-semibold text-gray-600">Projects Completed</div>
                </div>
                <div className={`bg-gradient-to-br ${selectedData.bgGradient} p-6 rounded-2xl text-center border-2 border-white shadow-lg`}>
                  <div className="text-3xl font-black text-gray-900 mb-2">{selectedData.stats.clients}</div>
                  <div className="text-sm font-semibold text-gray-600">Happy Clients</div>
                </div>
                <div className={`bg-gradient-to-br ${selectedData.bgGradient} p-6 rounded-2xl text-center border-2 border-white shadow-lg`}>
                  <div className="text-3xl font-black text-gray-900 mb-2">{selectedData.stats.satisfaction}</div>
                  <div className="text-sm font-semibold text-gray-600">Satisfaction Rate</div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">
                  Key Features & Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedData.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 p-4 bg-gradient-to-br ${selectedData.bgGradient} rounded-xl border border-white shadow-sm hover:shadow-md transition-all duration-300`}
                    >
                      <div className={`w-8 h-8 bg-gradient-to-br ${selectedData.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <FaCheckCircle className="text-white text-sm" />
                      </div>
                      <span className="text-sm font-semibold text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Link href="/contact">
                    <button className={`bg-gradient-to-r ${selectedData.gradient} text-white px-8 py-4 rounded-full font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3`}>
                      Get Started
                      <FaArrowRight />
                    </button>
                  </Link>
                  <Link href="/services">
                    <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-200">
                      View Services
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest mb-8">
              <FaRocket />
              Ready to Transform?
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Let's Build Something Amazing Together
            </h2>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Partner with us to leverage industry-specific expertise and cutting-edge technology 
              for your business transformation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-black text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
                  Start Your Project
                  <FaArrowRight />
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
