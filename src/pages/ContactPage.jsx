import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  Sparkles,
  ShieldCheck,
  Building2,
  Waves
} from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export default function ContactPage({ onOpenConsultation }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Swimming Pool Construction',
    emirate: 'Dubai',
    timeline: 'Within 1-2 months',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `*New Inquiry - Diyar Alwadiya Technical Services*%0A` +
      `*Name:* ${encodeURIComponent(formData.name || 'Not provided')}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A` +
      `*Email:* ${encodeURIComponent(formData.email || 'Not provided')}%0A` +
      `*Service:* ${encodeURIComponent(formData.service)}%0A` +
      `*Location / Emirate:* ${encodeURIComponent(formData.emirate)}%0A` +
      `*Timeline:* ${encodeURIComponent(formData.timeline)}%0A` +
      `*Project Details:* ${encodeURIComponent(formData.message || 'General consultation request')}`;

    const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* 1. Header Banner */}
      <section className="relative bg-[#073B57] text-white py-20 lg:py-28 overflow-hidden">
        {/* Subtle architectural background grid */}
        <div 
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#21B4C5_1px,transparent_1px)]"
          style={{ backgroundSize: '32px 32px' }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#087FA8]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#21B4C5] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#1BAF8C] animate-pulse" />
              Direct Engineering Consultation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Manrope'] tracking-tight leading-[1.1] mb-6">
              Contact Diyar Alwadiya Technical Services.
            </h1>

            <p className="text-base sm:text-lg text-[#EAF7FA]/90 font-['DM_Sans'] leading-relaxed">
              Whether you are planning a luxury residential swimming pool, requiring specialized structural waterproofing, or initiating a commercial fit-out in the UAE, our technical specialists are ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Direct Contact Cards Grid */}
      <section className="relative -mt-10 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Official WhatsApp */}
          <div className="bg-white rounded-xl p-6 shadow-xl shadow-[#073B57]/5 border border-[#21B4C5]/30 hover:border-[#1BAF8C] transition-all group">
            <div className="w-12 h-12 rounded-lg bg-[#EAF7FA] flex items-center justify-center text-[#1BAF8C] mb-4 group-hover:scale-105 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="text-[11px] uppercase tracking-wider font-semibold text-[#087FA8] mb-1">
              Instant Messaging
            </div>
            <h3 className="font-['Manrope'] text-lg font-bold text-[#152B36] mb-1">
              WhatsApp Hotline
            </h3>
            <p className="text-xs text-[#4A6370] mb-3">
              Direct technical chat with our project managers
            </p>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent('Hello Diyar Alwadiya Technical Services, I would like to inquire about your services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1BAF8C] hover:underline"
            >
              {siteConfig.contact.displayPhone}
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white rounded-xl p-6 shadow-xl shadow-[#073B57]/5 border border-[#EAF7FA] hover:border-[#087FA8]/40 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-[#EAF7FA] flex items-center justify-center text-[#087FA8] mb-4 group-hover:scale-105 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-[11px] uppercase tracking-wider font-semibold text-[#087FA8] mb-1">
              Direct Voice Call
            </div>
            <h3 className="font-['Manrope'] text-lg font-bold text-[#152B36] mb-1">
              Technical Office
            </h3>
            <p className="text-xs text-[#4A6370] mb-3">
              Monday to Saturday: 8:00 AM – 6:00 PM
            </p>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#073B57] hover:text-[#087FA8]"
            >
              {siteConfig.contact.displayPhone}
            </a>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white rounded-xl p-6 shadow-xl shadow-[#073B57]/5 border border-[#EAF7FA] hover:border-[#087FA8]/40 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-[#EAF7FA] flex items-center justify-center text-[#073B57] mb-4 group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-[11px] uppercase tracking-wider font-semibold text-[#087FA8] mb-1">
              Formal Inquiries
            </div>
            <h3 className="font-['Manrope'] text-lg font-bold text-[#152B36] mb-1">
              Email Tender & BoQ
            </h3>
            <p className="text-xs text-[#4A6370] mb-3">
              Send structural drawings and specifications
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#073B57] hover:text-[#087FA8]"
            >
              {siteConfig.contact.email}
            </a>
          </div>

          {/* Card 4: Operating Region */}
          <div className="bg-white rounded-xl p-6 shadow-xl shadow-[#073B57]/5 border border-[#EAF7FA] hover:border-[#087FA8]/40 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-[#EAF7FA] flex items-center justify-center text-[#21B4C5] mb-4 group-hover:scale-105 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-[11px] uppercase tracking-wider font-semibold text-[#087FA8] mb-1">
              Operational Scope
            </div>
            <h3 className="font-['Manrope'] text-lg font-bold text-[#152B36] mb-1">
              United Arab Emirates
            </h3>
            <p className="text-xs text-[#4A6370] mb-3">
              Active projects in Dubai, Abu Dhabi, Sharjah & all Emirates
            </p>
            <span className="text-xs font-semibold text-[#1BAF8C]">
              3 Years UAE Experience
            </span>
          </div>
        </div>
      </section>

      {/* 3. Main Form & Value Proposition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Architectural Promise & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FA8] block mb-2">
                PROJECT CONSULTATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-['Manrope'] text-[#152B36] tracking-tight leading-tight mb-4">
                Let's Discuss Your Project Scope.
              </h2>
              <p className="text-sm text-[#4A6370] font-['DM_Sans'] leading-relaxed">
                Every project begins with a careful evaluation of site conditions, client vision, and technical feasibility. Fill out the consultation request or reach out directly via WhatsApp for immediate support.
              </p>
            </div>

            {/* Engineering Commitments */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-lg bg-[#F7FAFB] border border-[#EAF7FA]">
                <ShieldCheck className="w-5 h-5 text-[#1BAF8C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#152B36]">On-Site Technical Assessment</h4>
                  <p className="text-xs text-[#4A6370] mt-0.5">
                    Thorough examination of soil, concrete substrate, structural elevation, and utility connections.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-lg bg-[#F7FAFB] border border-[#EAF7FA]">
                <Waves className="w-5 h-5 text-[#087FA8] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#152B36]">Custom Engineering Solutions</h4>
                  <p className="text-xs text-[#4A6370] mt-0.5">
                    Tailored pool filtration, waterproofing membranes, and fit-out drawings tailored to your space.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-lg bg-[#F7FAFB] border border-[#EAF7FA]">
                <Building2 className="w-5 h-5 text-[#21B4C5] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#152B36]">Clear Specifications & BoQ</h4>
                  <p className="text-xs text-[#4A6370] mt-0.5">
                    Transparent quotation with itemized material standards, MEP equipment, and milestone timelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#073B57] to-[#087FA8] text-white">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#21B4C5] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-[#1BAF8C]" />
                Prefer Instant Chat?
              </div>
              <h3 className="font-['Manrope'] font-bold text-lg mb-2">
                Connect Directly on WhatsApp
              </h3>
              <p className="text-xs text-[#EAF7FA]/80 mb-4 leading-relaxed">
                Share photos of your site, architectural plans, or rough dimensions directly with our technical team for instant feedback.
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent('Hello Diyar Alwadiya Technical Services, I would like to consult with an engineer regarding my project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1BAF8C] hover:bg-[#169a7b] text-white text-xs uppercase font-bold tracking-wider transition-all shadow-md shadow-[#1BAF8C]/20"
              >
                <MessageCircle className="w-4 h-4" />
                Open WhatsApp (+971506875352)
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7FAFB] rounded-2xl p-6 sm:p-10 border border-[#EAF7FA] shadow-sm">
              <h3 className="text-xl font-bold font-['Manrope'] text-[#152B36] mb-1">
                Request a Detailed Technical Quote
              </h3>
              <p className="text-xs text-[#4A6370] mb-8 font-['DM_Sans']">
                Complete this form and our technical team will review your project requirements within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="bg-white rounded-xl p-8 border border-[#21B4C5]/30 text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-[#EAF7FA] text-[#1BAF8C] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#152B36] font-['Manrope']">
                      Thank You, {formData.name || 'Valued Client'}!
                    </h4>
                    <p className="text-sm text-[#4A6370] mt-2 max-w-md mx-auto">
                      Your inquiry regarding <strong className="text-[#073B57]">{formData.service}</strong> in <strong className="text-[#073B57]">{formData.emirate}</strong> has been received by our technical desk.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EAF7FA] flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#1BAF8C] hover:bg-[#169a7b] text-white text-xs uppercase font-bold tracking-wider transition-all shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Forward Details to WhatsApp
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white border border-[#CBD5E1] text-[#073B57] text-xs uppercase font-bold tracking-wider hover:bg-[#F7FAFB] transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#152B36] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Al-Mansoor"
                        className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-lg text-sm text-[#152B36] placeholder-[#94A3B8] focus:outline-none focus:border-[#087FA8] focus:ring-1 focus:ring-[#087FA8] transition-all"
                      />
                    </div>

                    {/* Phone Number / WhatsApp */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#152B36] mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 000 0000"
                        className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-lg text-sm text-[#152B36] placeholder-[#94A3B8] focus:outline-none focus:border-[#087FA8] focus:ring-1 focus:ring-[#087FA8] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#152B36] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-lg text-sm text-[#152B36] placeholder-[#94A3B8] focus:outline-none focus:border-[#087FA8] focus:ring-1 focus:ring-[#087FA8] transition-all"
                      />
                    </div>

                    {/* Location / Emirate */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#152B36] mb-1.5">
                        Project Location *
                      </label>
                      <select
                        value={formData.emirate}
                        onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-lg text-sm text-[#152B36] focus:outline-none focus:border-[#087FA8] focus:ring-1 focus:ring-[#087FA8] transition-all"
                      >
                        <option value="Dubai">Dubai</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Ajman">Ajman</option>
                        <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                        <option value="Umm Al Quwain">Umm Al Quwain</option>
                        <option value="Fujairah">Fujairah</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#152B36] mb-1.5">
                        Primary Service *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-lg text-sm text-[#152B36] focus:outline-none focus:border-[#087FA8] focus:ring-1 focus:ring-[#087FA8] transition-all"
                      >
                        <option value="Swimming Pool Construction">Swimming Pool Construction</option>
                        <option value="Waterproofing Solutions">Waterproofing Solutions</option>
                        <option value="Interior Fit-Out Works">Interior Fit-Out Works</option>
                        <option value="Villa & Commercial Renovation">Villa & Commercial Renovation</option>
                        <option value="Complete Package (Pool + Fit-Out)">Complete Package (Pool + Fit-Out)</option>
                      </select>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#152B36] mb-1.5">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-lg text-sm text-[#152B36] focus:outline-none focus:border-[#087FA8] focus:ring-1 focus:ring-[#087FA8] transition-all"
                      >
                        <option value="Immediate / Emergency">Immediate / As soon as possible</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="Within 1-3 months">Within 1–3 months</option>
                        <option value="Planning / Concept phase">Planning / Concept phase</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#152B36] mb-1.5">
                      Project Details & Approximate Dimensions
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details such as pool dimensions (e.g. 8m x 4m), property type (villa or commercial), current construction stage, or special requirements..."
                      className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-lg text-sm text-[#152B36] placeholder-[#94A3B8] focus:outline-none focus:border-[#087FA8] focus:ring-1 focus:ring-[#087FA8] transition-all resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#087FA8] hover:bg-[#073B57] text-white text-xs uppercase font-bold tracking-wider transition-all duration-300 shadow-md shadow-[#087FA8]/20"
                    >
                      <Send className="w-4 h-4" />
                      Submit Consultation Request
                    </button>
                    <button
                      type="button"
                      onClick={handleSendToWhatsApp}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#1BAF8C] hover:bg-[#169a7b] text-white text-xs uppercase font-bold tracking-wider transition-all duration-300 shadow-md shadow-[#1BAF8C]/20"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Send on WhatsApp
                    </button>
                  </div>

                  <p className="text-[11px] text-[#4A6370] text-center pt-2">
                    Privacy Assurance: Your contact details are strictly kept confidential and only used for your project quotation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions Accordion */}
      <section className="bg-[#F7FAFB] py-20 border-t border-[#EAF7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FA8] block mb-2">
              FREQUENT QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Manrope'] text-[#152B36] tracking-tight">
              Technical Inquiries & Answers
            </h2>
            <p className="text-sm text-[#4A6370] mt-3 font-['DM_Sans']">
              Clear answers regarding construction periods, waterproofing membranes, and quotation processes in the UAE.
            </p>
          </div>

          <div className="space-y-4">
            {siteConfig.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#EAF7FA] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold font-['Manrope'] text-[#152B36] pr-4">
                      {faq.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#EAF7FA] text-[#087FA8] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#087FA8] text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#4A6370] font-['DM_Sans'] leading-relaxed border-t border-[#F7FAFB]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
