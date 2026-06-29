import { Hero } from '@/components/hero/Hero';
import { StatementSection } from '@/components/home/StatementSection';
import { StatsSection } from '@/components/home/StatsSection';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black">
      <Hero />
      <StatementSection />
      <StatsSection />
    </main>
  );
}
