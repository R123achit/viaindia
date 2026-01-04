'use client';
import { motion } from 'framer-motion';
import { FaLightbulb, FaCheckCircle, FaTrophy, FaStar, FaRocket, FaUsers, FaAward, FaChartLine } from 'react-icons/fa';
import TeamSection from '@/components/TeamSection';

export default function AboutPage() {

  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Continuous learning and improvement drive our innovation and excellence in every project we undertake.',
      color: 'bg-blue-500'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Accountability',
      description: 'We deliver the finest solutions with complete transparency and take full responsibility for our commitments.',
      color: 'bg-green-500'
    },
    {
      icon: <FaTrophy />,
      title: 'Success',
      description: 'Great management team and collaborative approach ensure project success and client satisfaction.',
      color: 'bg-purple-500'
    },
    {
      icon: <FaStar />,
      title: 'Excellence',
      description: 'Building a sustainable future through exceptional quality and innovative technological solutions.',
      color: 'bg-orange-500'
    }
  ];

  const stats = [
    { icon: <FaUsers />, number: '80+', label: 'Expert Team Members', color: 'bg-blue-500' },
    { icon: <FaRocket />, number: '750+', label: 'Projects Delivered', color: 'bg-purple-500' },
    { icon: <FaAward />, number: '650+', label: 'Happy Clients', color: 'bg-green-500' },
    { icon: <FaChartLine />, number: '98%', label: 'Success Rate', color: 'bg-orange-500' }
  ];

  return (
    <>
      <div className="overflow-hidden bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-32 overflow-hidden">
          {/* Subtle decorative elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-block mb-8"
              >
                <span className="bg-primary text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg">
                  About Viahind
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-900 mb-8 text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
                style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
              >
                Transforming Businesses Through Innovation
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto font-light"
              >
                Leading IT solutions provider empowering organizations with{' '}
                <span className="text-primary font-bold">cutting-edge technology</span>
              </motion.p>

              {/* Quote card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="relative max-w-4xl mx-auto"
              >
                <div className="bg-white p-12 rounded-3xl shadow-2xl border-2 border-primary/10">
                  <div className="text-6xl text-primary mb-4 opacity-30">"</div>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold italic text-primary mb-4">
                    Excellence for betterment of life
                  </p>
                  <div className="text-6xl text-primary text-right opacity-30">"</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Our Impact
              </h2>
              <p className="text-gray-600 text-xl">
                Numbers that speak for themselves
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)' }}
                  className="text-center group bg-gray-50 p-8 rounded-2xl transition-shadow"
                >
                  <div className={`w-24 h-24 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl text-white shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div className="text-5xl lg:text-6xl font-black text-gray-900 mb-3">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="section-spacing bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center mb-12"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-32 h-32 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-8 text-6xl text-white shadow-2xl transition-transform"
                >
                  <FaLightbulb />
                </motion.div>
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                  Our Vision
                </h2>
              </motion.div>

              {/* Content card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl border border-gray-100"
              >
                <p className="mb-8 text-xl md:text-2xl leading-relaxed text-gray-700">
                  To be the <span className="font-black text-primary">global leader</span> in digital transformation, empowering businesses with cutting-edge 
                  technology solutions that drive innovation, efficiency, and sustainable growth.
                </p>
                <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                  We envision a world where technology seamlessly integrates with business operations, 
                  creating <span className="font-black text-primary">smarter, more efficient, and more connected</span> organizations.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 text-xl">
                Driving transformation through technology
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)' }}
                className="group bg-blue-50 p-12 rounded-3xl shadow-xl transition-all duration-300 border-2 border-blue-100"
              >
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-8 text-4xl shadow-lg">
                  🤖
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                  Automate Businesses
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Through Smart IT Solutions that streamline operations and boost productivity
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)' }}
                className="group bg-blue-50 p-12 rounded-3xl shadow-xl transition-all duration-300 border-2 border-blue-100"
              >
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-8 text-4xl shadow-lg">
                  📈
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                  Excel Business Processes
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  By implementing innovative technologies that optimize and transform operations
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="section-spacing bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <span className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest mb-6 shadow-lg">
                What Drives Us
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900">
                Our Core Values
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)' }}
                  className="group bg-white p-10 rounded-3xl shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`w-24 h-24 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-8 text-5xl text-white shadow-lg`}>
                    {value.icon}
                  </div>
                  <h3 className="mb-6 text-2xl md:text-3xl text-center font-black text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed text-lg">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />

        {/* CTA Section */}
        <section className="section-spacing bg-primary text-white text-center relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest mb-8 border border-white/30">
                Join Our Team
              </span>

              <h2 className="mb-8 max-w-5xl mx-auto text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                We have <span className="text-yellow-300">80+ powerful brains</span> who have already deployed{' '}
                <span className="text-yellow-300">750+ projects</span>
              </h2>
              
              <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
                We believe you do your <span className="font-bold italic">best work</span> when you feel your <span className="font-bold italic">best</span>
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-12 py-6 rounded-full font-black text-xl shadow-2xl inline-flex items-center gap-4 hover:shadow-3xl transition-shadow duration-300"
              >
                EXPLORE OUR WORK CULTURE
                <FaRocket />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
