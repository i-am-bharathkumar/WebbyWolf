'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Rocket, Shield, Zap, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Lightning Fast Performance',
    description: 'Optimized code and cutting-edge technologies ensure your website loads in milliseconds.',
    stats: '99.9% Uptime',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security protocols protect your data and your users\' privacy.',
    stats: 'SSL Encrypted',
  },
  {
    icon: Users,
    title: 'User-Centric Design',
    description: 'Every interface is crafted with your users in mind, ensuring intuitive navigation.',
    stats: '95% User Satisfaction',
  },
  {
    icon: Trophy,
    title: 'Award-Winning Quality',
    description: 'Industry-recognized excellence in design, development, and user experience.',
    stats: '50+ Awards',
  },
];

const benefits = [
  'Responsive design that works on all devices',
  'SEO optimized for maximum visibility',
  'Advanced analytics and reporting',
  'Scalable architecture for future growth',
  'Cross-browser compatibility guaranteed',
  '24/7 monitoring and support',
];

export function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="features" ref={ref} className="py-24 bg-gradient-to-b from-blue-900 to-purple-900 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20"
          >
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white">Why Choose Us</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Built for{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            We don't just build websites—we create digital experiences that drive results and exceed expectations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Left Column - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <span className="text-sm text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
                          {feature.stats}
                        </span>
                      </div>
                      <p className="text-purple-100 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 h-fit"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Everything You Need
              </h3>
              <p className="text-purple-100 leading-relaxed">
                Our comprehensive approach ensures your project succeeds from day one.
              </p>
            </motion.div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 group"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 + 0.2, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-200" />
                  </motion.div>
                  <span className="text-purple-100 group-hover:text-white transition-colors duration-200">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 pt-8 border-t border-white/10"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-purple-200">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">5 Years</div>
                  <div className="text-sm text-purple-200">Experience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}