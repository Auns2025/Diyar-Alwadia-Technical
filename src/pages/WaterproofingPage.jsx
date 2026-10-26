import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Flame, Droplets, CheckCircle, ArrowRight, Layers, AlertCircle, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import wpImage from '../assets/images/verified-waterproofing.jpg';
import poolBasinImg from '../assets/images/verified-pool-tiles.jpg';

export default function WaterproofingPage({ onOpenConsultation }) {
  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent('Hello Diyar Alwadiya, I would like to inquire about professional Waterproofing Solutions.')}`;

  const waterproofingSystems = [
    {
      title: "Swimming Pool Basin Waterproofing",
      desc: "Specialized flexible two-component cementitious elastomeric coatings capable of bridging structural micro-cracks and withstanding permanent hydrostatic water pressure.",
      features: ["Positive & negative side pressure resistance", "Chemical compatibility with treated pool water", "High tensile elastic elongation", "72-Hour mandatory hydrostatic flood testing"]
    },
    {
      title: "Torch-Down Bitumen Membrane Systems",
      desc: "Heavy-duty SBS modified bitumen membranes heat-welded directly to concrete substrates, forming an impenetrable barrier against underground soil moisture and hydrostatic load.",
      features: ["Torch-applied welded overlap seams", "Puncture-resistant polyester reinforcement", "Superior durability against high soil salinity", "Ideal for retaining walls, basements & podiums"]
    },
    {
      title: "Liquid Applied Polyurethane Membranes",
      desc: "Seamless cold-applied liquid polymers that cure into an elastic, joint-free rubberized membrane over complex structural geometries, rooftop terraces, and gutters.",
      features: ["100% monolithic seamless surface", "Excellent UV radiation & weather stability", "Crack-bridging up to 2mm", "Root-resistant for landscaped planter boxes"]
    },
    {
      title: "Commercial & Residential Wet Areas",
      desc: "Precision waterproofing for commercial kitchens, luxury bathrooms, mechanical MEP rooms, and commercial shop fit-outs to prevent cross-floor leaks.",
      features: ["Rapid curing formulations", "Compatible with ceramic and stone adhesives", "Corner joint sealing tapes & pipe collars", "Prevents efflorescence and structural dampness"]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Page Hero Banner */}
      <section className="relative py-20 sm:py-28 bg-[#073B57] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img src={wpImage} alt="Waterproofing application UAE" className="w-full h-full object-cover object-center" />
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
              Technical Protection Discipline
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-['Manrope'] tracking-tight leading-[1.1]">
              Professional Waterproofing Solutions in the UAE
            </h1>
            <p className="text-base sm:text-lg text-[#EAF7FA]/90 font-['DM_Sans'] leading-relaxed pt-2 max-w-2xl">
              Engineered waterproofing systems for swimming pools, foundations, basements, and commercial properties built to withstand high salinity, extreme thermal cycles, and hydrostatic pressure.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenConsultation("Waterproofing Solutions")}
                className="px-8 py-4 bg-[#087FA8] hover:bg-[#06698b] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
              >
                Request Waterproofing Inspection
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Waterproofing is Essential in UAE */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FA8]">
                Structural Integrity
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B57] font-['Manrope'] tracking-tight leading-tight">
                Defending UAE Structures Against Moisture, Heat & Salinity
              </h2>
              <p className="text-base text-[#4A6370] font-['DM_Sans'] leading-relaxed">
                In the United Arab Emirates, building foundations and swimming pool basins face some of the most aggressive environmental conditions in the world. High groundwater levels containing corrosive salts can rapidly degrade unprotected concrete and rebar.
              </p>
              <p className="text-base text-[#4A6370] font-['DM_Sans'] leading-relaxed">
                At <strong>Diyar Alwadiya Technical Services</strong>, we do not compromise on waterproofing specifications. Every layer is applied with certified primers, fiberglass joint reinforcers, and verified with rigorous 72-hour hydrostatic testing.
              </p>

              <div className="p-6 bg-[#F7FAFB] border-l-4 border-[#1BAF8C] space-y-2">
                <h4 className="text-sm font-bold font-['Manrope'] text-[#073B57]">
                  Mandatory 72-Hour Hydrostatic Flood Testing
                </h4>
                <p className="text-xs text-[#4A6370] leading-relaxed">
                  Before applying any tiles or decorative finishes, pool basins are filled with water and monitored for 72 consecutive hours using laser water level sensors to verify 100% watertight integrity.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden shadow-2xl border border-[#EAF7FA]">
                <img
                  src={wpImage}
                  alt="Contractor applying torch-down bitumen waterproofing membrane"
                  className="w-full h-[440px] object-cover object-center"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 text-xs text-[#073B57] border-l-4 border-[#087FA8] shadow-md font-semibold">
                  Live Application: Heavy-duty torch-applied bitumen membrane barrier
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Systems Grid */}
      <section className="py-20 sm:py-28 bg-[#F7FAFB] border-y border-[#EAF7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FA8]">
              Specialized Applications
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B57] font-['Manrope']">
              Complete Waterproofing Solutions
            </h2>
            <p className="text-sm sm:text-base text-[#4A6370] font-['DM_Sans']">
              Tailored membrane chemistries formulated for specific structural surfaces, hydrostatic pressures, and operational conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {waterproofingSystems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-8 border border-[#EAF7FA] shadow-xs hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-black font-['Manrope'] text-[#087FA8]/40">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold font-['Manrope'] text-[#073B57]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4A6370] font-['DM_Sans'] leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="space-y-2 pt-4 border-t border-[#EAF7FA]">
                  {item.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#073B57]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#1BAF8C] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#073B57] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h3 className="text-3xl sm:text-4xl font-extrabold font-['Manrope']">
            Protect Your Property with Certified Waterproofing
          </h3>
          <p className="text-base text-[#EAF7FA]/90 max-w-xl mx-auto font-['DM_Sans']">
            Contact Diyar Alwadiya Technical Services for a leak evaluation, pool basin waterproofing, or structural membrane application across the UAE.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation("Waterproofing Solutions")}
              className="px-8 py-4 bg-white text-[#073B57] hover:bg-[#21B4C5] hover:text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md"
            >
              Request Inspection
            </button>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Direct WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
