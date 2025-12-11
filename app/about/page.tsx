'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: 'Alex Thompson',
      role: 'Creative Director',
      bio: '15+ years in video production, specializing in cinematic storytelling',
      emoji: '👨‍🎨',
      specialties: ['Direction', 'Storytelling', 'Color Grading']
    },
    {
      name: 'Sarah Chen',
      role: 'Lead 3D Artist',
      bio: 'Award-winning 3D modeler with expertise in product visualization',
      emoji: '👩‍💻',
      specialties: ['3D Modeling', 'Texturing', 'Rendering']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Senior Video Editor',
      bio: 'Master editor with a passion for dynamic cuts and rhythm',
      emoji: '🎬',
      specialties: ['Editing', 'Sound Design', 'Motion Graphics']
    },
    {
      name: 'Emma Wilson',
      role: 'VFX Supervisor',
      bio: 'Visual effects wizard bringing impossible ideas to life',
      emoji: '✨',
      specialties: ['VFX', 'Compositing', 'CGI']
    },
    {
      name: 'David Park',
      role: 'Motion Designer',
      bio: 'Creating eye-catching animations and motion graphics',
      emoji: '🎨',
      specialties: ['Animation', 'Typography', 'Branding']
    },
    {
      name: 'Lisa Anderson',
      role: 'Producer',
      bio: 'Ensuring seamless project management and client satisfaction',
      emoji: '📋',
      specialties: ['Project Management', 'Client Relations', 'Strategy']
    }
  ];

  const values = [
    {
      icon: <Target size={40} />,
      title: 'Our Mission',
      description: 'To empower brands and creators with stunning visual content that captivates audiences and drives results.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <Eye size={40} />,
      title: 'Our Vision',
      description: 'To be the leading creative studio known for pushing boundaries and delivering exceptional visual experiences.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Award size={40} />,
      title: 'Our Values',
      description: 'Excellence, creativity, collaboration, and integrity in everything we create and every relationship we build.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Users size={40} />,
      title: 'Our Approach',
      description: 'Client-focused collaboration combined with technical expertise and creative innovation to exceed expectations.',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '15+', label: 'Team Members' }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">VisionCraft</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a team of passionate creatives dedicated to transforming ideas into stunning visual experiences
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Founded in 2014, VisionCraft Studios began with a simple mission: to help brands and creators tell their stories through exceptional visual content. What started as a small team of passionate filmmakers and 3D artists has grown into a full-service creative studio.
              </p>
              <p>
                Over the years, we&apos;ve worked with startups, Fortune 500 companies, independent creators, and everything in between. Each project is an opportunity to push creative boundaries and deliver results that exceed expectations.
              </p>
              <p>
                Today, we&apos;re proud to be recognized as industry leaders in video editing and 3D modelling, with a portfolio of award-winning work and a team of talented professionals who are dedicated to their craft.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
              >
                <div className={`text-transparent bg-gradient-to-r ${value.color} bg-clip-text mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-300">
              Talented professionals who bring your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-indigo-500 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-4">{member.emoji}</div>
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-indigo-400 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-400 mb-4">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-12 border border-indigo-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals to join our creative team. Check out our open positions or send us your portfolio.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
            >
              View Careers
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
