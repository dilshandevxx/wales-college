import { Hero } from '@/components/hero/Hero';
import { StatementSection } from '@/components/home/StatementSection';
import { StatsSection } from '@/components/home/StatsSection';
import { RecentClientsSection } from '@/components/home/RecentClientsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { SuccessStoriesSection } from '@/components/home/SuccessStoriesSection';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black">
      <Hero />
      <StatementSection />
      <StatsSection />
      <RecentClientsSection />
      <ServicesSection />
      <SuccessStoriesSection />
    </main>
  );
}
