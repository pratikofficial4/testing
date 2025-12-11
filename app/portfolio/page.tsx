'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = ['All', 'Video Editing', '3D Modelling', 'Animation', 'VFX', 'Motion Graphics'];

  const projects = [
    {
      id: 1,
      title: 'Corporate Brand Video',
      category: 'Video Editing',
      description: 'A professional corporate video showcasing brand values with dynamic transitions and color grading.',
      emoji: '🎬',
      details: 'Full post-production workflow including color correction, sound design, and motion graphics integration.',
      duration: '2 minutes',
      client: 'TechCorp Inc.'
    },
    {
      id: 2,
      title: 'Product 3D Visualization',
      category: '3D Modelling',
      description: 'Photorealistic 3D product rendering for e-commerce and marketing materials.',
      emoji: '🎨',
      details: 'High-quality 3D modeling with realistic materials, lighting, and rendering for product showcase.',
      duration: 'Multiple angles',
      client: 'DesignStore'
    },
    {
      id: 3,
      title: 'Motion Graphics Promo',
      category: 'Motion Graphics',
      description: 'Eye-catching motion graphics for social media marketing campaign.',
      emoji: '✨',
      details: 'Dynamic animated graphics with kinetic typography and smooth transitions.',
      duration: '30 seconds',
      client: 'SocialBuzz'
    },
    {
      id: 4,
      title: 'Architectural Walkthrough',
      category: '3D Modelling',
      description: 'Immersive 3D architectural visualization and virtual walkthrough.',
      emoji: '🏢',
      details: 'Detailed 3D modeling of architectural spaces with realistic materials and lighting.',
      duration: '3 minutes',
      client: 'BuildPro'
    },
    {
      id: 5,
      title: 'Music Video',
      category: 'Video Editing',
      description: 'Creative music video with visual effects and color grading.',
      emoji: '🎵',
      details: 'Multi-camera editing, VFX integration, and creative color grading.',
      duration: '4 minutes',
      client: 'Rising Artist'
    },
    {
      id: 6,
      title: 'VFX Showreel',
      category: 'VFX',
      description: 'Visual effects compilation showcasing various techniques and styles.',
      emoji: '💫',
      details: 'Compositing, particle effects, and CGI integration with live footage.',
      duration: '90 seconds',
      client: 'Internal Project'
    },
    {
      id: 7,
      title: 'Character Animation',
      category: 'Animation',
      description: 'Smooth character animation for animated short film.',
      emoji: '🎭',
      details: '3D character rigging and animation with expressive movements.',
      duration: '5 minutes',
      client: 'Animation Studio'
    },
    {
      id: 8,
      title: 'Logo Animation',
      category: 'Motion Graphics',
      description: 'Professional logo reveal animation with modern aesthetics.',
      emoji: '🎪',
      details: 'Kinetic logo animation with particle effects and dynamic transitions.',
      duration: '10 seconds',
      client: 'StartupXYZ'
    },
    {
      id: 9,
      title: 'Documentary Edit',
      category: 'Video Editing',
      description: 'Documentary film editing with interview integration and b-roll.',
      emoji: '📹',
      details: 'Story-driven editing with narrative pacing and audio mixing.',
      duration: '45 minutes',
      client: 'Documentary Films'
    },
    {
      id: 10,
      title: 'Product Animation',
      category: 'Animation',
      description: '3D product animation showcasing features and functionality.',
      emoji: '📱',
      details: 'Smooth product animation with camera movements and feature highlights.',
      duration: '60 seconds',
      client: 'Tech Gadgets'
    },
    {
      id: 11,
      title: 'Explainer Video',
      category: 'Motion Graphics',
      description: 'Animated explainer video for SaaS product.',
      emoji: '💡',
      details: 'Clean and modern motion graphics with voiceover synchronization.',
      duration: '90 seconds',
      client: 'SaaS Company'
    },
    {
      id: 12,
      title: 'Game Environment',
      category: '3D Modelling',
      description: '3D game environment modeling with detailed textures.',
      emoji: '🎮',
      details: 'Low-poly to high-poly modeling with optimized game-ready assets.',
      duration: 'Multiple assets',
      client: 'Indie Game Dev'
    }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

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
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our collection of stunning projects across video editing, 3D modelling, and animation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project.id)}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-7xl">{project.emoji}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-indigo-400 text-sm font-semibold mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                  <button className="mt-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm font-semibold hover:bg-white/20 transition-all">
                    View Details
                  </button>
                </div>
                <div className="p-6 bg-gray-900">
                  <span className="text-indigo-400 text-sm font-semibold">{project.category}</span>
                  <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-400">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>

            {(() => {
              const project = projects.find(p => p.id === selectedProject);
              if (!project) return null;

              return (
                <>
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                    <div className="text-9xl">{project.emoji}</div>
                  </div>
                  <div className="p-8">
                    <span className="text-indigo-400 text-sm font-semibold">{project.category}</span>
                    <h2 className="text-3xl font-bold mt-2 mb-4">{project.title}</h2>
                    <p className="text-gray-300 mb-6">{project.details}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-gray-800 rounded-lg">
                        <div className="text-gray-400 text-sm mb-1">Duration</div>
                        <div className="text-white font-semibold">{project.duration}</div>
                      </div>
                      <div className="p-4 bg-gray-800 rounded-lg">
                        <div className="text-gray-400 text-sm mb-1">Client</div>
                        <div className="text-white font-semibold">{project.client}</div>
                      </div>
                    </div>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all">
                      Contact Us for Similar Project
                    </button>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
