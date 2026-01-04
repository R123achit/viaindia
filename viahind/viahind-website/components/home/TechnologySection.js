'use client';
import { FaCloud, FaCogs, FaRocket, FaShoppingCart, FaMobileAlt, FaDatabase, FaArrowRight } from 'react-icons/fa';

export default function TechnologySection() {
  const services = [
    {
      icon: <FaDatabase />,
      title: 'Custom CRM/ERP Solutions',
      description: 'Tailored customer relationship and enterprise resource planning systems designed to streamline your business operations and boost productivity.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: <FaCloud />,
      title: 'SaaS & Cloud Service Platforms',
      description: 'Reinvent business with SaaS, nimble technology, scalable cloud platforms that grow with your business needs.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: <FaCogs />,
      title: 'Enterprise Solutions',
      description: 'Swift identification of business issues, comprehensive suite, custom-built solutions for complex enterprise requirements.',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50'
    },
    {
      icon: <FaRocket />,
      title: 'Digital Transformation',
      description: 'Web design, CRM/ERP/HRMS, website/mobile app development, SEO/SMM to transform your digital presence.',
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50'
    },
    {
      icon: <FaShoppingCart />,
      title: 'E-Commerce Platforms',
      description: 'Analysis, optimal tech stack, dynamic website, polished product for seamless online shopping experiences.',
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Consumer Applications',
      description: 'Desktop, Android, iOS solutions, brand identity apps that engage users and build lasting connections.',
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50'
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
              Our Services
            </span>
          </div>
          <h2 className="mb-6 max-w-4xl mx-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            The Future-Proof Technology That Your Company Deserves
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Comprehensive solutions for modern businesses powered by cutting-edge technology
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {service.icon}
                  </div>
                  {/* Decorative dot */}
                  <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${service.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
                
                {/* Title */}
                <h3 className="mb-4 text-xl font-bold text-gray-900 group-hover:text-gray-900 transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
                
                {/* CTA Link */}
                <div className="flex items-center gap-2 text-primary font-semibold group/link">
                  <span className="text-sm">Learn More</span>
                  <FaArrowRight className="text-sm transform group-hover/link:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-primary to-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3">
            Explore All Services
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
}
