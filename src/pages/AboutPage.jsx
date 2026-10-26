import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, CheckCircle2, ArrowRight, Award, Ruler, Droplets, HardHat, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import aboutVillaImg from '../assets/images/pool-construction.jpg';
import poolDetailImg from '../assets/images/verified-pool-tiles.jpg';

export default function AboutPage({ onOpenConsultation }) {
  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent('Hello Diyar Alwadiya, I would like to learn more about your technical services and company profile.')}`;

  const pillars = [
    {
      icon: Ruler,
      title: "Engineering Precision",
      desc: "Every swimming pool basin, waterproofing membrane, and architectural fit-out is calculated for structural longevity and hydraulic efficiency."
    },
    {
      icon: Droplets,
      title: "Climate-Resilient Systems",
      desc: "Engineered specifically for the UAE climate: resilient to high ambient summer heat, soil salinity, thermal expansion, and intense UV exposure."
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      desc: "Strict adherence to UAE construction codes, multi-stage hydrostatic flood testing, and certified waterproofing seal applications."
    },
    {
      icon: HardHat,
      title: "Direct Site Leadership",
      desc: "Dedicated project engineers manage day-to-day site progress, ensuring transparent client communication and timely project milestones."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Consultation & Site Evaluation",
      desc: "We analyze site topography, property boundaries, structural loads, and client design expectations."
    },
    {
      num: "02",
      title: "Architectural & MEP Engineering",
      desc: "Creation of precision hydraulic schematics, reinforcement plans, and 3D visual concepts."
    },
    {
      num: "03",
      title: "Structural Shell & Waterproofing",
      desc: "Execution of reinforced concrete casting, curing, and dual-layer elastomeric waterproofing membranes."
    },
    {
      num: "04",
      title: "Finishes, Coping & Equipment",
      desc: "Installation of porcelain mosaic tiles, natural travertine coping, variable speed pumps, and filtration."
    },
    {
      num: "05",
      title: "Testing & Client Handover",
      desc: "Comprehensive 72-hour hydrostatic testing, water chemistry balancing, and full operational handover."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Page Header Banner */}
      <section className="relative py-20 sm:py-28 bg-[#073B57] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={aboutVillaImg} alt="Diyar Alwadiya Architecture" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#073B57] via-[#073B57]/90 to-[#087FA8]/60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-bold tracking-[0.2em] uppercase text-[#21B4C5] bg-white/10 backdrop-blur-md border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1BAF8C]"></span>
              About Diyar Alwadiya
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-['Manrope'] tracking-tight leading-[1.1]">
              Built on Precision.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#21B4C5]">
                Defined by Quality.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#EAF7FA]/90 font-['DM_Sans'] leading-relaxed pt-2 max-w-2xl">
              Specialized UAE technical services delivering luxury swimming pool construction, professional waterproofing, interior fit-out, and property renovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & Overview Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FA8]">
                Company Heritage & Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B57] font-['Manrope'] tracking-tight leading-tight">
                Three Years of Construction & Engineering Excellence in the UAE
              </h2>
              <p className="text-base text-[#4A6370] font-['DM_Sans'] leading-relaxed">
                Founded with a mission to bring European-level craftsmanship and uncompromised technical integrity to the UAE, <strong>Diyar Alwadiya Technical Services</strong> has spent three years delivering turnkey projects for luxury residential villas and commercial spaces.
              </p>
              <p className="text-base text-[#4A6370] font-['DM_Sans'] leading-relaxed">
                We believe that a swimming pool is not merely a water feature; it is an architectural centerpiece that requires absolute structural engineering, flawless waterproofing, and precision hydraulic flow.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#F7FAFB] border-l-2 border-[#087FA8]">
                  <div className="text-2xl font-bold font-['Manrope'] text-[#073B57]">100%</div>
                  <div className="text-xs text-[#4A6370] mt-0.5">UAE Code Compliance</div>
                </div>
                <div className="p-4 bg-[#F7FAFB] border-l-2 border-[#1BAF8C]">
                  <div className="text-2xl font-bold font-['Manrope'] text-[#073B57]">03 Years</div>
                  <div className="text-xs text-[#4A6370] mt-0.5">Dedicated In Business</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative overflow-hidden shadow-2xl border border-[#EAF7FA]">
                <img
                  src={aboutVillaImg}
                  alt="Modern UAE villa swimming pool craftsmanship"
                  className="w-full h-[420px] object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#073B57] text-white p-6 shadow-xl max-w-xs border-l-4 border-[#21B4C5] hidden sm:block">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#21B4C5] mb-1">
                  Craftsmanship Standard
                </p>
                <p className="text-xs text-[#EAF7FA] leading-relaxed">
                  Engineered with C40 concrete, dual-coat membranes, and anti-slip stone finishes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Engineering Pillars */}
      <section className="py-20 sm:py-28 bg-[#F7FAFB] border-y border-[#EAF7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FA8]">
              Our Operating Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B57] font-['Manrope']">
              Why Clients Choose Diyar Alwadiya
            </h2>
            <p className="text-sm sm:text-base text-[#4A6370] font-['DM_Sans']">
              The technical principles that define every swimming pool, waterproofing, and renovation project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white p-8 border border-[#EAF7FA] shadow-xs hover:shadow-xl hover:border-[#21B4C5]/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#EAF7FA] text-[#087FA8] flex items-center justify-center mb-6 rounded-none">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-['Manrope'] text-[#073B57] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A6370] font-['DM_Sans'] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5-Step Execution Lifecycle */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FA8]">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B57] font-['Manrope']">
              From Concept to Commissioning
            </h2>
            <p className="text-sm sm:text-base text-[#4A6370] font-['DM_Sans']">
              A transparent, structured process designed to eliminate delays and ensure flawless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((st, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pt-6 border-t-2 border-[#087FA8]/20 hover:border-[#087FA8] transition-colors"
              >
                <div className="text-2xl font-black font-['Manrope'] text-[#087FA8] mb-2">
                  {st.num}
                </div>
                <h4 className="text-sm font-bold text-[#073B57] font-['Manrope'] mb-2">
                  {st.title}
                </h4>
                <p className="text-xs text-[#4A6370] leading-relaxed font-['DM_Sans']">
                  {st.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-[#073B57] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Manrope']">
              Ready to Discuss Your Project with Our Technical Team?
            </h3>
            <p className="text-sm text-[#EAF7FA]/80 mt-1">
              Direct hotline available on WhatsApp at {siteConfig.contact.whatsappDisplay}.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenConsultation()}
              className="px-6 py-3.5 bg-white text-[#073B57] hover:bg-[#21B4C5] hover:text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              Request a Consultation
            </button>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white transition-all shadow-md"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
