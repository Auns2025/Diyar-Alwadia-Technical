import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import logoImg from '../assets/logo-transparent.png';

export default function Footer({ onOpenConsultation }) {
  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent('Hello Diyar Alwadiya Technical Services, I would like to inquire about your services.')}`;

  return (
    <footer className="bg-[#073B57] border-t border-white/10 text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Description */}
          <div className="lg:col-span-5 space-y-6">
            {/* Official Logo on pristine white badge */}
            <div className="inline-block bg-white p-2 rounded-sm shadow-sm">
              <img
                src={logoImg}
                alt="Diyar Alwadiya Technical Services"
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-[#EAF7FA]/80 font-['DM_Sans'] leading-relaxed max-w-sm">
              {siteConfig.footer.companyDescription}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#21B4C5] font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#1BAF8C]" />
              <span>3 Years of UAE Construction & Engineering Experience</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#21B4C5]">
              Pages
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link to="/" className="text-[#EAF7FA]/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#EAF7FA]/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/swimming-pools" className="text-[#EAF7FA]/80 hover:text-white transition-colors">
                  Swimming Pools
                </Link>
              </li>
              <li>
                <Link to="/waterproofing" className="text-[#EAF7FA]/80 hover:text-white transition-colors">
                  Waterproofing
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-[#EAF7FA]/80 hover:text-white transition-colors">
                  Projects & Inspiration
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#EAF7FA]/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#21B4C5]">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link
                  to="/swimming-pools"
                  className="text-left text-[#EAF7FA]/80 hover:text-[#21B4C5] transition-colors block"
                >
                  Swimming Pool Construction
                </Link>
              </li>
              <li>
                <Link
                  to="/waterproofing"
                  className="text-left text-[#EAF7FA]/80 hover:text-[#21B4C5] transition-colors block"
                >
                  Waterproofing Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-left text-[#EAF7FA]/80 hover:text-[#21B4C5] transition-colors block"
                >
                  Interior Fit-Out Works
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-left text-[#EAF7FA]/80 hover:text-[#21B4C5] transition-colors block"
                >
                  Villa & Commercial Renovation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details with WhatsApp */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#21B4C5]">
              Contact & Inquiries
            </h4>
            <ul className="space-y-3 text-xs text-[#EAF7FA]/80 font-['DM_Sans']">
              <li>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#25D366] hover:text-white transition-colors font-semibold"
                >
                  <MessageCircle className="w-4 h-4 fill-[#25D366] shrink-0" />
                  <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.whatsappNumber}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#21B4C5] shrink-0" />
                  <span>Phone: {siteConfig.contact.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#21B4C5] shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#21B4C5] shrink-0 mt-0.5" />
                <span>United Arab Emirates</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => onOpenConsultation()}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#21B4C5] hover:text-white transition-colors"
              >
                <span>Request a Project Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAF7FA]/60">
          <p>{siteConfig.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <span>UAE Technical License Compliance</span>
            <span>•</span>
            <span>Standardized Engineering Quality</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
