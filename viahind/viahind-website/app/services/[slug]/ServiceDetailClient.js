'use client';
import { useState, useEffect } from 'react';
import { FaCheckCircle, FaArrowRight, FaStar, FaAward, FaRocket, FaLightbulb, FaCog, FaUsers } from 'react-icons/fa';
import Link from 'next/link';

export default function ServiceDetailClient({ service, slug }) {
  const [activeTab, setActiveTab] = useState('overview');

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
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, [activeTab]);

  const tabs = [
    { key: 'overview', label: 'Overview', icon: <FaLightbulb /> },
    { key: 'expertise', label: 'Our Expertise', icon: <FaAward /> },
    { key: 'technologies', label: 'Technologies', icon: <FaCog /> },
    { key: 'workflow', label: 'Work Flow', icon: <FaRocket /> },
    { key: 'values', label: 'Value We Deliver', icon: <FaStar /> }
  ];

  const getServiceGradient = () => {
    const gradients = {
      'web-application': 'from-[#0066FF] via-[#0052CC] to-[#003D99]',
      'web-designing': 'from-[#2EAE4D] via-[#259A3F] to-[#1C7A31]',
      'ecommerce': 'from-[#00B8D4] via-[#0097A7] to-[#00838F]',
      'ios': 'from-[#6B4FBB] via-[#5A3FA0] to-[#4A3285]',
      'android': 'from-[#2EAE4D] via-[#259A3F] to-[#1C7A31]',
      'flutter': 'from-[#0066FF] via-[#0052CC] to-[#003D99]',
      'react-native': 'from-[#00B8D4] via-[#0097A7] to-[#00838F]',
      'pwa': 'from-[#6B4FBB] via-[#5A3FA0] to-[#4A3285]',
      'windows-forms': 'from-[#E94E3D] via-[#D43F2F] to-[#B83426]',
      'wpf': 'from-[#E94E3D] via-[#D43F2F] to-[#B83426]',
      'saas': 'from-[#0097A7] via-[#00838F] to-[#006064]',
      'crm': 'from-[#0097A7] via-[#00838F] to-[#006064]',
      'erp': 'from-[#0097A7] via-[#00838F] to-[#006064]',
      'hrms': 'from-[#0097A7] via-[#00838F] to-[#006064]',
      'inventory': 'from-[#0097A7] via-[#00838F] to-[#006064]',
      'payroll': 'from-[#0097A7] via-[#00838F] to-[#006064]',
      'sap': 'from-[#00B8D4] via-[#0097A7] to-[#00838F]',
      'microsoft': 'from-[#00B8D4] via-[#0097A7] to-[#00838F]',
      'zoho': 'from-[#00B8D4] via-[#0097A7] to-[#00838F]',
      'whatsapp': 'from-[#00B8D4] via-[#0097A7] to-[#00838F]',
      'hardware': 'from-[#00B8D4] via-[#0097A7] to-[#00838F]',
      'sem': 'from-[#FF7A3D] via-[#F06A2E] to-[#D95A20]',
      'seo': 'from-[#FF7A3D] via-[#F06A2E] to-[#D95A20]',
      'smm': 'from-[#FF7A3D] via-[#F06A2E] to-[#D95A20]',
      'smo': 'from-[#FF7A3D] via-[#F06A2E] to-[#D95A20]',
      'sap-impl': 'from-[#2EAE4D] via-[#259A3F] to-[#1C7A31]',
      'microsoft-impl': 'from-[#2EAE4D] via-[#259A3F] to-[#1C7A31]',
      'zoho-impl': 'from-[#2EAE4D] via-[#259A3F] to-[#1C7A31]',
      'web-development': 'from-blue-500 to-blue-600',
      'web-design': 'from-purple-500 to-purple-600',
      'mobile-apps': 'from-cyan-500 to-cyan-600',
      'desktop-apps': 'from-violet-500 to-violet-600',
      'enterprise-software': 'from-indigo-600 to-indigo-700',
      'cloud-solutions': 'from-sky-500 to-sky-600',
      'digital-marketing': 'from-green-500 to-green-600',
      'erp-systems': 'from-orange-500 to-orange-600',
      'ecommerce-solutions': 'from-rose-500 to-rose-600'
    };
    return gradients[slug] || 'from-blue-500 to-blue-600';
  };

  const getServiceBg = () => {
    const backgrounds = {
      'web-development': 'from-blue-50 via-blue-50 to-indigo-50',
      'web-design': 'from-purple-50 via-purple-50 to-pink-50',
      'mobile-apps': 'from-cyan-50 via-cyan-50 to-teal-50',
      'desktop-apps': 'from-violet-50 via-violet-50 to-purple-50',
      'enterprise-software': 'from-indigo-50 via-indigo-50 to-blue-50',
      'cloud-solutions': 'from-sky-50 via-sky-50 to-cyan-50',
      'digital-marketing': 'from-green-50 via-green-50 to-emerald-50',
      'erp-systems': 'from-orange-50 via-orange-50 to-amber-50',
      'ecommerce-solutions': 'from-rose-50 via-rose-50 to-pink-50'
    };
    return backgrounds[slug] || 'from-blue-50 via-blue-50 to-indigo-50';
  };

  const getServiceAccent = () => {
    const accents = {
      'web-development': 'blue',
      'web-design': 'purple',
      'mobile-apps': 'cyan',
      'desktop-apps': 'violet',
      'enterprise-software': 'indigo',
      'cloud-solutions': 'sky',
      'digital-marketing': 'green',
      'erp-systems': 'orange',
      'ecommerce-solutions': 'rose'
    };
    return accents[slug] || 'blue';
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-on-scroll {
          opacity: 0;
        }
        
        .animate-on-scroll.animated {
          animation-duration: 0.9s;
          animation-fill-mode: both;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-up.animated {
          animation-name: fadeInUp;
        }
        
        .scale-in.animated {
          animation-name: scaleIn;
        }
        
        .slide-right.animated {
          animation-name: slideInRight;
        }
        
        .floating-shape {
          animation: float 6s ease-in-out infinite;
        }
        
        .tab-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .tab-button:hover {
          transform: translateY(-2px);
        }
        
        .capability-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .capability-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        
        .capability-card:hover::before {
          left: 100%;
        }
        
        .capability-card:hover {
          transform: translateY(-8px) scale(1.02);
        }
        
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
        .delay-6 { animation-delay: 0.6s; }
      `}} />

      <div className="overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white relative">
        {/* Animated Background Gradient - Same as ScrollPortfolio */}
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-br ${getServiceGradient()} transition-all duration-700 ease-in-out opacity-5 pointer-events-none`}
          style={{ zIndex: 0 }}
        />
        
        {/* Hero Section */}
        <section className={`relative bg-gradient-to-br ${getServiceBg()} py-32 lg:py-40 overflow-hidden`} style={{ zIndex: 1 }}>
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl floating-shape"></div>
            <div className="absolute bottom-32 left-10 w-96 h-96 bg-purple-200/30 rounded-full filter blur-3xl floating-shape" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-200/20 rounded-full filter blur-3xl floating-shape" style={{animationDelay: '4s'}}></div>
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>

          <div className="container-custom relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Link href="/services" className="inline-flex items-center gap-2 text-gray-700 font-bold hover:text-primary transition-colors mb-8 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl">
                  ← Back to Services
                </Link>
                
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg mb-8">
                  <FaStar className="text-yellow-500" />
                  Premium Service
                </div>
                
                <h1 className="text-gray-900 mb-6 text-5xl md:text-6xl lg:text-7xl font-black leading-tight animate-on-scroll fade-up">
                  {service.title}
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto animate-on-scroll fade-up delay-2">
                  {service.description}
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-16 animate-on-scroll fade-up delay-3">
                  <Link href="/contact">
                    <button className={`bg-gradient-to-r ${getServiceGradient()} text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3`}>
                      Get Started Today
                      <FaArrowRight />
                    </button>
                  </Link>
                  <Link href="/portfolio">
                    <button className="bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-200">
                      View Portfolio
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Trusted By Section */}
              <div className="animate-on-scroll scale-in delay-4">
                <p className="text-center text-gray-600 font-semibold mb-6 uppercase tracking-wider text-sm">
                  Trusted By Leading Companies
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {service.clients.map((client, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white"
                    >
                      <span className="font-black text-gray-900 text-lg">{client}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="py-6 bg-white border-b-2 border-gray-100 sticky top-0 z-40 shadow-md backdrop-blur-lg bg-white/95" style={{ position: 'sticky' }}>
          <div className="container-custom">
            <div className="flex gap-3 overflow-x-auto pb-2 justify-center flex-wrap">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  className={`tab-button px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 inline-flex items-center gap-2 ${
                    activeTab === tab.key 
                      ? `bg-gradient-to-r ${getServiceGradient()} text-white shadow-lg scale-105` 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="section-spacing bg-white relative" style={{ zIndex: 1 }}>
          <div className="container-custom">
            <div className="max-w-7xl mx-auto">
              {activeTab === 'overview' && (
                <div>
                  <div className="text-center mb-16">
                    <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-4 animate-on-scroll fade-up">
                      Service Overview
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 animate-on-scroll fade-up delay-1">
                      What We Offer
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto animate-on-scroll fade-up delay-2">
                      {service.overview}
                    </p>
                  </div>
                  
                  <div className="mb-20">
                    <h3 className="text-4xl font-black text-gray-900 mb-12 text-center animate-on-scroll fade-up delay-3">
                      Key Capabilities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {service.expertise.map((item, idx) => (
                        <div 
                          key={idx} 
                          className={`capability-card flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl border-2 border-gray-100 animate-on-scroll scale-in delay-${Math.min(idx + 4, 6)}`}
                        >
                          <div className={`w-12 h-12 bg-gradient-to-br ${getServiceGradient()} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                            <FaCheckCircle className="text-white text-xl" />
                          </div>
                          <div>
                            <span className="font-bold text-lg text-gray-900 block">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-xl animate-on-scroll scale-in delay-6">
                    <h3 className="text-3xl font-black text-gray-900 mb-4">
                      Ready to Transform Your Business?
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                      Let's discuss how our {service.title.toLowerCase()} services can help you achieve your goals
                    </p>
                    <Link href="/contact">
                      <button className={`bg-gradient-to-r ${getServiceGradient()} text-white px-12 py-6 rounded-full font-black text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-4`}>
                        Start Your Project
                        <FaArrowRight />
                      </button>
                    </Link>
                  </div>
                </div>
              )}

              {activeTab === 'expertise' && (
                <div>
                  <div className="text-center mb-16">
                    <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-4 animate-on-scroll fade-up">
                      Our Expertise
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 animate-on-scroll fade-up delay-1">
                      What Makes Us Different
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-on-scroll fade-up delay-2">
                      Deep expertise across multiple domains and cutting-edge technologies
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {service.expertise.map((item, idx) => (
                      <div 
                        key={idx} 
                        className={`bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-gray-100 hover:border-transparent animate-on-scroll scale-in delay-${Math.min(idx + 1, 6)}`}
                      >
                        <div className={`w-20 h-20 bg-gradient-to-br ${getServiceGradient()} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                          <FaAward className="text-4xl text-white" />
                        </div>
                        <h3 className="font-black text-xl text-gray-900 leading-tight">{item}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'technologies' && (
                <div>
                  <div className="text-center mb-16">
                    <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-4 animate-on-scroll fade-up">
                      Technologies
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 animate-on-scroll fade-up delay-1">
                      Cutting-Edge Tech Stack
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-on-scroll fade-up delay-2">
                      We use the latest tools and frameworks to deliver optimal results
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {service.technologies.map((tech, idx) => (
                      <div 
                        key={idx} 
                        className={`bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-gray-100 group animate-on-scroll scale-in delay-${Math.min((idx % 6) + 1, 6)}`}
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${getServiceGradient()} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                          <FaCog className="text-white text-xl" />
                        </div>
                        <span className="font-black text-sm text-gray-900 group-hover:text-primary transition-colors">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'workflow' && (
                <div>
                  <div className="text-center mb-16">
                    <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-4 animate-on-scroll fade-up">
                      Our Process
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 animate-on-scroll fade-up delay-1">
                      How We Work
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-on-scroll fade-up delay-2">
                      A proven, transparent process that ensures exceptional results every time
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {service.workflow.map((item, idx) => (
                      <div 
                        key={idx} 
                        className={`bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-gray-100 animate-on-scroll scale-in delay-${Math.min(idx + 1, 6)}`}
                      >
                        <div className={`w-16 h-16 bg-gradient-to-br ${getServiceGradient()} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-lg`}>
                          {idx + 1}
                        </div>
                        <h4 className="font-black text-xl text-gray-900 mb-3">{item.step}</h4>
                        <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div>
                  <div className="text-center mb-16">
                    <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-4 animate-on-scroll fade-up">
                      Our Values
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 animate-on-scroll fade-up delay-1">
                      Value We Deliver
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-on-scroll fade-up delay-2">
                      Why leading companies choose us for their most important projects
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {service.values.map((value, idx) => (
                      <div 
                        key={idx} 
                        className={`bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-gray-100 animate-on-scroll scale-in delay-${idx + 1}`}
                      >
                        <div className={`w-24 h-24 bg-gradient-to-br ${getServiceGradient()} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                          {idx === 0 ? <FaUsers className="text-5xl text-white" /> : 
                           idx === 1 ? <FaRocket className="text-5xl text-white" /> : 
                           <FaStar className="text-5xl text-white" />}
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-4">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg font-medium">{value.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`section-spacing bg-gradient-to-br ${getServiceBg()} text-center relative overflow-hidden`} style={{ zIndex: 1 }}>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-200 rounded-full filter blur-3xl"></div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg p-12 lg:p-16 rounded-3xl shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r ${getServiceGradient()} text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest mb-8 shadow-lg">
                <FaStar />
                Let's Get Started
              </div>

              <h2 className="mb-6 text-gray-900 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Ready to Transform Your Business?
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
                Let's discuss how our {service.title.toLowerCase()} services can help you achieve your goals and drive growth
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <Link href="/contact">
                  <button className={`bg-gradient-to-r ${getServiceGradient()} text-white px-12 py-6 rounded-full font-black text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-4`}>
                    Get Free Consultation
                    <FaArrowRight />
                  </button>
                </Link>
                
                <Link href="/services">
                  <button className="bg-gray-900 text-white px-12 py-6 rounded-full font-black text-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-xl">
                    View All Services
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-12 border-t-2 border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-4xl font-black text-gray-900 mb-2">750+</div>
                    <div className="text-gray-600 text-sm font-semibold">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-gray-900 mb-2">98%</div>
                    <div className="text-gray-600 text-sm font-semibold">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-gray-900 mb-2">80+</div>
                    <div className="text-gray-600 text-sm font-semibold">Expert Team</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-gray-900 mb-2">24/7</div>
                    <div className="text-gray-600 text-sm font-semibold">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
