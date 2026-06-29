import React from 'react';

export function TestimonialSection() {
  return (
    <section className="relative w-full bg-[#050505] text-white py-[clamp(4rem,10vw,8rem)] px-[clamp(1.5rem,5vw,6rem)] overflow-hidden">
      <div className="max-w-[1920px] mx-auto w-full flex flex-col relative">
        
        {/* Circle decoration */}
        <div className="absolute top-0 left-0 w-[clamp(4rem,8vw,8rem)] h-[clamp(4rem,8vw,8rem)] rounded-full border border-white/10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[clamp(1.5rem,3vw,2.5rem)] h-[2px] bg-[#F5B82A]" />
              <span className="text-white text-[clamp(0.875rem,1.1vw,1rem)] font-medium tracking-wide">
                Trusted all over the world
              </span>
            </div>
            <h2 className="text-[clamp(3.5rem,6vw,6rem)] font-bold tracking-tight leading-none">
              Their words, not ours<span className="text-[#F5B82A]">.</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-6 pb-2">
            <button className="text-white/60 hover:text-white transition-colors flex items-center">
              <span className="text-3xl font-light leading-none">←</span>
            </button>
            <button className="text-white/60 hover:text-white transition-colors flex items-center">
              <span className="text-3xl font-light leading-none">→</span>
            </button>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 lg:gap-32 items-start mt-8">
          
          {/* Left: Author Info */}
          <div className="flex flex-col w-full md:w-1/4 shrink-0 relative">
            {/* Vertical divider line */}
            <div className="hidden md:block absolute -right-6 lg:-right-16 top-0 bottom-0 w-[1px] bg-white/20" />
            
            <div className="w-40 h-40 bg-[#0B121A] rounded-xl flex flex-col items-center justify-center mb-6 border border-white/5 shadow-lg">
               {/* Deliverr logo placeholder */}
               <svg viewBox="0 0 24 24" className="w-16 h-16 text-white mb-1" fill="currentColor">
                 <path d="M4 8h16l-4 6h-8L4 8z" />
                 <path d="M9 16h6l-1.5 3h-3L9 16z" />
               </svg>
               <span className="font-bold text-xl tracking-tighter">Deliverr</span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-bold text-white text-[clamp(1rem,1.2vw,1.125rem)]">Nabeel S.</span>
              <span className="text-white text-sm font-medium mt-1">Head of Growth Marketing</span>
            </div>
          </div>

          {/* Right: Quote */}
          <div className="flex flex-col w-full md:w-3/4 max-w-4xl">
            <span className="text-[#F5B82A] text-[clamp(4rem,6vw,6rem)] font-serif leading-none mb-4 -ml-2">“</span>
            <h3 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold text-white leading-[1.2] tracking-tight mb-[clamp(1.5rem,3vw,2rem)]">
              They were like the linchpin of our marketing efforts. Other agencies couldn't provide us with that level of detail and care.
            </h3>
            <p className="text-gray-300 text-[clamp(0.875rem,1vw,1rem)] leading-[1.8] font-medium">
              We chose them because of their previous experience; they'd worked with top-level brands before. Our team also liked their understanding of our market. Their resources delivered tasks in under a week; other agencies couldn't provide us with that level of detail and care. If we wanted them to create an asset, they did it within a week's time.
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
}
