import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LogoBanner } from './LogoBanner';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] text-white flex flex-col font-sans overflow-hidden">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder collage/lifestyle image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.5] mix-blend-luminosity"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop")' }} 
        />
        {/* Paper texture overlay effect (simulated with gradient/noise) */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-40 mix-blend-multiply" />
        
        {/* Gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />
      </div>

      {/* Header Navigation */}
      <header className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-center justify-between px-6 py-8 md:px-12 xl:px-16 2xl:px-24">
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
          <div className="text-2xl font-black italic tracking-tighter text-white">
            func.media
          </div>
          <div className="hidden md:block w-[1px] h-8 bg-white/30" />
          <p className="text-xs text-gray-200 max-w-[160px] leading-snug font-semibold">
            Hyper-relevant marketing<br />for today's customers.
          </p>
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-sm font-bold mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300 transition-colors">Work</a>
          <a href="#" className="flex items-center gap-1 hover:text-gray-300 transition-colors group">
            Expertise 
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" strokeWidth={2.5} />
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-gray-300 transition-colors group">
            Explore 
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" strokeWidth={2.5} />
          </a>
          <a href="#" className="flex items-center gap-1 text-white hover:text-gray-200 transition-colors">
            Get a Proposal 
            <ArrowUpRight className="w-4 h-4 text-[#F5B82A]" strokeWidth={2.5} />
          </a>
        </nav>
      </header>

      {/* Main Hero Content */}
      <main className="relative z-10 flex-grow flex flex-col justify-center px-6 md:px-12 xl:px-16 2xl:px-24 w-full">
        <div className="max-w-5xl space-y-6 md:space-y-8">
          
          {/* Entrepreneur Quote Badge */}
          <div className="flex items-center gap-4">
            <span className="text-5xl md:text-6xl font-serif leading-none font-bold text-white mt-2">“</span>
            <div className="w-12 h-[2px] bg-[#F5B82A]" />
            <span className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-white">Entrepreneur</span>
          </div>

          {/* Large Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold leading-[1.05] tracking-tight text-white">
            a leader in the digital<br className="hidden lg:block" />
            marketing movement<span className="text-[#F5B82A]">.</span>
          </h1>
        </div>

        {/* Floating Right Side Slider Dots */}
        <div className="hidden md:flex absolute right-6 md:right-12 xl:right-16 top-1/2 -translate-y-1/2 flex-col gap-3">
          <button className="w-2.5 h-2.5 bg-white/40 hover:bg-white/70 transition-colors" aria-label="Slide 1" />
          <button className="w-2.5 h-2.5 bg-white/40 hover:bg-white/70 transition-colors" aria-label="Slide 2" />
          <button className="w-2.5 h-2.5 bg-[#F5B82A]" aria-label="Active slide 3" />
        </div>
      </main>

      {/* Logos Ticker Section */}
      <LogoBanner />
    </section>
  );
}
