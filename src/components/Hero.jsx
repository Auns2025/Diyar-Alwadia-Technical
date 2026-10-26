import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ShieldCheck, Droplets, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export default function Hero({ onOpenConsultation }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#073B57]"
    >
      {/* Full-bleed Architectural Hero Image with subtle scale animation */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src={siteConfig.hero.backgroundImage}
          alt="Luxury modern UAE villa with turquoise swimming pool and travertine deck"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Controlled gradient overlay: heavy on left for pristine readability, transparent on right to showcase pool & villa */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#073B57]/95 via-[#073B57]/70 to-[#073B57]/20 sm:to-transparent" />
        {/* Subtle bottom vignette to blend naturally into next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#073B57]/50 to-transparent" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-36 lg:py-44 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-left"
        >
          {/* Eyebrow Label */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-bold tracking-[0.2em] uppercase text-white bg-[#087FA8]/80 backdrop-blur-md border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1BAF8C]"></span>
              {siteConfig.hero.eyebrow}
            </span>
          </motion.div>

          {/* Main Architectural Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white font-['Manrope'] tracking-tight leading-[1.08] mb-6 drop-shadow-sm"
          >
            Exceptional Pools.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#21B4C5]">
              Expertly Built Spaces.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-[#EAF7FA] font-['DM_Sans'] font-normal leading-relaxed mb-10 max-w-xl text-balance drop-shadow"
          >
            {siteConfig.hero.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-widest font-bold text-white bg-[#087FA8] hover:bg-[#06698b] border border-[#21B4C5]/40 transition-all duration-300 shadow-lg hover:shadow-[#087FA8]/30"
            >
              <span>{siteConfig.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-widest font-bold text-white bg-white/10 hover:bg-white hover:text-[#073B57] backdrop-blur-md border border-white/30 transition-all duration-300 shadow-sm"
            >
              <span>{siteConfig.hero.secondaryCta}</span>
            </button>
          </motion.div>

          {/* Restrained Architectural Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-14 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 max-w-lg"
          >
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-['Manrope']">03</div>
              <div className="text-[11px] uppercase tracking-wider text-[#21B4C5] font-semibold">
                Years in UAE
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-['Manrope']">04</div>
              <div className="text-[11px] uppercase tracking-wider text-[#21B4C5] font-semibold">
                Specialized Disciplines
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-['Manrope']">UAE</div>
              <div className="text-[11px] uppercase tracking-wider text-[#21B4C5] font-semibold">
                Operational Reach
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/70 font-semibold">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#21B4C5]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
