'use client';
import HeroSection from '@/components/home/HeroSection';
import TrustBadges from '@/components/home/TrustBadges';
import ClientCarousel from '@/components/home/ClientCarousel';
import ScrollPortfolio from '@/components/home/ScrollPortfolio';
import TechnologySection from '@/components/home/TechnologySection';
import TechStack from '@/components/home/TechStack';
import IndustriesSlider from '@/components/home/IndustriesSlider';
import Testimonials from '@/components/home/Testimonials';
import LeadForm from '@/components/home/LeadForm';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <ClientCarousel />
      <ScrollPortfolio />
      <TechnologySection />
      <TechStack />
      <IndustriesSlider />
      <Testimonials />
      <LeadForm />
    </>
  );
}
