import { Hero } from '@/components/hero/Hero';
import { StatementSection } from '@/components/home/StatementSection';
import { StatsSection } from '@/components/home/StatsSection';
import { RecentClientsSection } from '@/components/home/RecentClientsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { SuccessStoriesSection } from '@/components/home/SuccessStoriesSection';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#050505]">
      <Hero />
      <StatementSection />
      <StatsSection />
      <RecentClientsSection />
      <ServicesSection />
      <SuccessStoriesSection />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
}
