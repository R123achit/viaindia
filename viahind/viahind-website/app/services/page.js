'use client';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCode, FaMobileAlt, FaDesktop, FaCloud, FaSearch, FaCog, FaArrowRight, FaCheckCircle, FaStar, FaRocket } from 'react-icons/fa';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('web-development');
  const [activeSubService, setActiveSubService] = useState('web-application');
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);
  const categoryRef = useRef(null);
  const cardRef = useRef(null);
  const ctaRef = useRef(null);

  // Mount effect
  useEffect(() => {
    setMounted(true);
  }, []);

  // GSAP animations on mount and scroll
  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from('.hero-badge', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)'
      });

      gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      });

      gsap.from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
        ease: 'power2.out'
      });

      // Category buttons with scroll trigger
      gsap.from('.category-btn', {
        scrollTrigger: {
          trigger: '.category-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        scale: 0.9,
        duration: 0.7,
        stagger: 0.08,
        ease: 'back.out(1.7)'
      });

      // Service card with parallax
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.service-card',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 80,
        scale: 0.95,
        duration: 1.2,
        ease: 'power3.out'
      });

      // Parallax effect
      gsap.to('.service-card', {
        scrollTrigger: {
          trigger: '.service-card',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        y: -40,
        ease: 'none'
      });

      // Stats animation
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
      });

      // CTA section
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [mounted]);

  // Animate card content when service changes
  useEffect(() => {
    if (!mounted) return;

    gsap.fromTo('.service-content',
      { opacity: 0, x: -40, scale: 0.95 },
      { opacity: 1, x: 0, scale: 1, duration: 0.7, ease: 'power3.out' }
    );

    gsap.fromTo('.client-grid',
      { opacity: 0, x: 40, scale: 0.95 },
      { opacity: 1, x: 0, scale: 1, duration: 0.7, delay: 0.2, ease: 'power3.out' }
    );

    // Stagger client logos
    gsap.from('.client-logo', {
      opacity: 0,
      scale: 0.7,
      y: 30,
      rotation: -5,
      duration: 0.5,
      stagger: 0.06,
      delay: 0.4,
      ease: 'back.out(1.7)'
    });
  }, [activeSubService, mounted]);

  // Handle URL parameters
  useEffect(() => {
    const category = searchParams.get('category');
    const service = searchParams.get('service');
    
    if (category) setActiveCategory(category);
    if (service) setActiveSubService(service);
  }, [searchParams]);

  const serviceCategories = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: <FaCode />,
      gradient: 'from-blue-500 via-blue-600 to-indigo-600',
      subServices: [
        { id: 'web-application', title: 'Web Application', description: 'We create and deliver flawless Web Application that accelerates business processes and enhances productivity along with business efficiency.', clients: 5 },
        { id: 'web-designing', title: 'Web Designing', description: 'Our core beliefs in good website designs are consistency, colors, typography, imagery, simplicity, and functionality.', clients: 3 },
        { id: 'ecommerce', title: 'E-Commerce', description: 'A Functional E-Commerce website can help increase sales by reaching customers who search for products online.', clients: 6 }
      ]
    },
    {
      id: 'mobile-application',
      title: 'Mobile Application',
      icon: <FaMobileAlt />,
      gradient: 'from-purple-500 via-purple-600 to-pink-600',
      subServices: [
        { id: 'ios', title: 'iOS', description: 'We have a great team of iOS mobile app developers to support you at every stage of the process.', clients: 6 },
        { id: 'android', title: 'Android', description: 'We offer high ROI Customized Android app development with faster deployment.', clients: 5 },
        { id: 'flutter', title: 'Flutter', description: 'Cross-platform apps with Flutter offers dynamic and faster app development.', clients: 6 },
        { id: 'react-native', title: 'React Native', description: 'React Native development for functional and beautiful UI applications.', clients: 4 },
        { id: 'pwa', title: 'PWA', description: 'Progressive Web Apps for better user experience.', clients: 3 }
      ]
    },
    {
      id: 'desktop-app',
      title: 'Desktop Apps',
      icon: <FaDesktop />,
      gradient: 'from-red-500 via-orange-500 to-yellow-500',
      subServices: [
        { id: 'windows-forms', title: 'Windows Forms C#', description: 'Feature-rich Windows application development services.', clients: 5 },
        { id: 'wpf', title: 'WPF (C#)', description: 'Powerful Windows applications with expert team.', clients: 1 }
      ]
    },
    {
      id: 'enterprise-solution',
      title: 'Enterprise Solution',
      icon: <FaCog />,
      gradient: 'from-teal-500 via-cyan-500 to-blue-500',
      subServices: [
        { id: 'saas', title: 'SaaS', description: 'Cloud-based technology solutions for business scaling.', clients: 2 },
        { id: 'crm', title: 'CRM', description: 'Improve productivity with optimized sales and customer data.', clients: 6 },
        { id: 'erp', title: 'ERP', description: 'Streamline business operations with ERP software.', clients: 6 },
        { id: 'hrms', title: 'HRMS', description: 'Streamline task processes and improve sales performance.', clients: 6 },
        { id: 'inventory', title: 'Inventory Management', description: 'Optimize inventory and business operations.', clients: 6 },
        { id: 'payroll', title: 'Payroll Solution', description: 'Efficient payroll management solutions.', clients: 6 }
      ]
    },
    {
      id: 'enterprise-integration',
      title: 'Integration',
      icon: <FaCloud />,
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      subServices: [
        { id: 'sap', title: 'SAP Integration', description: 'Fully integrated SAP software implementation.', clients: 1 },
        { id: 'microsoft', title: 'Microsoft 365', description: 'Streamline team communication effortlessly.', clients: 1 },
        { id: 'zoho', title: 'Zoho Integration', description: 'Integrate marketing, sales, and customer service.', clients: 4 },
        { id: 'whatsapp', title: 'WhatsApp API', description: 'Interact with customers effectively.', clients: 3 },
        { id: 'hardware', title: 'Hardware Integration', description: 'Connect business systems with devices.', clients: 3 }
      ]
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: <FaSearch />,
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      subServices: [
        { id: 'sem', title: 'SEM', description: 'Higher CTR and conversions through marketing strategies.', clients: 6 },
        { id: 'seo', title: 'SEO', description: 'Improve organic search visibility and traffic.', clients: 5 },
        { id: 'smm', title: 'Social Media Marketing', description: 'Increase brand awareness and conversions.', clients: 4 },
        { id: 'smo', title: 'Social Media Optimization', description: 'Increase visibility and engagement.', clients: 6 }
      ]
    },
    {
      id: 'erp-implementation',
      title: 'ERP Implementation',
      icon: <FaRocket />,
      gradient: 'from-lime-500 via-green-500 to-emerald-500',
      subServices: [
        { id: 'sap-impl', title: 'SAP Implementation', description: 'Integrated SAP software implementation.', clients: 1 },
        { id: 'microsoft-impl', title: 'Microsoft 365 Implementation', description: 'Streamline team communication.', clients: 5 },
        { id: 'zoho-impl', title: 'Zoho Implementation', description: 'Streamline business process and people.', clients: 5 }
      ]
    }
  ];

  const activeData = serviceCategories.find(cat => cat.id === activeCategory);
  const activeSubData = activeData?.subServices.find(sub => sub.id === activeSubService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden relative">
      {/* Animated Mesh Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className={`absolute inset-0 bg-gradient-to-br ${activeData?.gradient || 'from-blue-400 to-purple-400'} opacity-10 transition-all duration-1000 ease-in-out`}></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-3 bg-white shadow-lg border-2 border-blue-200 px-6 py-3 rounded-full mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
              </span>
              <span className="text-gray-800 font-bold text-sm tracking-wide">Premium IT Services</span>
            </div>

            {/* Title */}
            <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                IT Services &
              </span>
              <br />
              <span className="text-gray-900">
                Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="hero-description text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium">
              Transform your business with cutting-edge technology solutions designed for the modern enterprise
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Projects Delivered', value: '750+', gradient: 'from-blue-500 to-cyan-500' },
              { label: 'Happy Clients', value: '650+', gradient: 'from-purple-500 to-pink-500' },
              { label: 'Team Members', value: '80+', gradient: 'from-orange-500 to-red-500' },
              { label: 'Success Rate', value: '98%', gradient: 'from-green-500 to-emerald-500' }
            ].map((stat, idx) => (
              <div key={idx} className="stat-item group">
                <div className="bg-white shadow-xl border-2 border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-blue-300">
                  <div className={`text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="category-section relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Navigation */}
          <div ref={categoryRef} className="mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              {serviceCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setActiveSubService(category.subServices[0].id);
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, { y: -6, duration: 0.3, ease: 'power2.out' });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: 'power2.out' });
                  }}
                  className={`category-btn group relative px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-white shadow-2xl border-2 border-blue-300 text-gray-900'
                      : 'bg-white shadow-lg border-2 border-gray-200 text-gray-600 hover:text-gray-900 hover:border-blue-200 hover:shadow-xl'
                  }`}
                  style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl ${activeCategory === category.id ? 'scale-110' : ''} transition-transform`}>
                      {category.icon}
                    </span>
                    <span>{category.title}</span>
                  </div>
                  {activeCategory === category.id && (
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.gradient} opacity-10 blur-xl`}></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Service Card - Premium Light Design */}
          <div 
            ref={cardRef}
            className="service-card relative"
            onMouseMove={(e) => {
              if (!cardRef.current) return;
              const rect = cardRef.current.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateX = (y - centerY) / 80;
              const rotateY = (centerX - x) / 80;

              gsap.to(cardRef.current, {
                rotationX: rotateX,
                rotationY: rotateY,
                duration: 0.5,
                ease: 'power2.out',
                transformPerspective: 1000
              });
            }}
            onMouseLeave={() => {
              if (!cardRef.current) return;
              gsap.to(cardRef.current, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.5,
                ease: 'power2.out'
              });
            }}
            style={{ 
              transform: 'perspective(1000px) rotateX(0deg)',
              transformStyle: 'preserve-3d',
              willChange: 'transform'
            }}
          >
            {/* Glow Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${activeData?.gradient} opacity-30 blur-2xl rounded-3xl`}></div>
            
            {/* Main Card */}
            <div className="relative bg-white shadow-2xl border-2 border-gray-200 rounded-3xl overflow-hidden">
              {/* Sub-service Tabs */}
              <div className="border-b-2 border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6">
                <div className="flex flex-wrap gap-3">
                  {activeData?.subServices.map((subService) => (
                    <button
                      key={subService.id}
                      onClick={() => setActiveSubService(subService.id)}
                      onMouseEnter={(e) => {
                        gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2, ease: 'power2.out' });
                      }}
                      onMouseLeave={(e) => {
                        gsap.to(e.currentTarget, { scale: 1, duration: 0.2, ease: 'power2.out' });
                      }}
                      className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                        activeSubService === subService.id
                          ? `bg-gradient-to-r ${activeData.gradient} text-white shadow-lg`
                          : 'bg-white text-gray-700 hover:text-gray-900 shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-blue-300'
                      }`}
                      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                    >
                      {subService.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Details */}
              {activeSubData && (
                <div className="p-12 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
                  <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Left Column - Description (3 columns) */}
                    <div className="lg:col-span-3 service-content">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${activeData.gradient} flex items-center justify-center shadow-xl`}>
                          <FaStar className="text-white text-3xl" />
                        </div>
                        <div>
                          <h2 className="text-4xl font-black text-gray-900 mb-2">
                            {activeSubData.title}
                          </h2>
                          <div className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
                            <FaCheckCircle className="text-green-500" />
                            <span>{activeSubData.clients}+ Active Projects</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
                        {activeSubData.description}
                      </p>

                      <div className="flex flex-wrap gap-4">
                        <Link
                          href={`/services/${activeSubService}`}
                          onMouseEnter={(e) => {
                            gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
                          }}
                          onMouseLeave={(e) => {
                            gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power2.out' });
                          }}
                          className={`inline-flex items-center gap-3 bg-gradient-to-r ${activeData.gradient} text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-200`}
                          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                        >
                          View Full Details
                          <FaArrowRight />
                        </Link>

                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-3 bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-xl font-bold hover:border-blue-400 hover:shadow-lg transition-all duration-200"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>

                    {/* Right Column - Client Showcase (2 columns) */}
                    <div className="lg:col-span-2 client-grid">
                      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Trusted by Industry Leaders
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {Array.from({ length: activeSubData.clients }).map((_, idx) => (
                          <div
                            key={idx}
                            className="client-logo group"
                            onMouseEnter={(e) => {
                              gsap.to(e.currentTarget, { y: -10, scale: 1.05, duration: 0.3, ease: 'power2.out' });
                            }}
                            onMouseLeave={(e) => {
                              gsap.to(e.currentTarget, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
                            }}
                            style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                          >
                            <div className="relative aspect-square bg-white shadow-lg border-2 border-gray-200 rounded-2xl flex items-center justify-center hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden group">
                              {/* Gradient overlay on hover */}
                              <div className={`absolute inset-0 bg-gradient-to-br ${activeData.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                              
                              <div className="relative w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                <span className="text-xs text-gray-600 font-bold">Client {idx + 1}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="cta-section relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cta-content relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-3xl rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative bg-white shadow-2xl border-2 border-gray-200 rounded-3xl p-16 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full mb-8 shadow-lg">
                  <FaRocket />
                  <span className="font-bold text-sm">Ready to Transform?</span>
                </div>

                <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                  Let's Build Something
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Extraordinary
                  </span>
                </h2>

                <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                  Join 650+ companies that trust us with their digital transformation
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact">
                    <button 
                      onMouseEnter={(e) => {
                        gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
                      }}
                      onMouseLeave={(e) => {
                        gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power2.out' });
                      }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-200 inline-flex items-center gap-3"
                      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                    >
                      Start Your Project
                      <FaArrowRight />
                    </button>
                  </Link>

                  <button className="bg-white border-2 border-gray-300 text-gray-800 px-10 py-5 rounded-xl font-bold text-lg hover:border-blue-400 hover:shadow-lg transition-all duration-200">
                    Schedule a Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-20"></div>
    </div>
  );
}
