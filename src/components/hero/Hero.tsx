import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LogoBanner } from './LogoBanner';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] text-white flex flex-col font-sans overflow-hidden">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.5] mix-blend-luminosity"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop")' }} 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-40 mix-blend-multiply" />
        
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />
      </div>

      {/* Header Navigation */}
      <header className="relative z-10 w-full max-w-[1920px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-[clamp(1.5rem,5vw,6rem)] py-[clamp(1.5rem,3vw,3rem)]">
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
          <div className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-black italic tracking-tighter text-white leading-none">
            func.media
          </div>
          <div className="hidden md:block w-[1px] h-[clamp(1.5rem,3vw,2.5rem)] bg-white/30" />
          <p className="text-[clamp(0.65rem,1vw,0.85rem)] text-gray-200 max-w-[clamp(120px,15vw,180px)] leading-snug font-semibold">
            Hyper-relevant marketing<br />for today's customers.
          </p>
        </div>

        <nav className="hidden lg:flex items-center gap-[clamp(1.5rem,3vw,3rem)] text-[clamp(0.8rem,1.1vw,1rem)] font-bold mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300 transition-colors">Work</a>
          <a href="#" className="flex items-center gap-1 hover:text-gray-300 transition-colors group">
            Expertise 
            <ArrowUpRight className="w-[1.2em] h-[1.2em] text-gray-400 group-hover:text-white transition-colors" strokeWidth={2.5} />
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-gray-300 transition-colors group">
            Explore 
            <ArrowUpRight className="w-[1.2em] h-[1.2em] text-gray-400 group-hover:text-white transition-colors" strokeWidth={2.5} />
          </a>
          <a href="#" className="flex items-center gap-1 text-white hover:text-gray-200 transition-colors">
            Get a Proposal 
            <ArrowUpRight className="w-[1.2em] h-[1.2em] text-[#F5B82A]" strokeWidth={2.5} />
          </a>
        </nav>
      </header>

      {/* Main Hero Content */}
      <main className="relative z-10 flex-grow flex flex-col justify-center w-full max-w-[1920px] mx-auto px-[clamp(1.5rem,5vw,6rem)]">
        <div className="w-full space-y-[clamp(1rem,2.5vw,2.5rem)]">
          
          {/* Entrepreneur Quote Badge */}
          <div className="flex items-center gap-[clamp(0.5rem,1.5vw,1.5rem)]">
            <span className="text-[clamp(2.5rem,5vw,4.5rem)] font-serif leading-none font-bold text-white mt-1">“</span>
            <div className="w-[clamp(1.5rem,4vw,3.5rem)] h-[2px] bg-[#F5B82A]" />
            <span className="text-[clamp(1.75rem,3.5vw,3.5rem)] font-serif font-bold tracking-tight text-white">Entrepreneur</span>
          </div>

          {/* Large Headline - scales smoothly using clamp */}
          <h1 className="text-[clamp(3rem,8vw,8.5rem)] font-bold leading-[1.05] tracking-tight text-white max-w-[90vw]">
            a leader in the digital<br className="hidden md:block" />
            marketing movement<span className="text-[#F5B82A]">.</span>
          </h1>
        </div>

        {/* Floating Right Side Slider Dots */}
        <div className="hidden md:flex absolute right-[clamp(1.5rem,5vw,4rem)] top-1/2 -translate-y-1/2 flex-col gap-[clamp(0.5rem,1vw,1rem)]">
          <button className="w-[clamp(0.5rem,0.8vw,0.75rem)] h-[clamp(0.5rem,0.8vw,0.75rem)] bg-white/40 hover:bg-white/70 transition-colors" aria-label="Slide 1" />
          <button className="w-[clamp(0.5rem,0.8vw,0.75rem)] h-[clamp(0.5rem,0.8vw,0.75rem)] bg-white/40 hover:bg-white/70 transition-colors" aria-label="Slide 2" />
          <button className="w-[clamp(0.5rem,0.8vw,0.75rem)] h-[clamp(0.5rem,0.8vw,0.75rem)] bg-[#F5B82A]" aria-label="Active slide 3" />
        </div>
      </main>

      {/* Logos Ticker Section */}
      <LogoBanner />
    </section>
  );
}
