import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export default function ConsultationModal({ isOpen, onClose, initialService = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: initialService || "Swimming Pool Construction",
    emirate: "Dubai",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Target WhatsApp Number
  const targetWhatsappNumber = "971506875352";

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Dynamic WhatsApp Message Generator
  const generateWaUrl = () => {
    const textMessage = `Hello Diyar Alwadiya, I would like to consult regarding your services.

📌 *Inquiry Details:*
• *Name:* ${formData.name || 'N/A'}
• *Phone:* ${formData.phone || 'N/A'}
• *Email:* ${formData.email || 'N/A'}
• *Emirate:* ${formData.emirate || 'N/A'}
• *Service:* ${formData.service || 'N/A'}
• *Message/Details:* ${formData.message || 'None'}`;

    return `https://wa.me/${targetWhatsappNumber}?text=${encodeURIComponent(textMessage)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Automatically open WhatsApp in new tab with form data
    const waLink = generateWaUrl();
    window.open(waLink, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#073B57]/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white rounded-none border border-[#EAF7FA] shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header Accent Line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#087FA8] via-[#21B4C5] to-[#1BAF8C]" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 text-[#152B36]/60 hover:text-[#073B57] p-2 transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8 sm:p-10">
            {submitted ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#EAF7FA] flex items-center justify-center text-[#1BAF8C]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-widest text-[#087FA8] uppercase">
                    Inquiry Received
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#073B57] font-['Manrope']">
                    Thank You for Your Consultation Request
                  </h3>
                  <p className="text-[#4A6370] text-sm max-w-md mx-auto leading-relaxed">
                    Our technical engineering team will review your specifications and contact you shortly on WhatsApp.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#EAF7FA] flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#4A6370]">
                  <a
                    href={generateWaUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#25D366]" /> WhatsApp: +{targetWhatsappNumber}
                  </a>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#087FA8]" /> {siteConfig.contact.email}
                  </span>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#073B57] hover:bg-[#087FA8] transition-colors"
                  >
                    Return to Website
                  </button>
                  <a
                    href={generateWaUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Re-open WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 text-[11px] font-semibold tracking-widest uppercase text-[#087FA8] bg-[#EAF7FA] mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1BAF8C]"></span>
                    UAE Technical Services
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#073B57] font-['Manrope'] tracking-tight">
                    Request a Technical Consultation
                  </h3>
                  <p className="text-[#4A6370] text-sm mt-1">
                    Connect directly with our engineering specialists for swimming pools, waterproofing, fit-out, or renovation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#152B36] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rashid Al Nuaimi"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F7FAFB] border border-[#EAF7FA] rounded-none focus:outline-none focus:border-[#087FA8] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#152B36] mb-1.5">
                        Contact Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971506875352"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F7FAFB] border border-[#EAF7FA] rounded-none focus:outline-none focus:border-[#087FA8] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#152B36] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@domain.ae"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F7FAFB] border border-[#EAF7FA] rounded-none focus:outline-none focus:border-[#087FA8] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#152B36] mb-1.5">
                        Emirate / Location
                      </label>
                      <select
                        value={formData.emirate}
                        onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F7FAFB] border border-[#EAF7FA] rounded-none focus:outline-none focus:border-[#087FA8] transition-colors"
                      >
                        <option value="Dubai">Dubai</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Ajman">Ajman</option>
                        <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                        <option value="Other UAE">Other UAE Location</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#152B36] mb-1.5">
                      Service Requirement *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F7FAFB] border border-[#EAF7FA] rounded-none focus:outline-none focus:border-[#087FA8] transition-colors"
                    >
                      <option value="Swimming Pool Construction">Swimming Pool Construction (Custom Villa / Residential)</option>
                      <option value="Waterproofing Solutions">Waterproofing Solutions (Pool Basin / Structural)</option>
                      <option value="Interior Fit-Out Works">Interior Fit-Out Works (Commercial Shop / Residential)</option>
                      <option value="Villa & Commercial Renovation">Villa & Commercial Renovation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#152B36] mb-1.5">
                      Project Details / Dimensions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your property type, approximate dimensions, or design requirements..."
                      className="w-full px-3.5 py-2 text-sm bg-[#F7FAFB] border border-[#EAF7FA] rounded-none focus:outline-none focus:border-[#087FA8] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#087FA8] hover:bg-[#073B57] transition-all duration-300 shadow-sm"
                    >
                      Submit Consultation Request
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="mt-3 flex items-center justify-center gap-3 text-xs text-[#4A6370]">
                      <span>Prefer WhatsApp?</span>
                      <a
                        href={generateWaUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#25D366] font-bold hover:underline"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                        <span>Chat on +{targetWhatsappNumber}</span>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}