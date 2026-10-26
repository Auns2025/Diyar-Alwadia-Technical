import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, ArrowUpRight, Info, Filter, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export default function ProjectsPage({ onOpenConsultation }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Swimming Pools', 'Waterproofing', 'Fit-Out', 'Renovation'];

  const filteredItems = activeCategory === 'All'
    ? siteConfig.gallery.items
    : siteConfig.gallery.items.filter((item) => item.category === activeCategory);

  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent('Hello Diyar Alwadiya, I would like to inquire about your portfolio projects.')}`;

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Page Hero Banner */}
      <section className="relative py-20 sm:py-28 bg-[#073B57] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-bold tracking-[0.2em] uppercase text-[#21B4C5] bg-white/10 backdrop-blur-md border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1BAF8C]"></span>
              Portfolio & Design Inspiration
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-['Manrope'] tracking-tight leading-[1.1]">
              Spaces That Inspire.
            </h1>
            <p className="text-base sm:text-lg text-[#EAF7FA]/90 font-['DM_Sans'] leading-relaxed pt-2 max-w-2xl">
              Explore design possibilities, architectural finishing standards, and technical execution across swimming pools, waterproofing, interior fit-outs, and renovations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery & Filter Section */}
      <section className="py-20 sm:py-28 bg-[#F7FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Ethical Disclosure Banner */}
          <div className="mb-10 p-4 bg-white border border-[#EAF7FA] flex items-center gap-3 text-xs text-[#087FA8] shadow-xs">
            <Info className="w-4 h-4 shrink-0 text-[#087FA8]" />
            <span>{siteConfig.gallery.disclaimer}</span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#073B57] mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-[#087FA8] text-white border-[#087FA8] shadow-sm'
                    : 'bg-white text-[#152B36] border-[#EAF7FA] hover:border-[#21B4C5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id || idx}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setSelectedProject(item)}
                className="group bg-white border border-[#EAF7FA] overflow-hidden cursor-pointer shadow-xs hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#073B57]/80 via-transparent to-transparent opacity-40 group-hover:opacity-75 transition-opacity" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#073B57]">
                    {item.displayCategory || item.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold font-['Manrope'] text-[#073B57] group-hover:text-[#087FA8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4A6370] font-['DM_Sans'] leading-relaxed line-clamp-2">
                    {item.details || "Precision technical engineering and architectural finishing standard."}
                  </p>
                  <div className="pt-3 border-t border-[#EAF7FA] flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#087FA8] group-hover:text-[#073B57]">
                      View Specifications
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F7FAFB] group-hover:bg-[#087FA8] group-hover:text-white flex items-center justify-center transition-colors">
                      <Eye className="w-4 h-4 text-[#073B57] group-hover:text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Specification Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
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
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white p-2 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[65vh] object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-1.5">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#087FA8]">
                    {selectedProject.displayCategory || selectedProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#073B57] font-['Manrope']">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A6370] max-w-lg leading-relaxed">
                    {selectedProject.details || "Architectural concept & technical execution specification for UAE properties."}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <button
                    onClick={() => {
                      const title = selectedProject.title;
                      setSelectedProject(null);
                      onOpenConsultation(title);
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-bold text-white bg-[#087FA8] hover:bg-[#073B57] transition-colors"
                  >
                    <span>Inquire for Similar</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(`Hello, I saw "${selectedProject.title}" on your website and would like to inquire about similar specifications.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#073B57] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h3 className="text-3xl sm:text-4xl font-extrabold font-['Manrope']">
            Have a Specific Architectural Layout or Drawing?
          </h3>
          <p className="text-base text-[#EAF7FA]/90 max-w-xl mx-auto font-['DM_Sans']">
            Send your villa drawings or site plans to our engineering team for structural feasibility and direct cost estimation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation("Custom Architectural Blueprint")}
              className="px-8 py-4 bg-white text-[#073B57] hover:bg-[#21B4C5] hover:text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md"
            >
              Submit Project Plans
            </button>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
