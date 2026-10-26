import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteConfig } from '../data/siteContent';

function AnimatedNumber({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const stepTime = 50;
    const steps = duration / stepTime;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count < 10 ? `0${count}` : count}</span>;
}

export default function ExperienceSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#087FA8] text-white overflow-hidden">
      {/* Subtle architectural background line graphics */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="arch-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arch-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Visual Number 03 with count-up animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start sm:items-center lg:items-start"
          >
            <div className="flex items-baseline gap-4">
              <span className="text-8xl sm:text-9xl lg:text-[11rem] font-extrabold font-['Manrope'] tracking-tighter text-white leading-none drop-shadow-md">
                <AnimatedNumber target={3} />
              </span>
            </div>
            <div className="mt-2 pl-2 border-l-2 border-[#21B4C5]">
              <span className="text-sm sm:text-base font-bold uppercase tracking-[0.25em] text-[#EAF7FA]">
                {siteConfig.experience.label}
              </span>
              <p className="text-xs text-[#EAF7FA]/80 mt-1">
                United Arab Emirates
              </p>
            </div>
          </motion.div>

          {/* Heading & Statement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Manrope'] tracking-tight leading-[1.15]">
              Experience That Shapes Better Spaces.
            </h2>

            <p className="text-base sm:text-lg text-[#EAF7FA] font-['DM_Sans'] leading-relaxed max-w-xl">
              {siteConfig.experience.description}
            </p>

            <div className="pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {siteConfig.experience.values.map((v, i) => (
                <div key={i} className="space-y-1.5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white font-['Manrope']">
                    {v.title}
                  </h3>
                  <p className="text-xs text-[#EAF7FA]/80 leading-relaxed font-['DM_Sans']">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
