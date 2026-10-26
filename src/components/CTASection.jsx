import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export default function CTASection({ onOpenConsultation }) {
  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent('Hello Diyar Alwadiya Technical Services, I would like to discuss a project.')}`;

  return (
    <section id="contact" className="relative py-32 sm:py-44 bg-[#073B57] text-white overflow-hidden">
      {/* Background Overhead Blue Pool Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.cta.backgroundImage}
          alt="Luxury blue swimming pool water texture"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle overlay for pristine readability */}
        <div className="absolute inset-0 bg-[#073B57]/85 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-bold tracking-[0.2em] uppercase text-[#21B4C5] bg-white/10 backdrop-blur-md mb-6 border border-white/10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#1BAF8C]"></span>
          Start Your Technical Project
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-['Manrope'] tracking-tight leading-[1.1] mb-6"
        >
          Your Vision.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#21B4C5]">
            Our Expertise.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-[#EAF7FA] font-['DM_Sans'] leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {siteConfig.cta.description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={() => onOpenConsultation()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-widest font-bold text-[#073B57] bg-white hover:bg-[#21B4C5] hover:text-white transition-all duration-300 shadow-xl"
          >
            <span>{siteConfig.cta.primaryBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs uppercase tracking-widest font-bold text-white bg-[#25D366]/90 hover:bg-[#25D366] transition-all duration-300 shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp Us Now</span>
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-widest font-bold text-white bg-transparent hover:bg-white/10 border border-white/30 transition-all duration-300"
          >
            <span>{siteConfig.cta.secondaryBtn}</span>
          </a>
        </motion.div>

        {/* Direct Technical Inquiry Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-white/15 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-xs text-[#EAF7FA]/80"
        >
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
          </a>
          <a
            href={`tel:${siteConfig.contact.whatsappNumber}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-[#21B4C5]" />
            <span>Direct: {siteConfig.contact.phoneDisplay}</span>
          </a>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#21B4C5]" />
            <span>{siteConfig.contact.email}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
