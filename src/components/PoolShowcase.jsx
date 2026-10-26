import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export default function PoolShowcase({ onOpenConsultation }) {
  const icons = [Waves, Sparkles, Shield];

  return (
    <section id="pools" className="relative py-28 sm:py-36 bg-[#073B57] text-white overflow-hidden">
      {/* Decorative architectural background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#087FA8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="w-8 h-[2px] bg-[#21B4C5]"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#21B4C5]">
              {siteConfig.featuredPool.eyebrow}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-['Manrope'] tracking-tight leading-[1.08] mb-6">
            Where Design Meets Water.
          </h2>

          <p className="text-base sm:text-lg text-[#EAF7FA]/80 font-['DM_Sans'] leading-relaxed max-w-2xl">
            {siteConfig.featuredPool.description}
          </p>
        </motion.div>

        {/* Dramatic Wide Cinematic Pool Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden mb-16 shadow-2xl border border-white/10 group"
        >
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <img
              src={siteConfig.featuredPool.image}
              alt="Cinematic swimming pool architectural design"
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />
          </div>

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#073B57]/90 via-[#073B57]/30 to-transparent pointer-events-none" />

          {/* Overlapping Floating Architectural Note */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-10 max-w-md bg-white/95 backdrop-blur-md p-6 border-l-4 border-[#087FA8] text-[#152B36] shadow-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#087FA8] block mb-1">
              Aquatic Construction Specification
            </span>
            <p className="text-xs sm:text-sm text-[#4A6370] leading-relaxed">
              Tailored skimmer, infinity edge, and overflow geometries constructed with structural concrete, multi-layer waterproofing, and premium porcelain coping.
            </p>
          </div>
        </motion.div>

        {/* 3 Visual Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {siteConfig.featuredPool.highlights.map((item, idx) => {
            const Icon = icons[idx] || Waves;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -4 }}
                className="p-8 bg-white/5 border border-white/10 hover:border-[#21B4C5]/50 hover:bg-white/10 transition-all duration-300 relative group"
              >
                <div className="w-12 h-12 mb-6 bg-[#087FA8]/40 border border-[#21B4C5]/30 flex items-center justify-center text-[#21B4C5] group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-['Manrope'] text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#EAF7FA]/75 font-['DM_Sans'] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA to Consult */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <button
            onClick={() => onOpenConsultation("Swimming Pool Construction")}
            className="inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-widest font-bold text-[#073B57] bg-white hover:bg-[#21B4C5] hover:text-white transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
          >
            <span>Consult on Your Pool Design</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
