import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import logoImg from '../assets/logo-transparent-removebg-preview.png';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Swimming Pools', href: '/swimming-pools' },
    { name: 'Waterproofing', href: '/waterproofing' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  // If not on Home page, always show solid background for optimal legibility
  const showSolidNav = isScrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        showSolidNav
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#EAF7FA] py-3.5'
          : 'bg-gradient-to-b from-[#073B57]/80 via-[#073B57]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Official Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Diyar Alwadiya Homepage"
          >
            <div
              className={`transition-all duration-300 p-1.5 rounded-sm ${
                showSolidNav
                  ? 'bg-transparent'
                  : 'bg-white/95 backdrop-blur-md shadow-sm border border-white/20'
              }`}
            >
              <img
                src={logoImg}
                alt="Diyar Alwadiya Technical Services"
                className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div
              className={`hidden xl:flex flex-col text-[10px] uppercase tracking-wider font-medium transition-colors ${
                showSolidNav ? 'text-[#4A6370]' : 'text-white/80'
              }`}
            >
              <span className="font-semibold text-[#087FA8]">Technical Services</span>
              <span>United Arab Emirates</span>
            </div>
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-3.5 py-2 text-xs uppercase tracking-wider font-semibold transition-colors duration-200 ${
                    showSolidNav
                      ? isActive
                        ? 'text-[#087FA8]'
                        : 'text-[#152B36] hover:text-[#087FA8]'
                      : isActive
                      ? 'text-[#21B4C5]'
                      : 'text-white hover:text-[#21B4C5]'
                  }`}
                >
                  {link.name}
                  {/* Subtle underline active indicator */}
                  <span
                    className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] transition-all duration-300 ${
                      isActive
                        ? showSolidNav
                          ? 'bg-[#087FA8] opacity-100'
                          : 'bg-[#21B4C5] opacity-100'
                        : 'bg-transparent opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenConsultation()}
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-bold transition-all duration-300 ${
                showSolidNav
                  ? 'bg-[#087FA8] text-white hover:bg-[#073B57] shadow-sm'
                  : 'bg-white text-[#073B57] hover:bg-[#21B4C5] hover:text-white shadow-md'
              }`}
            >
              <span>Get a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className={`lg:hidden p-2 rounded-sm transition-colors focus:outline-none ${
              showSolidNav
                ? 'text-[#152B36] hover:bg-[#F7FAFB]'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`lg:hidden fixed inset-0 top-[60px] z-50 bg-[#073B57]/95 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col justify-between px-6 py-8 max-w-sm mx-auto">
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#21B4C5]">
                Navigation Menu
              </span>
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-['Manrope'] font-semibold transition-colors py-1 flex items-center justify-between ${
                    location.pathname === link.href ? 'text-[#21B4C5]' : 'text-white hover:text-[#21B4C5]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-white/40" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-widest font-bold text-[#073B57] bg-white hover:bg-[#21B4C5] hover:text-white transition-colors"
            >
              <span>Get a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-center text-[11px] text-white/60">
              UAE Technical Services • 3 Years of Quality Execution
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
