import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export default function ServicesSection({ onOpenConsultation }) {
  return (
    <section id="services" className="relative py-28 sm:py-36 bg-[#F7FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-[#073B57]/10"
        >
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-8 h-[2px] bg-[#087FA8]"></span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#087FA8]">
                OUR EXPERTISE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#073B57] font-['Manrope'] tracking-tight leading-[1.12]">
              Specialized Services.
              <br />
              <span className="text-[#087FA8]">Exceptional Execution.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#4A6370] font-['DM_Sans'] max-w-sm">
            Comprehensive technical solutions for beautiful, functional, and enduring spaces.
          </p>
        </motion.div>

        {/* Asymmetrical Editorial Services Layout */}
        <div className="space-y-12 sm:space-y-16">
          {siteConfig.services.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white border border-[#EAF7FA] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#21B4C5]/40"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-7 relative overflow-hidden min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#073B57]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Floating Service Badge */}
                    <div className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-[#073B57] uppercase tracking-wider shadow-sm">
                      UAE Technical Standards
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      {/* Service Number & Eyebrow */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-3xl sm:text-4xl font-extrabold text-[#087FA8]/30 group-hover:text-[#087FA8] font-['Manrope'] transition-colors duration-300">
                          {service.number}
                        </span>
                        <span className="text-[11px] uppercase tracking-widest font-semibold text-[#1BAF8C] bg-[#EAF7FA] px-2.5 py-1">
                          Core Discipline
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#073B57] font-['Manrope'] mb-2 group-hover:text-[#087FA8] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs uppercase tracking-wider font-semibold text-[#087FA8] mb-4">
                        {service.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#4A6370] font-['DM_Sans'] leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Capability Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {service.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs bg-[#F7FAFB] text-[#152B36] border border-[#EAF7FA] font-medium transition-colors hover:border-[#21B4C5]"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#21B4C5]" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Link */}
                    <div className="pt-4 border-t border-[#EAF7FA] flex items-center justify-between">
                      <button
                        onClick={() => onOpenConsultation(service.title)}
                        className="group/btn inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#073B57] hover:text-[#087FA8] transition-colors"
                      >
                        <span>Inquire About {service.title}</span>
                        <div className="w-8 h-8 rounded-full bg-[#EAF7FA] group-hover/btn:bg-[#087FA8] group-hover/btn:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
