import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/siteContent';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-28 sm:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="w-8 h-[2px] bg-[#087FA8]"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#087FA8]">
              {siteConfig.whyChooseUs.eyebrow}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#073B57] font-['Manrope'] tracking-tight leading-[1.12] mb-6">
            A Commitment to Every Detail.
          </h2>

          <p className="text-base sm:text-lg text-[#4A6370] font-['DM_Sans'] leading-relaxed max-w-xl">
            {siteConfig.whyChooseUs.description}
          </p>
        </motion.div>

        {/* Sophisticated Two-Column Numbered Arrangement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 sm:gap-y-16">
          {siteConfig.whyChooseUs.points.map((point, index) => (
            <motion.div
              key={point.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -2 }}
              className="relative pt-8 border-t border-[#073B57]/15 group hover:border-[#087FA8] transition-colors duration-300"
            >
              {/* Elegant Number */}
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-3xl sm:text-4xl font-extrabold font-['Manrope'] text-[#087FA8] tracking-tight group-hover:scale-105 transition-transform">
                  {point.number}
                </span>
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#1BAF8C]">
                  Standard
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#073B57] font-['Manrope'] mb-3 group-hover:text-[#087FA8] transition-colors">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#4A6370] font-['DM_Sans'] leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
