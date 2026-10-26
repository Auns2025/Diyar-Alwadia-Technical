import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PoolShowcase from '../components/PoolShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectGallery from '../components/ProjectGallery';
import ExperienceSection from '../components/ExperienceSection';
import CTASection from '../components/CTASection';

export default function HomePage({ onOpenConsultation }) {
  return (
    <>
      {/* 02: Cinematic Hero Experience */}
      <Hero onOpenConsultation={onOpenConsultation} />

      {/* 03: Introduction / Brand Statement */}
      <AboutSection />

      {/* 04: Premium Services Showcase */}
      <ServicesSection onOpenConsultation={onOpenConsultation} />

      {/* 05: Featured Swimming Pool Experience */}
      <PoolShowcase onOpenConsultation={onOpenConsultation} />

      {/* 06: Why Choose Diyar Alwadiya */}
      <WhyChooseUs />

      {/* 07: Visual Project Showcase */}
      <ProjectGallery onOpenConsultation={onOpenConsultation} />

      {/* 08: Company Experience */}
      <ExperienceSection />

      {/* 09: Premium Conversion CTA */}
      <CTASection onOpenConsultation={onOpenConsultation} />
    </>
  );
}
