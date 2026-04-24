'use client';
import { FaUsers, FaLightbulb, FaTrophy, FaHeart, FaStar, FaRocket, FaGraduationCap, FaGlobe, FaCoffee, FaArrowRight, FaCheckCircle, FaQuoteLeft, FaGamepad, FaCalendarAlt, FaMedal, FaHandshake } from 'react-icons/fa';
import Link from 'next/link';

export default function WorkCulturePage() {
  const values = [
    { icon: <FaUsers />, title: 'Customer Centric', desc: 'Clients are at the heart of everything we do. Every solution starts with understanding their vision.', gradient: 'from-blue-500 to-blue-600' },
    { icon: <FaLightbulb />, title: 'The Difference Makers', desc: "Innovation and creativity drive our approach. We don't follow trends — we set them.", gradient: 'from-cyan-500 to-blue-500' },
    { icon: <FaTrophy />, title: 'One Team, One Dream', desc: 'Collaboration and unity towards shared goals. Your success is our success.', gradient: 'from-blue-600 to-indigo-600' },
    { icon: <FaHeart />, title: 'Work-Life Balance', desc: 'We care about your wellbeing. Flexible hours, remote options, and a human-first culture.', gradient: 'from-indigo-500 to-blue-500' }
  ];

  const perks = [
    { icon: <FaRocket />, title: 'Innovation Time', desc: 'Dedicated hours each week for personal projects and experimentation' },
    { icon: <FaGraduationCap />, title: 'Learning Budget', desc: 'Annual allowance for courses, certifications, and conferences' },
    { icon: <FaGlobe />, title: 'Remote Flexibility', desc: 'Work from anywhere — office, home, or your favourite coffee shop' },
    { icon: <FaCoffee />, title: 'Team Hangouts', desc: 'Monthly team outings, game nights, and celebration events' },
    { icon: <FaCalendarAlt />, title: 'Flexible Hours', desc: 'Choose your schedule — we focus on output, not hours clocked' },
    { icon: <FaMedal />, title: 'Recognition Program', desc: 'Quarterly awards, peer shoutouts, and performance bonuses' },
    { icon: <FaGamepad />, title: 'Fun Zone', desc: 'Gaming area, wellness room, and stocked pantry at the office' },
    { icon: <FaHandshake />, title: 'Mentorship', desc: 'Paired with senior leaders who invest in your career growth' }
  ];

  const reviews = [
    { text: 'Great work environment with supportive management. The company truly cares about employee growth and maintains an excellent work-life balance.', author: 'Senior Developer', rating: 5 },
    { text: 'Amazing culture! The team is incredibly talented and collaborative. I\'ve grown more here in 2 years than anywhere else in my career.', author: 'UI/UX Designer', rating: 5 },
    { text: 'Leadership is transparent and approachable. They actually listen to feedback and make changes. Best decision I made joining Viahind.', author: 'Project Manager', rating: 5 }
  ];

  const milestones = [
    { year: '2018', title: 'Founded', desc: 'Started with a team of 5 passionate developers' },
    { year: '2020', title: 'Global Expansion', desc: 'Opened offices in USA and Qatar' },
    { year: '2022', title: '500+ Projects', desc: 'Milestone of 500 successful deliveries' },
    { year: '2024', title: '80+ Team', desc: 'Growing family of talented professionals' }
  ];

  return (
    <div className="bg-white overflow-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-200 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-28">
          <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-blue-200 px-5 py-2 rounded-full mb-6 shadow-sm">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute h-full w-full rounded-full bg-blue-500 opacity-75"></span><span className="relative rounded-full h-2 w-2 bg-blue-600"></span></span>
            <span className="text-blue-700 font-semibold text-sm">Life at Viahind</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
            <span className="text-gray-900">Where Passion Meets</span><br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Purpose</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            We foster a culture of innovation, collaboration, and continuous learning — where every team member can thrive, grow, and make a real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/career" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
              Join Our Team <FaArrowRight className="text-sm" />
            </Link>
            <a href="#values" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-200 text-blue-700 px-8 py-3.5 rounded-xl font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-300">
              Explore Culture
            </a>
          </div>
        </div>
      </section>

      {/* ═══ CORE VALUES ═══ */}
      <section id="values" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Our Core Values</h2>
            <p className="text-gray-500 text-lg max-w-lg mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={i} className="group relative bg-white p-7 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/[0.06] hover:-translate-y-1 overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${v.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                <div className={`w-14 h-14 bg-gradient-to-br ${v.gradient} rounded-xl flex items-center justify-center mb-5 text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CULTURE HIGHLIGHTS ═══ */}
      <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Built for People Who Care</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Innovation First', desc: 'We encourage creative thinking and provide freedom to experiment with cutting-edge technologies. Regular hackathons, R&D sprints, and access to the latest tools keep our team at the forefront.', points: ['Weekly innovation hours', 'Annual hackathon with prizes', 'Access to latest tools & tech', 'Dedicated R&D budget'] },
              { title: 'Team Collaboration', desc: 'Our cross-functional teams work together seamlessly. Knowledge sharing, open communication, and mutual respect form the backbone of how we deliver exceptional results.', points: ['Cross-functional squads', 'Monthly team events', 'Open-door leadership', 'Peer learning sessions'] }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/[0.06] transition-all duration-300 relative overflow-hidden group">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${i === 0 ? 'from-blue-500 to-cyan-500' : 'from-cyan-500 to-blue-600'}`}></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{item.desc}</p>
                <div className="space-y-2.5">
                  {item.points.map((p, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <FaCheckCircle className="text-blue-500 text-xs flex-shrink-0" /> {p}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PERKS ═══ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Perks & Benefits</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Why People Love It Here</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((p, i) => (
              <div key={i} className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/[0.06] hover:-translate-y-0.5">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600 text-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {p.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{p.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ JOURNEY ═══ */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Growing Together</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 hidden md:block"></div>

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300 inline-block">
                      <div className="text-blue-600 font-black text-2xl mb-1">{m.year}</div>
                      <h3 className="text-base font-bold text-gray-900 mb-1">{m.title}</h3>
                      <p className="text-sm text-gray-500">{m.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md flex-shrink-0 hidden md:block"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ REVIEWS ═══ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">What Our Team Says</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Employee Reviews</h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="flex gap-1 text-amber-400 text-lg">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <span className="text-gray-900 font-bold text-lg">4.7</span>
              <span className="text-gray-400 text-sm font-medium">on Glassdoor</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/[0.06] transition-all duration-300 relative">
                <FaQuoteLeft className="text-blue-100 text-3xl mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed mb-5">"{r.text}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-gray-900 font-bold text-sm">{r.author}</div>
                    <div className="text-gray-400 text-xs">Viahind Team</div>
                  </div>
                  <div className="flex gap-0.5 text-amber-400 text-xs">
                    {[...Array(r.rating)].map((_, j) => <FaStar key={j} />)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="https://glassdoor.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-xl text-sm font-bold hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
              View All Reviews on Glassdoor <FaArrowRight className="text-xs" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-400/15 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-[80px]"></div>

        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Kickstart Your Career?</h2>
          <p className="text-blue-100/70 text-lg mb-8 max-w-xl mx-auto">Join our team of 80+ talented professionals building the future of technology</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/career" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              Explore Careers <FaArrowRight className="text-sm" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/20 transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
