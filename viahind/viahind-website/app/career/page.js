'use client';
import { useState } from 'react';
import { 
  FaUsers, FaLightbulb, FaTrophy, FaHeart, FaRocket, FaGraduationCap, 
  FaGlobe, FaCoffee, FaArrowRight, FaMapMarkerAlt, FaBriefcase, FaClock, 
  FaCheckCircle, FaFileAlt, FaChevronDown, FaCode, FaClipboardCheck, 
  FaUserCheck, FaAward, FaStar
} from 'react-icons/fa';
import Link from 'next/link';

export default function CareerPage() {
  const [expandedPosition, setExpandedPosition] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const stats = [
    { number: '80+', label: 'Team Members', icon: <FaUsers /> },
    { number: '750+', label: 'Projects Delivered', icon: <FaRocket /> },
    { number: '98%', label: 'Employee Satisfaction', icon: <FaHeart /> },
    { number: '15+', label: 'Countries Served', icon: <FaGlobe /> }
  ];

  const positions = [
    {
      role: 'Senior Full Stack Developer', location: 'Mumbai, India', experience: '5+ years', type: 'Full-time', department: 'engineering',
      description: 'Looking for an experienced full stack developer proficient in React, Node.js, and MongoDB. Must have strong problem-solving skills and experience with modern development practices.',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'REST APIs']
    },
    {
      role: 'UI/UX Designer', location: 'Remote', experience: '3+ years', type: 'Full-time', department: 'design',
      description: 'Creative designer with strong portfolio in web and mobile app design. Proficiency in Figma, Adobe XD, and understanding of user-centered design principles required.',
      skills: ['Figma', 'Adobe XD', 'UI Design', 'UX Research', 'Prototyping', 'Design Systems']
    },
    {
      role: 'DevOps Engineer', location: 'Mumbai, India', experience: '4+ years', type: 'Full-time', department: 'engineering',
      description: 'Expert in AWS, Docker, Kubernetes, and CI/CD pipelines. Experience with infrastructure as code and automation tools is essential.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Jenkins']
    },
    {
      role: 'Business Analyst', location: 'Hybrid', experience: '2+ years', type: 'Full-time', department: 'business',
      description: 'Analyze business requirements and translate them into technical specifications. Strong communication skills and experience with agile methodologies required.',
      skills: ['Requirements Analysis', 'Agile', 'JIRA', 'Documentation', 'Stakeholder Management']
    },
    {
      role: 'Mobile App Developer', location: 'Mumbai, India', experience: '3+ years', type: 'Full-time', department: 'engineering',
      description: 'Skilled in React Native or Flutter for cross-platform mobile development. Experience publishing apps to App Store and Play Store is a plus.',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase', 'App Store']
    },
    {
      role: 'Frontend Developer', location: 'Remote', experience: '2+ years', type: 'Full-time', department: 'engineering',
      description: 'Build responsive and performant web applications using modern JavaScript frameworks. Strong understanding of HTML, CSS, and JavaScript fundamentals.',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design']
    }
  ];

  const benefits = [
    { icon: <FaUsers />, title: 'Collaborative Environment', description: 'Work with talented professionals in a supportive team culture' },
    { icon: <FaLightbulb />, title: 'Continuous Learning', description: 'Access to training, workshops, and skill development programs' },
    { icon: <FaTrophy />, title: 'Career Growth', description: 'Clear career paths and opportunities for advancement' },
    { icon: <FaHeart />, title: 'Work-Life Balance', description: 'Flexible hours and remote work options' },
    { icon: <FaRocket />, title: 'Innovation Culture', description: 'Encouraged to experiment and bring new ideas to life' },
    { icon: <FaGraduationCap />, title: 'Skill Development', description: 'Regular training sessions and certification support' },
    { icon: <FaGlobe />, title: 'Global Exposure', description: 'Work on international projects with diverse clients' },
    { icon: <FaCoffee />, title: 'Great Perks', description: 'Competitive salary, health benefits, and team events' }
  ];

  const internshipSteps = [
    { icon: <FaFileAlt />, title: 'Apply', description: 'Submit your application with resume and portfolio' },
    { icon: <FaClipboardCheck />, title: 'Task Assignment', description: 'Receive a practical task to showcase your skills' },
    { icon: <FaClock />, title: 'Deadline', description: 'Complete within the given timeframe (3-5 days)' },
    { icon: <FaUserCheck />, title: 'Evaluation', description: 'Our team reviews and provides detailed feedback' },
    { icon: <FaAward />, title: 'Certificate', description: 'Get completion certificate and potential job offer' }
  ];

  const tabs = [
    { id: 'all', label: 'All Roles' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'design', label: 'Design' },
    { id: 'business', label: 'Business' }
  ];

  const filteredPositions = activeTab === 'all' ? positions : positions.filter(p => p.department === activeTab);

  const locationBadge = (loc) => {
    if (loc === 'Remote') return 'bg-green-50 text-green-700 border-green-200';
    if (loc === 'Hybrid') return 'bg-amber-50 text-amber-700 border-amber-200';
    return 'bg-blue-50 text-blue-700 border-blue-200';
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-200 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-5 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-blue-700 font-semibold text-sm">We're Hiring</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build Your Future<br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">With Viahind</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Join a team of passionate professionals creating cutting-edge solutions for global clients across 15+ countries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#openings" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                View Openings <FaArrowRight className="text-sm" />
              </a>
              <a href="#internship" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-200 text-blue-700 px-8 py-3.5 rounded-xl font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-300">
                Internship Program <FaGraduationCap />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3 text-blue-600 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="py-20 bg-gray-50/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Current Openings</h2>
            <p className="text-gray-600 text-lg">Find the perfect role for your next career move</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredPositions.map((pos, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className="p-6 md:p-7">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{pos.role}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${locationBadge(pos.location)}`}>
                          <FaMapMarkerAlt className="text-[10px]" /> {pos.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 border border-gray-200">
                          <FaBriefcase className="text-[10px]" /> {pos.experience}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 border border-gray-200">
                          <FaClock className="text-[10px]" /> {pos.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 w-full lg:w-auto">
                      <button
                        onClick={() => setExpandedPosition(expandedPosition === i ? null : i)}
                        className="flex-1 lg:flex-none flex items-center justify-center gap-1.5 bg-gray-50 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-100 border border-gray-200 transition-all"
                      >
                        Details
                        <FaChevronDown className={`text-[10px] transition-transform duration-300 ${expandedPosition === i ? 'rotate-180' : ''}`} />
                      </button>
                      <Link href="/contact" className="flex-1 lg:flex-none">
                        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow-md">
                          Apply <FaArrowRight className="text-[10px]" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${expandedPosition === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 md:px-7 pb-6 border-t border-gray-100 pt-5">
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">{pos.description}</p>
                    <h4 className="text-sm font-bold text-gray-900 mb-2">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {pos.skills.map((skill, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-semibold border border-blue-100">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Work With Us</h2>
            <p className="text-gray-600 text-lg">Benefits & perks that make a difference</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <div key={i} className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {b.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship */}
      <section id="internship" className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full mb-5">
              <FaGraduationCap className="text-blue-600 text-sm" />
              <span className="text-blue-700 font-semibold text-sm">Internship Program</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Launch Your Career</h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">3-6 month program with real projects, mentorship, and potential full-time offers</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
            {/* Program highlights */}
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10">
                <h3 className="text-xl font-bold text-gray-900 mb-5">What You'll Get</h3>
                <div className="space-y-4">
                  {[
                    'Hands-on experience with real client projects',
                    'One-on-one mentorship from senior developers',
                    'Certificate of completion',
                    'Potential full-time employment',
                    'Stipend provided'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="text-blue-500 mt-0.5 flex-shrink-0 text-sm" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-10 bg-gray-50/50 border-t md:border-t-0 md:border-l border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-5">How It Works</h3>
                <div className="space-y-4">
                  {internshipSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 text-xs">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{step.title}</h4>
                        <p className="text-xs text-gray-500">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center p-6 border-t border-gray-100 bg-gradient-to-r from-blue-50/50 to-cyan-50/50">
              <a
                href="https://forms.google.com/your-internship-form"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Apply for Internship <FaArrowRight className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Culture Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Life at Viahind</h2>
            <p className="text-gray-600 text-lg">Innovation, collaboration, and growth — every day</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {[
              {
                title: 'Innovation First',
                desc: 'We encourage creative thinking and freedom to experiment with cutting-edge technologies.',
                points: ['Regular hackathons', 'Access to latest tools', 'Dedicated learning time']
              },
              {
                title: 'Team Collaboration',
                desc: 'Work alongside talented professionals in an environment that promotes knowledge sharing.',
                points: ['Cross-functional teams', 'Team building events', 'Open feedback culture']
              }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 p-7 rounded-2xl border border-blue-100/60">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.desc}</p>
                <div className="space-y-2">
                  {item.points.map((p, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <FaCheckCircle className="text-blue-500 text-xs flex-shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/work-culture" className="inline-flex items-center gap-2 bg-white border-2 border-blue-200 text-blue-700 px-8 py-3 rounded-xl font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-300">
              Explore Work Culture <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>

        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Ready to Join Our Team?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Join 80+ talented professionals who have delivered 750+ successful projects worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#openings" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
              View Positions <FaArrowRight className="text-sm" />
            </a>
            <Link href="/work-culture" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/40 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 hover:border-white/70 transition-all duration-300">
              Work Culture
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
