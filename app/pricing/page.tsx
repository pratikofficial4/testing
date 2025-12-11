'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, Star } from 'lucide-react';

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '$499',
      period: 'per project',
      description: 'Perfect for small projects and startups',
      features: [
        'Up to 5 minutes video',
        'Basic color correction',
        'Standard transitions',
        'Audio mixing',
        '2 revision rounds',
        '1080p export',
        '5-7 day delivery'
      ],
      popular: false,
      color: 'from-gray-700 to-gray-800'
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: 'per project',
      description: 'Ideal for businesses and marketing',
      features: [
        'Up to 15 minutes video',
        'Advanced color grading',
        'Custom transitions & effects',
        'Sound design & mixing',
        'Motion graphics included',
        '4K export',
        'Unlimited revisions',
        '3-5 day delivery',
        'Dedicated project manager'
      ],
      popular: true,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Premium',
      price: '$2,999',
      period: 'per project',
      description: 'For high-end productions and agencies',
      features: [
        'Unlimited video length',
        'Cinema-grade color grading',
        'Custom VFX & animations',
        'Professional sound design',
        '3D elements & modeling',
        '4K/8K export',
        'Unlimited revisions',
        '1-2 day priority delivery',
        'Dedicated team',
        'Source files included',
        '24/7 support'
      ],
      popular: false,
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const addOns = [
    { name: '3D Product Modeling', price: '$299' },
    { name: 'Character Animation (per second)', price: '$50' },
    { name: 'Logo Animation', price: '$199' },
    { name: 'Motion Graphics Package', price: '$499' },
    { name: 'Rush Delivery (24h)', price: '$500' },
    { name: 'Additional Revision Round', price: '$150' }
  ];

  const faqs = [
    {
      question: 'What is included in the pricing?',
      answer: 'Each package includes all the listed features, final deliverables in your chosen format, and the specified number of revision rounds.'
    },
    {
      question: 'How does the revision process work?',
      answer: 'After delivering the initial version, you can request changes. We will implement your feedback and deliver revised versions according to your plan\'s revision limit.'
    },
    {
      question: 'Can I upgrade my plan mid-project?',
      answer: 'Yes! You can upgrade to a higher tier at any time. We\'ll adjust the pricing accordingly and apply the new plan features to your project.'
    },
    {
      question: 'What if my project is larger than the package limits?',
      answer: 'We offer custom quotes for projects that exceed our standard packages. Contact us to discuss your specific needs and get a personalized quote.'
    },
    {
      question: 'Do you offer monthly retainers?',
      answer: 'Yes! We offer monthly retainer packages for clients with ongoing video production needs. Contact us for custom retainer pricing.'
    },
    {
      question: 'What file formats do you deliver?',
      answer: 'We deliver in MP4, MOV, and other formats you need. Premium plans also include source files (project files, assets, etc.).'
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
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your project. All plans include professional quality and dedicated support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'border-indigo-500 bg-gradient-to-br from-indigo-500/10 to-purple-500/10'
                    : 'border-gray-700 bg-gray-900'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center space-x-1 px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white text-sm font-semibold">
                      <Star size={16} fill="currentColor" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{plan.period}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={20} className={`mr-3 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-indigo-500' : 'text-gray-500'}`} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </Link>
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Add-On <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300">
              Enhance your project with additional services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-indigo-500 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{addon.name}</h3>
                  <span className="text-indigo-400 font-bold text-xl">{addon.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-6 rounded-xl bg-gray-900 border border-gray-800"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Package?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We offer custom packages tailored to your specific needs. Contact us for a personalized quote.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
