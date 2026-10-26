import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

function Counter({ target, display }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView || typeof target !== 'number') return;
    let start = 0;
    const duration = 1200;
    const stepTime = 40;
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

  return (
    <span ref={ref}>
      {typeof target === 'number'
        ? count < 10
          ? `0${count}`
          : count
        : display}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#073B57_1px,transparent_1px),linear-gradient(to_bottom,#073B57_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Eyebrow + Large Architectural Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2.5">
              <span className="w-8 h-[2px] bg-[#087FA8]"></span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#087FA8]">
                {siteConfig.about.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#073B57] font-['Manrope'] tracking-tight leading-[1.15]">
              Built on Precision.
              <br />
              <span className="text-[#087FA8]">Defined by Quality.</span>
            </h2>

            <div className="pt-4 max-w-md">
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="p-6 bg-[#F7FAFB] border-l-2 border-[#1BAF8C] shadow-xs"
              >
                <p className="text-xs uppercase tracking-wider font-bold text-[#073B57] mb-1">
                  UAE Technical Excellence
                </p>
                <p className="text-xs text-[#4A6370] leading-relaxed">
                  Combining aquatic engineering craftsmanship with rigorous waterproofing and architectural finishing standards across the Emirates.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Paragraph, Metrics, CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4 text-base sm:text-lg text-[#152B36]/80 font-['DM_Sans'] leading-relaxed">
              <p>
                <strong className="text-[#073B57] font-semibold">Diyar Alwadiya Technical Services</strong> is a UAE-based company with three years of experience delivering swimming pool construction, professional waterproofing, interior fit-out, and renovation services for residential and commercial properties.
              </p>
              <p className="text-[#4A6370]">
                We approach every project with attention to detail, practical expertise, and a commitment to lasting results. Whether engineering a bespoke luxury villa pool or executing protective waterproofing systems, our team ensures every technical phase conforms to rigorous UAE building specifications.
              </p>
            </div>

            {/* Metrics Row with Animated Counters */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#EAF7FA]">
              {siteConfig.about.metrics.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#073B57] font-['Manrope']">
                    <Counter target={item.value} display={item.display} />
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-[#4A6370] font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#services"
                className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#087FA8] hover:text-[#073B57] transition-colors"
              >
                <span>{siteConfig.about.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
