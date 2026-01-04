'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { FaCode, FaPalette, FaShoppingCart, FaMobileAlt, FaDesktop, FaCloud, FaSearch, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export default function ServicesPage() {
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
  }, []);

  const services = [
    {
      slug: 'web-application',
      icon: <FaCode />,
      title: 'Web Application',
      shortTitle: 'Web Application',
      description: 'Custom web applications built with modern technologies for scalability and performance.',
      features: ['Custom Development', 'API Integration', 'Database Design', 'Cloud Deployment'],
      color: 'bg-blue-500'
    },
    {
      slug: 'web-designing',
      icon: <FaPalette />,
      title: 'Web Designing',
      shortTitle: 'Web Designing',
      description: 'Beautiful, user-friendly designs that engage users and drive conversions.',
      features: ['UI/UX Design', 'Responsive Design', 'Prototyping', 'Brand Identity'],
      color: 'bg-purple-500'
    },
    {
      slug: 'ecommerce',
      icon: <FaShoppingCart />,
      title: 'E-Commerce',
      shortTitle: 'E-Commerce',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      features: ['Shopping Cart', 'Payment Gateway', 'Order Management', 'Analytics'],
      color: 'bg-orange-500'
    },
    {
      slug: 'mobile',
      icon: <FaMobileAlt />,
      title: 'iOS/Mobile',
      shortTitle: 'iOS/Mobile',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      color: 'bg-green-500'
    },
    {
      slug: 'windows',
      icon: <FaDesktop />,
      title: 'Windows Forms',
      shortTitle: 'Windows Forms',
      description: 'Powerful desktop applications for Windows, Mac, and Linux platforms.',
      features: ['Windows Forms', 'WPF', 'Electron', 'Cross-platform'],
      color: 'bg-indigo-500'
    },
    {
      slug: 'saas',
      icon: <FaCloud />,
      title: 'SaaS',
      shortTitle: 'SaaS',
      description: 'Scalable Software-as-a-Service solutions with subscription management.',
      features: ['Multi-tenancy', 'Subscription Billing', 'Cloud Infrastructure', 'API Development'],
      color: 'bg-teal-500'
    },
    {
      slug: 'seo',
      icon: <FaSearch />,
      title: 'SEO/SEM',
      shortTitle: 'SEO/SEM',
      description: 'Comprehensive digital marketing strategies to grow your online presence.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Marketing', 'PPC Campaigns'],
      color: 'bg-red-500'
    }
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
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
        
        .slide-left.animated {
          animation-name: slideInLeft;
        }
        
        .service-card {
          transition: all 0.3s ease;
        }
        
        .service-card:hover {
          transform: translateY(-12px);
        }
        
        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
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

          <div className="container-custom relative z-10 text-center">
            <div className="animate-on-scroll fade-up">
              <span className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg mb-8">
                Our Services
              </span>
            </div>
            
            <h1 className="text-gray-900 mb-8 text-5xl md:text-6xl lg:text-7xl font-black leading-tight animate-on-scroll fade-up delay-2">
              Comprehensive IT Solutions
            </h1>
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-on-scroll fade-up delay-4">
              From web development to digital marketing, we deliver excellence in every project. 
              Our expert team transforms your vision into powerful digital solutions that drive business growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll fade-up">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of services designed to elevate your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <Link 
                  key={index} 
                  href={`/services/${service.slug}`}
                  className={`service-card bg-white border-2 border-gray-200 p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:border-primary group animate-on-scroll scale-in delay-${Math.min(index + 1, 6)}`}
                >
                  <div className={`service-icon w-24 h-24 ${service.color} rounded-2xl flex items-center justify-center mb-6 text-5xl text-white shadow-lg transition-all duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="mb-4 text-3xl font-black text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <FaCheckCircle className="text-primary flex-shrink-0 text-lg" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <span className="text-primary font-bold text-lg inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    Learn More <FaArrowRight />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-spacing bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll fade-up">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Why Choose Viahind?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine expertise, innovation, and dedication to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="bg-white p-10 rounded-3xl shadow-xl text-center animate-on-scroll scale-in delay-1">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl text-white shadow-lg">
                  🎯
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  Expert Team
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  80+ skilled professionals with deep expertise across multiple technologies and industries
                </p>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-xl text-center animate-on-scroll scale-in delay-2">
                <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl text-white shadow-lg">
                  ⚡
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  Proven Track Record
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  750+ successful projects delivered with 98% client satisfaction rate
                </p>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-xl text-center animate-on-scroll scale-in delay-3">
                <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl text-white shadow-lg">
                  🚀
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  Cutting-Edge Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Latest technologies and best practices to keep you ahead of the competition
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll fade-up">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A streamlined approach to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your needs and goals' },
                { step: '02', title: 'Planning', desc: 'Strategic roadmap and architecture' },
                { step: '03', title: 'Development', desc: 'Building with best practices' },
                { step: '04', title: 'Launch', desc: 'Deployment and ongoing support' }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl text-center border-2 border-blue-100 animate-on-scroll slide-left delay-${index + 1}`}
                >
                  <div className="text-6xl font-black text-primary mb-4 opacity-20">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.desc}
                  </p>
                </div>
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
              Ready to Start Your Project?
            </h2>
            
            <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our expert solutions
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact">
                <button className="bg-white text-primary px-12 py-6 rounded-full font-black text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-4">
                  Get Free Consultation
                  <FaArrowRight />
                </button>
              </Link>
              
              <Link href="/about">
                <button className="bg-transparent border-2 border-white text-white px-12 py-6 rounded-full font-black text-xl hover:bg-white hover:text-primary transition-all duration-300">
                  Learn About Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
