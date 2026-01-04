'use client';
import { useState, useEffect } from 'react';
import { FaUsers, FaLightbulb, FaTrophy, FaHeart, FaRocket, FaGraduationCap, FaGlobe, FaCoffee, FaArrowRight, FaMapMarkerAlt, FaBriefcase, FaClock, FaCheckCircle, FaFileAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function CareerPage() {
  const [expandedPosition, setExpandedPosition] = useState(null);

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

  const benefits = [
    { 
      icon: <FaUsers />, 
      title: 'Collaborative Environment', 
      description: 'Work with talented professionals in a supportive team culture',
      color: 'bg-blue-500'
    },
    { 
      icon: <FaLightbulb />, 
      title: 'Continuous Learning', 
      description: 'Access to training, workshops, and skill development programs',
      color: 'bg-purple-500'
    },
    { 
      icon: <FaTrophy />, 
      title: 'Career Growth', 
      description: 'Clear career paths and opportunities for advancement',
      color: 'bg-orange-500'
    },
    { 
      icon: <FaHeart />, 
      title: 'Work-Life Balance', 
      description: 'Flexible hours and remote work options',
      color: 'bg-green-500'
    },
    { 
      icon: <FaRocket />, 
      title: 'Innovation Culture', 
      description: 'Encouraged to experiment and bring new ideas to life',
      color: 'bg-red-500'
    },
    { 
      icon: <FaGraduationCap />, 
      title: 'Skill Development', 
      description: 'Regular training sessions and certification support',
      color: 'bg-indigo-500'
    },
    { 
      icon: <FaGlobe />, 
      title: 'Global Exposure', 
      description: 'Work on international projects with diverse clients',
      color: 'bg-teal-500'
    },
    { 
      icon: <FaCoffee />, 
      title: 'Great Perks', 
      description: 'Competitive salary, health benefits, and team events',
      color: 'bg-pink-500'
    }
  ];

  const positions = [
    {
      role: 'Senior Full Stack Developer',
      location: 'Mumbai, India',
      experience: '5+ years',
      type: 'Full-time',
      description: 'Looking for an experienced full stack developer proficient in React, Node.js, and MongoDB. Must have strong problem-solving skills and experience with modern development practices.',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'REST APIs']
    },
    {
      role: 'UI/UX Designer',
      location: 'Remote',
      experience: '3+ years',
      type: 'Full-time',
      description: 'Creative designer with strong portfolio in web and mobile app design. Proficiency in Figma, Adobe XD, and understanding of user-centered design principles required.',
      skills: ['Figma', 'Adobe XD', 'UI Design', 'UX Research', 'Prototyping', 'Design Systems']
    },
    {
      role: 'DevOps Engineer',
      location: 'Mumbai, India',
      experience: '4+ years',
      type: 'Full-time',
      description: 'Expert in AWS, Docker, Kubernetes, and CI/CD pipelines. Experience with infrastructure as code and automation tools is essential.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Jenkins']
    },
    {
      role: 'Business Analyst',
      location: 'Hybrid',
      experience: '2+ years',
      type: 'Full-time',
      description: 'Analyze business requirements and translate them into technical specifications. Strong communication skills and experience with agile methodologies required.',
      skills: ['Requirements Analysis', 'Agile', 'JIRA', 'Documentation', 'Stakeholder Management']
    },
    {
      role: 'Mobile App Developer',
      location: 'Mumbai, India',
      experience: '3+ years',
      type: 'Full-time',
      description: 'Skilled in React Native or Flutter for cross-platform mobile development. Experience publishing apps to App Store and Play Store is a plus.',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase', 'App Store']
    },
    {
      role: 'Frontend Developer',
      location: 'Remote',
      experience: '2+ years',
      type: 'Full-time',
      description: 'Build responsive and performant web applications using modern JavaScript frameworks. Strong understanding of HTML, CSS, and JavaScript fundamentals.',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design']
    }
  ];

  const stats = [
    { number: '80+', label: 'Team Members', icon: <FaUsers /> },
    { number: '750+', label: 'Projects Delivered', icon: <FaRocket /> },
    { number: '98%', label: 'Employee Satisfaction', icon: <FaHeart /> },
    { number: '15+', label: 'Countries Served', icon: <FaGlobe /> }
  ];

  const internshipBenefits = [
    'Hands-on experience with real projects',
    'Mentorship from senior developers',
    'Certificate of completion',
    'Potential for full-time employment',
    'Flexible working hours',
    'Stipend provided'
  ];

  const applicationSteps = [
    {
      step: '01',
      title: 'Submit Application',
      description: 'Send your resume and portfolio to careers@viahind.com'
    },
    {
      step: '02',
      title: 'Initial Screening',
      description: 'Our HR team reviews your application within 3-5 business days'
    },
    {
      step: '03',
      title: 'Technical Interview',
      description: 'Technical assessment and discussion with team leads'
    },
    {
      step: '04',
      title: 'Final Interview',
      description: 'Meet with management and discuss role expectations'
    },
    {
      step: '05',
      title: 'Offer & Onboarding',
      description: 'Receive offer letter and begin your journey with us'
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-on-scroll { opacity: 1; }
        .animate-on-scroll.animated {
          animation-duration: 0.8s;
          animation-fill-mode: both;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .fade-up.animated { animation-name: fadeInUp; }
        .scale-in.animated { animation-name: scaleIn; }
        .slide-left.animated { animation-name: slideInLeft; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
        .delay-6 { animation-delay: 0.6s; }
        .position-card { transition: all 0.3s ease; }
        .position-card:hover { transform: translateY(-4px); }
        html { scroll-behavior: smooth; }
      `}} />

      <div className="overflow-hidden bg-white">
        {/* Hero Section - Join Our Team */}
        <section id="join-our-team" className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10 text-center">
            <div className="animate-on-scroll fade-up">
              <span className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg mb-8">
                Careers at Viahind
              </span>
            </div>
            
            <h1 className="text-gray-900 mb-8 text-5xl md:text-6xl lg:text-7xl font-black leading-tight animate-on-scroll fade-up delay-2">
              Join Our Team
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed animate-on-scroll fade-up delay-3">
              Be part of a dynamic team building the future of technology
            </p>
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-on-scroll fade-up delay-4">
              We're always looking for talented individuals who are passionate about <span className="font-black text-primary">innovation and excellence</span>
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center group animate-on-scroll scale-in delay-${index + 1}`}>
                  <div className="text-5xl mb-4 text-primary">{stat.icon}</div>
                  <div className="text-5xl lg:text-6xl font-black text-gray-900 mb-3">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section id="current-openings" className="section-spacing bg-white">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll fade-up">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Current Openings
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find your perfect role and start your journey with us
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto space-y-6">
              {positions.map((position, index) => (
                <div 
                  key={index} 
                  className={`position-card bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-primary animate-on-scroll slide-left delay-${Math.min(index + 1, 6)}`}
                >
                  <div className="p-8 cursor-pointer" onClick={() => setExpandedPosition(expandedPosition === index ? null : index)}>
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                      <div className="flex-1">
                        <h3 className="mb-4 text-3xl font-black text-gray-900">{position.role}</h3>
                        <div className="flex flex-wrap gap-6 text-gray-600 text-lg">
                          <span className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-primary" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <FaBriefcase className="text-primary" />
                            {position.experience}
                          </span>
                          <span className="flex items-center gap-2">
                            <FaClock className="text-primary" />
                            {position.type}
                          </span>
                        </div>
                      </div>
                      <Link href="/contact">
                        <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 whitespace-nowrap inline-flex items-center gap-3">
                          Apply Now
                          <FaArrowRight />
                        </button>
                      </Link>
                    </div>
                  </div>
                  
                  {expandedPosition === index && (
                    <div className="px-8 pb-8 border-t border-gray-100 pt-8">
                      <p className="text-gray-700 leading-relaxed text-lg mb-6">{position.description}</p>
                      <h4 className="text-xl font-black text-gray-900 mb-4">Required Skills:</h4>
                      <div className="flex flex-wrap gap-3">
                        {position.skills.map((skill, idx) => (
                          <span key={idx} className="bg-blue-50 text-primary px-4 py-2 rounded-full font-semibold text-sm border border-blue-100">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Culture Section */}
        <section id="work-culture" className="section-spacing bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll fade-up">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Our Work Culture
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A workplace that values innovation, collaboration, and growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-12">
              <div className="bg-white p-10 rounded-3xl shadow-xl animate-on-scroll scale-in delay-1">
                <h3 className="text-3xl font-black text-gray-900 mb-6">Innovation First</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We encourage creative thinking and provide the freedom to experiment with new technologies and approaches. Your ideas matter here.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-primary flex-shrink-0" />
                    Regular hackathons and innovation challenges
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-primary flex-shrink-0" />
                    Access to latest tools and technologies
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-primary flex-shrink-0" />
                    Dedicated time for learning and experimentation
                  </li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-xl animate-on-scroll scale-in delay-2">
                <h3 className="text-3xl font-black text-gray-900 mb-6">Team Collaboration</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Work alongside talented professionals in an environment that promotes knowledge sharing and mutual growth.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-primary flex-shrink-0" />
                    Cross-functional team collaboration
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-primary flex-shrink-0" />
                    Regular team building activities
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-primary flex-shrink-0" />
                    Open communication and feedback culture
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center animate-on-scroll fade-up delay-3">
              <Link href="/work-culture">
                <button className="bg-primary text-white px-12 py-6 rounded-full font-black text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-4">
                  Explore Full Work Culture
                  <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits & Perks Section */}
        <section id="benefits-perks" className="section-spacing bg-white">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll fade-up">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Benefits & Perks
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We invest in our people with comprehensive benefits and perks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`bg-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center animate-on-scroll scale-in delay-${Math.min((index % 6) + 1, 6)}`}
                >
                  <div className={`w-20 h-20 ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl text-white shadow-lg`}>
                    {benefit.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-black text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl border-2 border-blue-100 animate-on-scroll scale-in delay-4">
                <h3 className="text-3xl font-black text-gray-900 mb-6 text-center">Additional Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Health Insurance</h4>
                      <p className="text-gray-600">Comprehensive medical coverage for you and your family</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Flexible Hours</h4>
                      <p className="text-gray-600">Work when you're most productive</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Remote Work</h4>
                      <p className="text-gray-600">Hybrid and fully remote options available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Paid Time Off</h4>
                      <p className="text-gray-600">Generous vacation and sick leave policy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Learning Budget</h4>
                      <p className="text-gray-600">Annual budget for courses and certifications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Team Events</h4>
                      <p className="text-gray-600">Regular outings, celebrations, and team building</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internship Program Section */}
        <section id="internship-program" className="section-spacing bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll fade-up">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Internship Program
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Launch your career with hands-on experience and mentorship
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                <div className="bg-white p-10 rounded-3xl shadow-xl animate-on-scroll scale-in delay-1">
                  <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 text-4xl text-white shadow-lg">
                    <FaGraduationCap />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">For Students</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    3-6 month internship programs for students looking to gain real-world experience in software development, design, and business analysis.
                  </p>
                  <ul className="space-y-3">
                    {internshipBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <FaCheckCircle className="text-purple-500 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-10 rounded-3xl shadow-xl animate-on-scroll scale-in delay-2">
                  <div className="w-20 h-20 bg-pink-500 rounded-2xl flex items-center justify-center mb-6 text-4xl text-white shadow-lg">
                    <FaRocket />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">Program Highlights</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Our internship program is designed to provide comprehensive learning and growth opportunities.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="font-bold text-pink-500 text-xl">01</span>
                      <div>
                        <strong>Real Projects:</strong> Work on actual client projects, not just training exercises
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="font-bold text-pink-500 text-xl">02</span>
                      <div>
                        <strong>Mentorship:</strong> One-on-one guidance from experienced professionals
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="font-bold text-pink-500 text-xl">03</span>
                      <div>
                        <strong>Career Path:</strong> High-performing interns offered full-time positions
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center animate-on-scroll fade-up delay-3">
                <Link href="/contact">
                  <button className="bg-purple-500 text-white px-12 py-6 rounded-full font-black text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-4">
                    Apply for Internship
                    <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section id="how-to-apply" className="section-spacing bg-white">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll fade-up">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                How to Apply
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our simple and transparent hiring process
              </p>
            </div>

            <div className="max-w-6xl mx-auto mb-16">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {applicationSteps.map((item, index) => (
                  <div 
                    key={index} 
                    className={`bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl text-center border-2 border-blue-100 animate-on-scroll scale-in delay-${index + 1}`}
                  >
                    <div className="text-6xl font-black text-primary mb-4 opacity-30">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 p-10 rounded-3xl border-2 border-gray-200 animate-on-scroll scale-in delay-6">
                <h3 className="text-3xl font-black text-gray-900 mb-6 text-center">Ready to Apply?</h3>
                <p className="text-gray-700 text-lg text-center mb-8">
                  Send your application to us through any of these channels:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <a 
                    href="mailto:careers@viahind.com" 
                    className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-primary"
                  >
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-3xl text-white">
                      <FaEnvelope />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                      <p className="text-sm text-gray-600">careers@viahind.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://linkedin.com/company/viahind" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-primary"
                  >
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl text-white">
                      <FaLinkedin />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900 mb-1">LinkedIn</h4>
                      <p className="text-sm text-gray-600">Connect with us</p>
                    </div>
                  </a>

                  <Link 
                    href="/contact"
                    className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-primary"
                  >
                    <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-3xl text-white">
                      <FaFileAlt />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900 mb-1">Contact Form</h4>
                      <p className="text-sm text-gray-600">Fill online form</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-spacing bg-primary text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <h2 className="mb-8 max-w-4xl mx-auto text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              We Believe You Do Your Best Work When You Feel Your Best
            </h2>
            
            <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Join our team of 80+ talented professionals who have delivered 750+ successful projects
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#current-openings">
                <button className="bg-white text-primary px-12 py-6 rounded-full font-black text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-4">
                  View Open Positions
                  <FaArrowRight />
                </button>
              </a>
              
              <Link href="/work-culture">
                <button className="bg-transparent border-2 border-white text-white px-12 py-6 rounded-full font-black text-xl hover:bg-white hover:text-primary transition-all duration-300">
                  Explore Work Culture
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
