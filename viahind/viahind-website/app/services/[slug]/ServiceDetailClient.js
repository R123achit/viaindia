'use client';
import { useState, useEffect } from 'react';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
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
    { key: 'overview', label: 'Overview' },
    { key: 'expertise', label: 'Our Expertise' },
    { key: 'technologies', label: 'Technologies' },
    { key: 'workflow', label: 'Work Flow' },
    { key: 'values', label: 'Value We Deliver' }
  ];

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
        
        .scale-in.animated {
          animation-name: scaleIn;
        }
        
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
        .delay-6 { animation-delay: 0.6s; }
      `}} />

      <div className="overflow-hidden bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link href="/services" className="inline-block mb-6 text-primary font-bold hover:underline">
                  ← Back to Services
                </Link>
                <h1 className="text-gray-900 mb-6 text-5xl md:text-6xl font-black leading-tight">
                  {service.title}
                </h1>
                <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link href="/contact">
                  <button className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-3">
                    Get Started
                    <FaArrowRight />
                  </button>
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {service.clients.map((client, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <span className="font-bold text-gray-900">{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
          <div className="container-custom">
            <div className="flex gap-4 overflow-x-auto pb-3 justify-center flex-wrap">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  className={`px-8 py-3 rounded-full text-base font-bold whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.key 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="section-spacing bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-5xl font-black text-gray-900 mb-8 animate-on-scroll fade-up">
                    Service Overview
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-12 animate-on-scroll fade-up delay-1">
                    {service.overview}
                  </p>
                  
                  <h3 className="text-3xl font-black text-gray-900 mb-8 animate-on-scroll fade-up delay-2">
                    Key Capabilities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {service.expertise.map((item, idx) => (
                      <div 
                        key={idx} 
                        className={`flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-on-scroll scale-in delay-${Math.min(idx + 3, 6)}`}
                      >
                        <FaCheckCircle className="text-primary text-3xl flex-shrink-0" />
                        <span className="font-bold text-lg text-gray-900">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center animate-on-scroll fade-up delay-6">
                    <Link href="/contact">
                      <button className="bg-primary text-white px-12 py-6 rounded-full font-black text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-4">
                        Start Your Project
                        <FaArrowRight />
                      </button>
                    </Link>
                  </div>
                </div>
              )}

              {activeTab === 'expertise' && (
                <div>
                  <h2 className="text-5xl font-black text-gray-900 mb-8 animate-on-scroll fade-up">
                    Our Expertise
                  </h2>
                  <p className="text-xl text-gray-700 mb-12 animate-on-scroll fade-up delay-1">
                    We have deep expertise across multiple domains and technologies
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {service.expertise.map((item, idx) => (
                      <div 
                        key={idx} 
                        className={`bg-white p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-primary animate-on-scroll scale-in delay-${Math.min(idx + 1, 6)}`}
                      >
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl text-white">
                          ✓
                        </div>
                        <h3 className="font-black text-xl text-gray-900">{item}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'technologies' && (
                <div>
                  <h2 className="text-5xl font-black text-gray-900 mb-8 animate-on-scroll fade-up">
                    Technologies We Use
                  </h2>
                  <p className="text-xl text-gray-700 mb-12 animate-on-scroll fade-up delay-1">
                    Cutting-edge tools and frameworks for optimal results
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {service.technologies.map((tech, idx) => (
                      <div 
                        key={idx} 
                        className={`bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white cursor-pointer border-2 border-gray-100 animate-on-scroll scale-in delay-${Math.min((idx % 6) + 1, 6)}`}
                      >
                        <span className="font-black text-lg">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'workflow' && (
                <div>
                  <h2 className="text-5xl font-black text-gray-900 mb-8 animate-on-scroll fade-up">
                    Our Work Flow
                  </h2>
                  <p className="text-xl text-gray-700 mb-12 animate-on-scroll fade-up delay-1">
                    A proven process that delivers exceptional results
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {service.workflow.map((item, idx) => (
                      <div 
                        key={idx} 
                        className={`bg-white p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 animate-on-scroll scale-in delay-${Math.min(idx + 1, 6)}`}
                      >
                        <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-lg">
                          {idx + 1}
                        </div>
                        <h4 className="font-black text-xl text-gray-900 mb-3">{item.step}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div>
                  <h2 className="text-5xl font-black text-gray-900 mb-8 animate-on-scroll fade-up">
                    Value We Deliver
                  </h2>
                  <p className="text-xl text-gray-700 mb-12 animate-on-scroll fade-up delay-1">
                    Why clients choose us for their projects
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {service.values.map((value, idx) => (
                      <div 
                        key={idx} 
                        className={`bg-white p-10 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 animate-on-scroll scale-in delay-${idx + 1}`}
                      >
                        <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl text-white shadow-lg">
                          {idx === 0 ? '🤝' : idx === 1 ? '⚡' : '🎯'}
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-4">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">{value.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
              Ready to Get Started?
            </h2>
            
            <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Let's discuss how we can help bring your project to life
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact">
                <button className="bg-white text-primary px-12 py-6 rounded-full font-black text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-4">
                  Contact Us Today
                  <FaArrowRight />
                </button>
              </Link>
              
              <Link href="/services">
                <button className="bg-transparent border-2 border-white text-white px-12 py-6 rounded-full font-black text-xl hover:bg-white hover:text-primary transition-all duration-300">
                  View All Services
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
