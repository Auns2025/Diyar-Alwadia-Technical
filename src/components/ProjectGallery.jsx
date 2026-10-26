import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Eye, Info } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export default function ProjectGallery({ onOpenConsultation }) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="gallery" className="relative py-28 sm:py-36 bg-[#F7FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
                {siteConfig.gallery.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#073B57] font-['Manrope'] tracking-tight leading-[1.12]">
              Spaces That Inspire.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 max-w-sm space-y-2">
            <p className="text-sm sm:text-base text-[#4A6370] font-['DM_Sans']">
              {siteConfig.gallery.supportingText}
            </p>
            {/* Strict ethical disclosure per instructions */}
            <div className="inline-flex items-center gap-1.5 text-[11px] text-[#087FA8] font-medium bg-[#EAF7FA] px-2.5 py-1">
              <Info className="w-3.5 h-3.5" />
              <span>{siteConfig.gallery.disclaimer}</span>
            </div>
          </div>
        </motion.div>

        {/* Asymmetrical Gallery Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {siteConfig.gallery.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${item.span} group relative overflow-hidden bg-white border border-[#EAF7FA] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500`}
              onClick={() => setActiveImage(item)}
            >
              <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#073B57]/80 via-[#073B57]/20 to-transparent opacity-40 group-hover:opacity-75 transition-opacity duration-300" />
              </div>

              {/* Caption Overlay */}
              <div className="p-6 flex items-center justify-between bg-white border-t border-[#EAF7FA]">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#087FA8] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#073B57] font-['Manrope'] group-hover:text-[#087FA8] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#F7FAFB] group-hover:bg-[#087FA8] group-hover:text-white flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4 shadow-xs">
                  <Eye className="w-4 h-4 text-[#073B57] group-hover:text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Consultation Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-white border border-[#EAF7FA] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-[#073B57] font-['Manrope']">
              Have an Architectural Drawing or Custom Pool Layout?
            </h4>
            <p className="text-xs sm:text-sm text-[#4A6370]">
              Our engineering team evaluates structural loads, waterproofing parameters, and MEP requirements.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation("Custom Project Inquiry")}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-bold text-white bg-[#087FA8] hover:bg-[#073B57] transition-colors flex-shrink-0 shadow-sm hover:shadow-md"
          >
            <span>Discuss Your Space</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 bg-[#073B57]/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-white shadow-2xl overflow-hidden z-10 my-8"
            >
              <button
                onClick={() => setActiveImage(null)}
                aria-label="Close image"
                className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white p-2 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activeImage.image}
                  alt={activeImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-[#087FA8]">
                    {activeImage.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#073B57] font-['Manrope']">
                    {activeImage.title}
                  </h3>
                  <p className="text-xs text-[#4A6370] mt-1">
                    Design concept & technical inspiration for UAE residential and commercial properties.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setActiveImage(null);
                    onOpenConsultation(activeImage.title);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-bold text-white bg-[#087FA8] hover:bg-[#073B57] transition-colors flex-shrink-0"
                >
                  <span>Inquire for Similar Design</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
