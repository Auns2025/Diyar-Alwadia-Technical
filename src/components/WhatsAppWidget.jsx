import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, CheckCheck } from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import logoImg from '../assets/logo-transparent.png';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Swimming Pool Construction');
  const [customNote, setCustomNote] = useState('');

  const phone = siteConfig.contact.whatsappNumber; // 923022825777
  const displayPhone = siteConfig.contact.whatsappDisplay; // +92 302 2825777

  const quickTopics = [
    { label: '🏊 Swimming Pool Construction', text: 'Hello, I would like to inquire about Swimming Pool Construction for my property.' },
    { label: '🛡️ Waterproofing Solutions', text: 'Hello, I need professional Waterproofing Solutions for a pool/building.' },
    { label: '🏢 Interior Fit-Out Works', text: 'Hello, I would like to discuss Interior Fit-Out Works.' },
    { label: '🏡 Villa & Commercial Renovation', text: 'Hello, I am interested in Villa / Commercial Renovation.' },
  ];

  const handleStartChat = () => {
    let msg = `Hello Diyar Alwadiya Technical Services, I would like to inquire about: ${selectedService}.`;
    if (customNote.trim()) {
      msg += ` Details: ${customNote.trim()}`;
    }
    const encoded = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${phone}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* WhatsApp Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="mb-4 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-2xl border border-[#EAF7FA] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#073B57] via-[#087FA8] to-[#1BAF8C] p-4 text-white relative">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close WhatsApp chat"
                className="absolute top-3.5 right-3.5 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-lg p-1.5 flex items-center justify-center shadow-md">
                  <img src={logoImg} alt="Diyar Alwadiya" className="w-full h-auto object-contain" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-['Manrope'] tracking-tight">
                    Diyar Alwadiya Support
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#EAF7FA]">
                    <span className="w-2 h-2 rounded-full bg-[#1BAF8C] animate-pulse"></span>
                    <span>Online • {displayPhone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#F7FAFB] space-y-3.5 max-h-[380px] overflow-y-auto">
              {/* Agent Bubble */}
              <div className="bg-white p-3.5 rounded-2xl rounded-tl-none border border-[#EAF7FA] shadow-sm space-y-2">
                <p className="text-xs text-[#152B36] leading-relaxed">
                  Welcome to <strong>Diyar Alwadiya Technical Services</strong>. 👋
                </p>
                <p className="text-xs text-[#4A6370] leading-relaxed">
                  How can our technical team assist your swimming pool, waterproofing, or renovation project today?
                </p>
                <div className="flex items-center justify-end gap-1 text-[10px] text-[#4A6370]">
                  <span>Just now</span>
                  <CheckCheck className="w-3.5 h-3.5 text-[#1BAF8C]" />
                </div>
              </div>

              {/* Quick Topic Chips */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A6370] block">
                  Select Your Project Type:
                </span>
                <div className="flex flex-col gap-1.5">
                  {quickTopics.map((topic, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedService(topic.label.replace(/^[^\s]+\s/, ''))}
                      className={`text-left text-xs px-3 py-2 rounded-lg transition-all duration-200 border ${
                        selectedService === topic.label.replace(/^[^\s]+\s/, '')
                          ? 'bg-[#EAF7FA] text-[#087FA8] border-[#087FA8] font-bold shadow-xs'
                          : 'bg-white text-[#152B36] border-[#EAF7FA] hover:border-[#21B4C5] font-medium'
                      }`}
                    >
                      {topic.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Note */}
              <div>
                <input
                  type="text"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="Additional message / location..."
                  className="w-full px-3 py-2 text-xs bg-white border border-[#EAF7FA] rounded-lg focus:outline-none focus:border-[#087FA8]"
                />
              </div>

              {/* Action Button */}
              <button
                onClick={handleStartChat}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
                <Send className="w-3.5 h-3.5 ml-1" />
              </button>

              <div className="text-center text-[10px] text-[#4A6370]">
                Direct WhatsApp Hotline: <span className="font-semibold text-[#073B57]">{displayPhone}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button with Ping Effect */}
      <div className="relative group">
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3 z-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
          </span>
        )}

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open WhatsApp conversation"
          className="flex items-center gap-2.5 px-4 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="hidden sm:inline text-xs font-bold font-['Manrope'] tracking-wide">
            {isOpen ? 'Close Chat' : 'WhatsApp Us'}
          </span>
        </motion.button>
      </div>
    </div>
  );
}
