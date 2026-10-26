import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Waves, Sparkles, Check, ArrowRight, Shield, Layers, Droplets, Wrench, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import poolHeroImg from '../assets/images/pool-residential-modern.jpg';
import infinityImg from '../assets/images/verified-infinity-pool.jpg';
import tilesImg from '../assets/images/verified-pool-tiles.jpg';
import cinematicPoolImg from '../assets/images/cinematic-wide-pool.jpg';

export default function SwimmingPoolsPage({ onOpenConsultation }) {
  const [activePoolType, setActivePoolType] = useState('infinity');
  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent('Hello Diyar Alwadiya, I would like to inquire about Swimming Pool Construction for my villa.')}`;

  const poolTypes = [
    {
      id: 'infinity',
      title: 'Luxury Villa Infinity Pools',
      subtitle: 'Seamless Vanishing Edge Architecture',
      desc: 'Engineered with a precision overflow weir where water cascades over an invisible edge into a catch basin, creating a breathtaking horizon reflection.',
      image: infinityImg,
      features: ['Dual-basin catch & surge system', 'Reinforced structural retaining wall', 'Silent perimeter overflow hydraulics', 'Integrated underwater LED strip accents']
    },
    {
      id: 'skimmer',
      title: 'Custom Residential Skimmer Pools',
      subtitle: 'Timeless Villa Outdoor Living',
      desc: 'The gold standard for residential UAE villas. Clean, durable, and highly efficient skimmer systems integrated with tanning shelves and baja shelves.',
      image: poolHeroImg,
      features: ['Wide-mouth heavy duty skimmers', 'Baja ledge & shallow tanning shelf', 'Travertine or porcelain coping', 'Variable speed energy-saving pumps']
    },
    {
      id: 'overflow',
      title: 'Deck-Level / Overflow Pools',
      subtitle: 'Mirror-Smooth Water Reflections',
      desc: 'The water surface sits precisely flush with the surrounding pool deck stone. Concealed channels continually recycle water through high-capacity balance tanks.',
      image: cinematicPoolImg,
      features: ['Flush deck-level stone grating', 'Underground balance surge tank', 'Ultra-fast surface debris clearance', 'Architectural stone integration']
    }
  ];

  const techSpecs = [
    {
      icon: Shield,
      title: "Reinforced Concrete Shell",
      detail: "Constructed using high-strength C40 structural concrete with dual-layer steel reinforcement rebars engineered for UAE soil conditions."
    },
    {
      icon: Layers,
      title: "Dual-Layer Waterproofing",
      detail: "Multi-coat elastomeric cementitious membrane with fiberglass mesh reinforcement, followed by a mandatory 72-hour hydrostatic leak test."
    },
    {
      icon: Droplets,
      title: "Smart Filtration & MEP",
      detail: "Commercial-grade sand filters with micro-glass media, variable speed whisper pumps, automated salt chlorinators, and smart phone automation."
    },
    {
      icon: Wrench,
      title: "Premium Coping & Finishes",
      detail: "Frost and heat-resistant glass-crystal mosaic tiles, anti-slip coping stone (Travertine / Granite / Porcelain), and custom underwater steps."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Page Hero Banner */}
      <section className="relative py-20 sm:py-28 bg-[#073B57] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={poolHeroImg} alt="Swimming Pool Construction UAE" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#073B57]/95 via-[#073B57]/80 to-[#087FA8]/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-bold tracking-[0.2em] uppercase text-[#21B4C5] bg-white/10 backdrop-blur-md border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1BAF8C]"></span>
              Primary Technical Discipline
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-['Manrope'] tracking-tight leading-[1.1]">
              Bespoke Swimming Pool Construction in the UAE
            </h1>
            <p className="text-base sm:text-lg text-[#EAF7FA]/90 font-['DM_Sans'] leading-relaxed pt-2 max-w-2xl">
              Turnkey aquatic architecture: from engineering structural calculations and municipality approvals to precision concrete casting and luxury mosaic finishes.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenConsultation("Swimming Pool Construction")}
                className="px-8 py-4 bg-[#087FA8] hover:bg-[#06698b] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
              >
                Request Pool Consultation
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Hotline</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pool Types Showcase */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FA8]">
              Aquatic Typologies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B57] font-['Manrope']">
              Engineered for UAE Luxury Living
            </h2>
            <p className="text-sm sm:text-base text-[#4A6370] font-['DM_Sans']">
              Whether you envision an expansive villa infinity pool or an intimate plunge pool, we construct each project with tailored hydraulics and enduring materials.
            </p>
          </div>

          {/* Interactive Pool Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Tabs Left */}
            <div className="lg:col-span-5 space-y-3">
              {poolTypes.map((type) => {
                const isSelected = activePoolType === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setActivePoolType(type.id)}
                    className={`w-full text-left p-6 transition-all duration-300 border ${
                      isSelected
                        ? 'bg-[#EAF7FA] border-[#087FA8] shadow-sm'
                        : 'bg-[#F7FAFB] border-[#EAF7FA] hover:border-[#21B4C5]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`text-lg font-bold font-['Manrope'] ${isSelected ? 'text-[#087FA8]' : 'text-[#073B57]'}`}>
                        {type.title}
                      </h3>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-[#087FA8]' : 'text-gray-400'}`} />
                    </div>
                    <p className="text-xs text-[#4A6370]">{type.subtitle}</p>
                  </button>
                );
              })}
            </div>

            {/* Display Right */}
            <div className="lg:col-span-7">
              {poolTypes.map((type) => {
                if (type.id !== activePoolType) return null;
                return (
                  <motion.div
                    key={type.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-[#F7FAFB] border border-[#EAF7FA] overflow-hidden"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={type.image} alt={type.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8 space-y-4">
                      <h4 className="text-2xl font-bold font-['Manrope'] text-[#073B57]">
                        {type.title}
                      </h4>
                      <p className="text-sm text-[#4A6370] font-['DM_Sans'] leading-relaxed">
                        {type.desc}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {type.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#073B57] font-medium">
                            <Check className="w-4 h-4 text-[#1BAF8C] shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-[#EAF7FA]">
                        <button
                          onClick={() => onOpenConsultation(`Swimming Pool: ${type.title}`)}
                          className="px-6 py-3 bg-[#073B57] hover:bg-[#087FA8] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                        >
                          Inquire for {type.title}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Breakdown */}
      <section className="py-20 sm:py-28 bg-[#073B57] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#21B4C5]">
              Engineering Discipline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Manrope']">
              Constructed to Outperform UAE Climate Demands
            </h2>
            <p className="text-sm sm:text-base text-[#EAF7FA]/80 font-['DM_Sans']">
              No shortcuts. Every pool features structural concrete, certified waterproofing barriers, and energy-efficient hydraulic circulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techSpecs.map((spec, idx) => {
              const Icon = spec.icon;
              return (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 space-y-4 hover:border-[#21B4C5]/50 transition-colors">
                  <div className="w-12 h-12 bg-[#087FA8]/30 border border-[#21B4C5]/30 flex items-center justify-center text-[#21B4C5]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-['Manrope'] text-white">
                    {spec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#EAF7FA]/75 font-['DM_Sans'] leading-relaxed">
                    {spec.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pool Basin Tiling Showcase */}
      <section className="py-20 sm:py-28 bg-[#F7FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FA8]">
                Finishing Craftsmanship
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B57] font-['Manrope'] tracking-tight">
                Crystal Mosaics & Natural Travertine Coping
              </h2>
              <p className="text-base text-[#4A6370] font-['DM_Sans'] leading-relaxed">
                Water color is determined by precision mosaic selection. We supply and install imported glass mosaics, anti-fungal epoxy grouts, and calibrated natural stone coping edges that remain comfortable under direct summer sunlight.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EAF7FA] flex items-center justify-center text-[#087FA8] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-[#152B36]">Chemical-resistant glass mosaic tiles in shades of Aegean Blue & Turquoise</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EAF7FA] flex items-center justify-center text-[#087FA8] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-[#152B36]">Precision bullnose and drop-face natural travertine coping stones</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EAF7FA] flex items-center justify-center text-[#087FA8] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-[#152B36]">Submersible multi-color LED aquatic lighting with smartphone controls</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden shadow-xl border border-[#EAF7FA]">
                <img src={tilesImg} alt="Crystal clear pool basin mosaic tiles" className="w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Quote Callout */}
      <section className="py-16 bg-[#087FA8] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h3 className="text-3xl sm:text-4xl font-extrabold font-['Manrope']">
            Start Your Swimming Pool Construction Project
          </h3>
          <p className="text-base text-[#EAF7FA] max-w-xl mx-auto">
            Contact Diyar Alwadiya Technical Services for an engineering feasibility review, 3D concept layout, and itemized quotation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation("Swimming Pool Construction")}
              className="px-8 py-4 bg-white text-[#073B57] hover:bg-[#21B4C5] hover:text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md"
            >
              Request Free Consultation
            </button>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
