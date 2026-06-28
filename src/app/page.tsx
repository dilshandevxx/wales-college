import { Hero } from '@/components/hero/Hero';
import { WelcomeSection } from '@/components/home/WelcomeSection';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black">
      <Hero />
      <WelcomeSection />
    </main>
  );
}
