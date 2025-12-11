'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Video, Box, Sparkles, Zap, Film, Layers, Palette, Globe } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Video size={48} />,
      title: 'Video Editing',
      description: 'Professional video editing services with cinematic quality',
      features: [
        'Color Correction & Grading',
        'Audio Mixing & Enhancement',
        'Transitions & Effects',
        'Multi-Camera Editing',
        'Motion Tracking',
        'Title Cards & Graphics'
      ],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <Box size={48} />,
      title: '3D Modelling',
      description: 'Create stunning 3D models and visualizations',
      features: [
        'Product Visualization',
        'Architectural Rendering',
        'Character Modeling',
        'Environment Design',
        'Texture & Material Creation',
        'UV Mapping'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Film size={48} />,
      title: 'Animation',
      description: 'Bring your ideas to life with smooth animations',
      features: [
        'Character Animation',
        '2D & 3D Animation',
        'Product Animation',
        'Explainer Videos',
        'Rigging & Skinning',
        'Keyframe Animation'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Sparkles size={48} />,
      title: 'Visual Effects (VFX)',
      description: 'Add magic to your videos with cutting-edge VFX',
      features: [
        'Compositing',
        'Green Screen Removal',
        'Particle Effects',
        'CGI Integration',
        'Matte Painting',
        'Rotoscoping'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Zap size={48} />,
      title: 'Motion Graphics',
      description: 'Dynamic motion graphics for modern brands',
      features: [
        'Logo Animation',
        'Kinetic Typography',
        'Infographic Animation',
        'Social Media Content',
        'Lower Thirds',
        'Broadcast Graphics'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Layers size={48} />,
      title: 'Post-Production',
      description: 'Complete post-production workflow management',
      features: [
        'Editing & Assembly',
        'Sound Design',
        'Color Correction',
        'Final Output & Delivery',
        'Format Conversion',
        'Quality Control'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Palette size={48} />,
      title: 'Creative Direction',
      description: 'Strategic creative guidance for your projects',
      features: [
        'Concept Development',
        'Storyboarding',
        'Style Frames',
        'Creative Consulting',
        'Brand Integration',
        'Visual Strategy'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Globe size={48} />,
      title: 'Virtual Production',
      description: 'Modern virtual production techniques',
      features: [
        'Virtual Sets',
        'Real-time Rendering',
        'LED Volume Integration',
        'Camera Tracking',
        'Virtual Scouting',
        'Previsualization'
      ],
      color: 'from-teal-500 to-blue-500'
    }
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive video editing and 3D modelling solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`text-transparent bg-gradient-to-r ${service.color} bg-clip-text mb-4`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mt-2 mr-3 flex-shrink-0`} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">VisionCraft?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              We combine creativity, technical expertise, and dedication to deliver exceptional results
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-xl bg-gray-900/50 border border-gray-800"
              >
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3">Fast Turnaround</h3>
                <p className="text-gray-400">
                  Quick delivery without compromising on quality. We respect your deadlines.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-8 rounded-xl bg-gray-900/50 border border-gray-800"
              >
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-gray-400">
                  Skilled professionals with years of experience in the industry.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 rounded-xl bg-gray-900/50 border border-gray-800"
              >
                <div className="text-5xl mb-4">💎</div>
                <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
                <p className="text-gray-400">
                  Top-notch quality that exceeds expectations and industry standards.
                </p>
              </motion.div>
            </div>
          </motion.div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can bring your vision to life
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
