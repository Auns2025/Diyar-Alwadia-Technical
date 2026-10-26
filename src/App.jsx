import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import WhatsAppWidget from './components/WhatsAppWidget';
import ScrollToTop from './components/ScrollToTop';

// 6 Core Architectural Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SwimmingPoolsPage from './pages/SwimmingPoolsPage';
import WaterproofingPage from './pages/WaterproofingPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenConsultation = (serviceName = '') => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setModalOpen(false);
    setSelectedService('');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-[#152B36] selection:bg-[#21B4C5]/20 selection:text-[#073B57] flex flex-col justify-between">
        {/* 01: Multi-Page Sticky Navigation */}
        <Navbar onOpenConsultation={handleOpenConsultation} />

        {/* Dynamic Route View */}
        <main className="flex-grow">
          <Routes>
            {/* Page 1: Homepage */}
            <Route path="/" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />

            {/* Page 2: About Us */}
            <Route path="/about" element={<AboutPage onOpenConsultation={handleOpenConsultation} />} />

            {/* Page 3: Swimming Pool Construction */}
            <Route path="/swimming-pools" element={<SwimmingPoolsPage onOpenConsultation={handleOpenConsultation} />} />

            {/* Page 4: Professional Waterproofing Solutions */}
            <Route path="/waterproofing" element={<WaterproofingPage onOpenConsultation={handleOpenConsultation} />} />

            {/* Page 5: Projects & Portfolio */}
            <Route path="/projects" element={<ProjectsPage onOpenConsultation={handleOpenConsultation} />} />

            {/* Page 6: Contact & Technical Consultation */}
            <Route path="/contact" element={<ContactPage onOpenConsultation={handleOpenConsultation} />} />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* 07: Global Luxury Footer */}
        <Footer onOpenConsultation={handleOpenConsultation} />

        {/* Interactive Consultation Modal */}
        <ConsultationModal
          isOpen={modalOpen}
          onClose={handleCloseConsultation}
          initialService={selectedService}
        />

        {/* Dedicated Interactive WhatsApp Floating Widget (+92 302 2825777) */}
        <WhatsAppWidget />
      </div>
    </Router>
  );
}
