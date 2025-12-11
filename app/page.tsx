'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Video, Box, Sparkles, Zap } from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const featuredProjects = [
    {
      id: 1,
      title: 'Corporate Brand Video',
      category: 'Video Editing',
      image: '/images/project1.jpg',
      description: 'Professional corporate video with dynamic transitions'
    },
    {
      id: 2,
      title: 'Product 3D Visualization',
      category: '3D Modelling',
      image: '/images/project2.jpg',
      description: 'Photorealistic 3D product rendering'
    },
    {
      id: 3,
      title: 'Motion Graphics Promo',
      category: 'Animation',
      image: '/images/project3.jpg',
      description: 'Eye-catching motion graphics for marketing'
    }
  ];

  const services = [
    {
      icon: <Video size={40} />,
      title: 'Video Editing',
      description: 'Professional video editing with cinematic quality and attention to detail'
    },
    {
      icon: <Box size={40} />,
      title: '3D Modelling',
      description: 'Create stunning 3D models and visualizations for any industry'
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Visual Effects',
      description: 'Add magic to your videos with cutting-edge VFX technology'
    },
    {
      icon: <Zap size={40} />,
      title: 'Motion Graphics',
      description: 'Bring your brand to life with dynamic motion graphics'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Transform Your Vision Into
            <span className="block gradient-text mt-2">Stunning Visual Content</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Professional video editing and 3D modelling services that bring your ideas to life
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-indigo-500 rounded-full text-white font-semibold text-lg hover:bg-indigo-500/10 transition-all duration-300"
              >
                View Our Work
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">500+</div>
              <div className="text-gray-400 mt-2">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">200+</div>
              <div className="text-gray-400 mt-2">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">10+</div>
              <div className="text-gray-400 mt-2">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">15+</div>
              <div className="text-gray-400 mt-2">Team Members</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-400">Everything you need to create amazing visual content</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-indigo-500 transition-all duration-300"
              >
                <div className="text-indigo-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
              >
                View All Services
              </motion.button>
            </Link>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-400">Check out some of our recent work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-6xl">{index === 0 ? '🎬' : index === 1 ? '🎨' : '✨'}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-indigo-400 text-sm font-semibold mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
                <div className="p-6 bg-gray-900">
                  <span className="text-indigo-400 text-sm font-semibold">{project.category}</span>
                  <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
              >
                View Full Portfolio
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s bring your vision to life with our professional video editing and 3D modelling services
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Get In Touch</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
