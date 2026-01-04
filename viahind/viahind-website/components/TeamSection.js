'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaStar, FaCode, FaAward } from 'react-icons/fa';
import { teamMembers, teamConfig } from '@/config/teamData';
import { useState } from 'react';

export default function TeamSection() {
  return (
    <section className="relative section-spacing bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-100 rounded-full filter blur-3xl opacity-30"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-white border-2 border-blue-200 px-6 py-3 rounded-full mb-8 shadow-lg"
          >
            <FaStar className="text-yellow-500" />
            <span className="text-gray-800 font-bold uppercase tracking-widest text-sm">
              Meet Our Elite Team
            </span>
            <FaStar className="text-yellow-500" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6"
          >
            The Architects of
            <span className="block text-primary">
              Digital Excellence
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-xl max-w-3xl mx-auto"
          >
            Brilliant minds crafting tomorrow's technology today
          </motion.p>
        </div>

        {/* Team Grid - Unique Staggered Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Row 1 - 2 Cards with offset */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
            <div className="md:mt-0">
              <PremiumTeamCard member={teamMembers[0]} index={0} />
            </div>
            <div className="md:mt-12">
              <PremiumTeamCard member={teamMembers[1]} index={1} />
            </div>
          </div>

          {/* Row 2 - 2 Cards with reverse offset */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
            <div className="md:mt-12">
              <PremiumTeamCard member={teamMembers[2]} index={2} />
            </div>
            <div className="md:mt-0">
              <PremiumTeamCard member={teamMembers[3]} index={3} />
            </div>
          </div>

          {/* Row 3 - 2 Cards centered with offset */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="md:mt-0">
              <PremiumTeamCard member={teamMembers[4]} index={4} />
            </div>
            <div className="md:mt-12">
              <PremiumTeamCard member={teamMembers[5]} index={5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PremiumTeamCard({ member, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      {/* Subtle Glow on Hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
      
      {/* Main Card */}
      <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500">
        
        {/* Image Section */}
        <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Elegant Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
          
          {/* Experience Badge - Top Right */}
          {teamConfig.showExperience && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
              className="absolute top-6 right-6 bg-white border-2 border-blue-500 text-primary px-4 py-2 rounded-full shadow-lg font-black text-sm flex items-center gap-2"
            >
              <FaAward className="text-yellow-500" />
              {member.experience}
            </motion.div>
          )}

          {/* Name Card - Overlapping Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.4 }}
            className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl shadow-2xl p-6 border-2 border-gray-100"
            style={{ transform: "translateZ(30px)" }}
          >
            <h3 className="text-2xl font-black text-gray-900 mb-1">
              {member.name}
            </h3>
            <p className="text-primary font-bold text-sm uppercase tracking-wide">
              {member.role}
            </p>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="relative pt-12 p-8">
          
          {/* Domain */}
          <div className="flex items-center gap-2 mb-4 bg-blue-50 border border-blue-100 rounded-xl p-3">
            <FaCode className="text-primary flex-shrink-0" />
            <p className="text-gray-700 text-sm font-semibold">
              {member.domain}
            </p>
          </div>

          {/* Bio */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isHovered ? "auto" : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mb-4"
          >
            <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-primary pl-4 mb-4 bg-blue-50/50 py-2 rounded-r-lg">
              {member.bio}
            </p>
          </motion.div>

          {/* Skills */}
          {teamConfig.showSkills && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {member.skills.slice(0, 4).map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 + idx * 0.08 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-md hover:shadow-lg transition-shadow"
                  >
                    {skill}
                  </motion.span>
                ))}
                {member.skills.length > 4 && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-xs font-bold border-2 border-gray-200"
                  >
                    +{member.skills.length - 4} more
                  </motion.span>
                )}
              </div>
            </div>
          )}

          {/* Social Links */}
          {teamConfig.showSocialLinks && (
            <div className="flex items-center gap-3 pt-6 border-t-2 border-gray-100">
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </motion.a>
              <motion.a
                href={`mailto:${member.email}`}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-12 h-12 bg-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                aria-label="Email"
              >
                <FaEnvelope className="text-lg" />
              </motion.a>
              
              {/* Connect Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all"
              >
                Connect
              </motion.button>
            </div>
          )}
        </div>

        {/* Decorative Corner Accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-100 to-transparent rounded-tr-3xl opacity-50"></div>
      </div>
    </motion.div>
  );
}
