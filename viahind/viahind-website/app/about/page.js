'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaLightbulb, FaCheckCircle, FaTrophy, FaStar, FaRocket, 
  FaUsers, FaAward, FaChartLine, FaArrowRight, FaQuoteLeft 
} from 'react-icons/fa';
import TeamSection from '@/components/TeamSection';
import Link from 'next/link';

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Continuous learning and improvement drive our innovation and excellence in every project we undertake.',
      color: 'from-blue-500 to-blue-600',
      delay: 0
    },
    {
      icon: <FaCheckCircle />,
      title: 'Accountability',
      description: 'We deliver the finest solutions with complete transparency and take full responsibility for our commitments.',
      color: 'from-green-500 to-green-600',
      delay: 0.1
    },
    {
      icon: <FaTrophy />,
      title: 'Success',
      description: 'Great management team and collaborative approach ensure project success and client satisfaction.',
      color: 'from-purple-500 to-purple-600',
      delay: 0.2
    },
    {
      icon: <FaStar />,
      title: 'Excellence',
      description: 'Building a sustainable future through exceptional quality and innovative technological solutions.',
      color: 'from-orange-500 to-orange-600',
      delay: 0.3
    }
  ];

  const stats = [
    { icon: <FaUsers />, number: '80+', label: 'Expert Team Members', color: 'from-blue-500 to-cyan-500' },
    { icon: <FaRocket />, number: '750+', label: 'Projects Delivered', color: 'from-purple-500 to-pink-500' },
    { icon: <FaAward />, number: '650+', label: 'Happy Clients', color: 'from-green-500 to-emerald-500' },
    { icon: <FaChartLine />, number: '98%', label: 'Success Rate', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <div ref={containerRef} className="overflow-hidden bg-white">

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 102, 255, 0.05) 1px, transparent 0)',
              backgroundSize: '40px 40px',
              y: useTransform(smoothProgress, [0, 0.3], [0, -100])
            }}
          />
        </div>

        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="container-custom relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Badge with Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: 0.2 
              }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <span className="relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  About Viahind
                </span>
              </div>
            </motion.div>

            {/* Main Heading with Stagger */}
            <div className="mb-8">
              {['Transforming', 'Businesses', 'Through', 'Innovation'].map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4 + idx * 0.1,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }}
                  className="inline-block text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mr-4 mb-4"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Subtitle with Fade */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto"
            >
              Leading IT solutions provider empowering organizations with{' '}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-bold"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                cutting-edge technology
              </motion.span>
            </motion.p>

            {/* Quote Card with 3D Effect */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="relative max-w-4xl mx-auto perspective-1000"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  rotateX: -2,
                  transition: { duration: 0.3 }
                }}
                className="relative bg-white/80 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-gray-200/50"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl"></div>
                <FaQuoteLeft className="text-6xl text-blue-500/20 mb-4" />
                <p className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4 leading-tight">
                  Excellence for betterment of life
                </p>
                <div className="flex items-center justify-center gap-2 mt-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex flex-col items-center gap-2 text-gray-400"
              >
                <span className="text-sm font-semibold">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#0066FF 1px, transparent 1px), linear-gradient(90deg, #0066FF 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-400 text-xl">
              Delivering excellence across the globe
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-gray-800/50 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl text-center">
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-6 text-3xl text-white shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div 
                    className="text-5xl lg:text-6xl font-black text-white mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-400 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section with Parallax */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Icon with Animation */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* Glow rings */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-blue-500 rounded-full blur-3xl"
                  />
                  <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl"
                  />
                  
                  {/* Main icon */}
                  <div className="relative w-64 h-64 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                    <FaLightbulb className="text-9xl text-white" />
                  </div>
                </motion.div>

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </motion.div>

              {/* Right - Content */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                    Our Vision
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight"
                >
                  Leading the Digital Transformation
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="space-y-6"
                >
                  <p className="text-xl text-gray-700 leading-relaxed">
                    To be the <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">global leader</span> in digital transformation, empowering businesses with cutting-edge technology solutions that drive innovation, efficiency, and sustainable growth.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    We envision a world where technology seamlessly integrates with business operations, creating <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">smarter, more efficient, and more connected</span> organizations.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="mt-8"
                >
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all inline-flex items-center gap-3"
                    >
                      Start Your Journey
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with Cards */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Our Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Driving Transformation Through Technology
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {[
              {
                emoji: '🤖',
                title: 'Automate Businesses',
                description: 'Through Smart IT Solutions that streamline operations and boost productivity',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                emoji: '📈',
                title: 'Excel Business Processes',
                description: 'By implementing innovative technologies that optimize and transform operations',
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-xl p-12 rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-50"></div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-8 text-4xl shadow-lg`}
                  >
                    {item.emoji}
                  </motion.div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                    {item.title}
                  </h3>
                  
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Decorative line */}
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${item.gradient} rounded-full mt-8`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section with Advanced Animations */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: value.delay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Animated border */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-3xl`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Card */}
                <div className="relative bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100 group-hover:border-transparent transition-all duration-300">
                  {/* Icon with rotation */}
                  <motion.div 
                    className={`w-24 h-24 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-8 text-5xl text-white shadow-lg`}
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {value.icon}
                  </motion.div>
                  
                  <h3 className="mb-6 text-2xl md:text-3xl text-center font-black text-gray-900">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center leading-relaxed text-lg">
                    {value.description}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} rounded-b-3xl`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section with Advanced Effects */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest mb-8 border border-white/30"
            >
              Join Our Team
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 max-w-5xl mx-auto text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
            >
              We have <motion.span 
                className="text-yellow-300"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                80+ powerful brains
              </motion.span> who have already deployed{' '}
              <motion.span 
                className="text-yellow-300"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                750+ projects
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto"
            >
              We believe you do your <span className="font-bold italic">best work</span> when you feel your <span className="font-bold italic">best</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link href="/work-culture">
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white text-blue-600 px-12 py-6 rounded-full font-black text-xl shadow-2xl inline-flex items-center gap-4 hover:shadow-3xl transition-all"
                >
                  EXPLORE OUR WORK CULTURE
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaRocket />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
