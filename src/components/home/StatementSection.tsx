import React from 'react';

export function StatementSection() {
  return (
    <section className="relative w-full bg-[#050505] text-white py-[clamp(6rem,15vw,12rem)] flex flex-col items-center justify-center px-[clamp(1.5rem,5vw,6rem)] overflow-hidden">
      
      {/* Subtle background circle decoration */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[clamp(10rem,20vw,24rem)] h-[clamp(10rem,20vw,24rem)] rounded-full border border-white/10 pointer-events-none" />

      <div className="flex flex-col items-center text-center z-10 max-w-[1920px] mx-auto w-full">
        {/* Subtitle */}
        <span className="text-[#F5B82A] text-[clamp(0.875rem,1.2vw,1.125rem)] font-medium mb-[clamp(1.5rem,3vw,3rem)]">
          Since 2017
        </span>
        
        {/* Main Statement - Fluid Typography */}
        <h2 className="text-[clamp(2.5rem,5.5vw,6.5rem)] font-bold leading-[1.05] tracking-tight text-white max-w-[90vw]">
          We help ambitious companies<br className="hidden md:block" />
          execute hyper-relevant<br className="hidden md:block" />
          marketing strategies for<br className="hidden md:block" />
          today's customers<span className="text-[#F5B82A]">.</span>
        </h2>
      </div>
      
    </section>
  );
}
