'use client';
import { useState, useEffect } from 'react';
import { FaHotel, FaShoppingBag, FaHeartbeat, FaPhone, FaShoppingCart, FaIndustry, FaTruck, FaChartLine, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('hospitality');

  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, [selectedIndustry]);

  const industries = [
    {
      id: 'hospitality',
      icon: <FaHotel />,
      name: 'Hospitality',
      color: 'bg-blue-500',
      description: 'Transform your hospitality business with our comprehensive digital solutions designed for hotels, resorts, and travel companies.',
      features: [
        'Customized booking systems',
        'Payment processing integration',
        'Customer engagement tools',
        'Inventory management',
        'Personalized guest experiences',
        'Scalable cloud solutions'
      ]
    },
    {
      id: 'retail',
      icon: <FaShoppingBag />,
      name: 'Retail',
      color: 'bg-purple-500',
      description: 'Modernize your retail operations with intelligent POS systems, inventory management, and omnichannel solutions.',
      features: [
        'Point of Sale systems',
        'Inventory tracking',
        'Customer loyalty programs',
        'Multi-channel integration',
        'Analytics and reporting',
        'Supply chain optimization'
      ]
    },
    {
      id: 'healthcare',
      icon: <FaHeartbeat />,
      name: 'Healthcare',
      color: 'bg-red-500',
      description: 'Enhance patient care with secure, compliant healthcare IT solutions including EMR, telemedicine, and practice management.',
      features: [
        'Electronic Medical Records',
        'Telemedicine platforms',
        'Patient portals',
        'Appointment scheduling',
        'HIPAA compliance',
        'Healthcare analytics'
      ]
    },
    {
      id: 'telecom',
      icon: <FaPhone />,
      name: 'Telecom',
      color: 'bg-green-500',
      description: 'Power your telecom operations with robust billing systems, network management, and customer service platforms.',
      features: [
        'Billing and invoicing',
        'Network monitoring',
        'Customer management',
        'Service provisioning',
        'Real-time analytics',
        'Fraud detection'
      ]
    },
    {
      id: 'ecommerce',
      icon: <FaShoppingCart />,
      name: 'E-commerce',
      color: 'bg-orange-500',
      description: 'Build powerful online stores with seamless shopping experiences, secure payments, and advanced analytics.',
      features: [
        'Custom storefront design',
        'Payment gateway integration',
        'Order management',
        'Product catalog',
        'Marketing automation',
        'Mobile commerce'
      ]
    },
    {
      id: 'manufacturing',
      icon: <FaIndustry />,
      name: 'Manufacturing',
      color: 'bg-indigo-500',
      description: 'Optimize production with ERP systems, supply chain management, and IoT-enabled smart manufacturing solutions.',
      features: [
        'Production planning',
        'Quality control',
        'Supply chain management',
        'Equipment monitoring',
        'Inventory optimization',
        'Predictive maintenance'
      ]
    },
    {
      id: 'fintech',
      icon: <FaChartLine />,
      name: 'Fintech',
      color: 'bg-teal-500',
      description: 'Build secure financial platforms with payment processing, digital banking, and investment management solutions.',
      features: [
        'Payment processing',
        'Digital wallets',
        'Loan management',
        'Investment platforms',
        'Fraud prevention',
        'Regulatory compliance'
      ]
    },
    {
      id: 'logistics',
      icon: <FaTruck />,
      name: 'Logistics',
      color: 'bg-yellow-600',
      description: 'Optimize logistics with warehouse management, fleet tracking, and end-to-end supply chain visibility.',
      features: [
        'Warehouse management',
        'Fleet tracking',
        'Route optimization',
        'Inventory control',
        'Shipment tracking',
        'Supplier management'
      ]
    }
  ];

  const selectedIndustryData = industries.find(ind => ind.id === selectedIndustry);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-on-scroll {
          opacity: 1;
        }
        
        .animate-on-scroll.animated {
          animation-duration: 0.8s;
          animation-fill-mode: both;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-up.animated {
          animation-name: fadeInUp;
        }
        
        .fade-left.animated {
          animation-name: fadeInLeft;
        }
        
        .fade-right.animated {
          animation-name: fadeInRight;
        }
        
        .scale-in.animated {
          animation-name: scaleIn;
        }
        
        .industry-btn {
          transition: all 0.3s ease;
        }
        
        .industry-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .industry-btn.active {
          transform: scale(1.05);
        }
      `}} />

      <div className="overflow-hidden bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10 text-center">
            <div className="animate-on-scroll fade-up">
              <span className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg mb-8">
                Industries We Serve
              </span>
            </div>
            
            <h1 className="text-gray-900 mb-8 text-5xl md:text-6xl lg:text-7xl font-black leading-tight animate-on-scroll fade-up" style={{ animationDelay: '0.2s' }}>
              Custom IT Solutions For 70+ Industries
            </h1>
            
            <p className="max-w-4xl mx-auto mb-6 text-xl text-gray-700 leading-relaxed animate-on-scroll fade-up" style={{ animationDelay: '0.4s' }}>
              We are a top-rated software development company delivering tailored solutions 
              across diverse industries. Our expertise spans from healthcare to fintech, 
              manufacturing to e-commerce, ensuring your business gets the perfect technology fit.
            </p>
            
            <p className="max-w-4xl mx-auto text-xl text-gray-700 leading-relaxed animate-on-scroll fade-up" style={{ animationDelay: '0.6s' }}>
              With over <span className="font-black text-primary">750+ successful projects</span> and deep industry knowledge, we understand 
              the unique challenges and opportunities in your sector.
            </p>
          </div>
        </section>

        {/* Industry Selector Buttons */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`industry-btn px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 border-2 animate-on-scroll scale-in ${
                    selectedIndustry === industry.id
                      ? `${industry.color} text-white border-transparent active`
                      : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-2xl">{industry.icon}</span>
                  {industry.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Industry Details */}
        {selectedIndustryData && (
          <section className="section-spacing bg-gray-50">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                {/* Industry Header */}
                <div className="text-center mb-16 animate-on-scroll fade-up">
                  <div className={`w-32 h-32 ${selectedIndustryData.color} rounded-3xl flex items-center justify-center mx-auto mb-8 text-6xl text-white shadow-2xl`}>
                    {selectedIndustryData.icon}
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                    {selectedIndustryData.name}
                  </h2>
                  <p className="text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    {selectedIndustryData.description}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 animate-on-scroll scale-in" style={{ animationDelay: '0.2s' }}>
                  <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">
                    Key Features & Solutions
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {selectedIndustryData.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300 animate-on-scroll fade-left"
                        style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                      >
                        <div className="flex-shrink-0">
                          <FaCheckCircle className="text-3xl text-primary" />
                        </div>
                        <span className="text-lg text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap justify-center gap-6 animate-on-scroll fade-up" style={{ animationDelay: '0.8s' }}>
                    <Link href="/contact">
                      <button className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                        Get Started
                        <FaArrowRight />
                      </button>
                    </Link>
                    
                    <Link href="/services">
                      <button className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-primary">
                        View All Services
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Industries Grid */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll fade-up">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Explore All Industries
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Click on any industry to see detailed solutions and features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <button
                  key={industry.id}
                  onClick={() => {
                    setSelectedIndustry(industry.id);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-left animate-on-scroll scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-20 h-20 ${industry.color} rounded-2xl flex items-center justify-center mb-6 text-4xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {industry.description}
                  </p>
                  <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    Learn More <FaArrowRight />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-primary text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <h2 className="mb-8 max-w-4xl mx-auto text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Ready to Transform Your Industry?
            </h2>
            
            <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Let's discuss how our tailored solutions can drive your business forward
            </p>
            
            <Link href="/contact">
              <button className="bg-white text-primary px-12 py-6 rounded-full font-black text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-4">
                Contact Us Today
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
