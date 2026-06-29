import React from 'react';
import { ArrowRight } from 'lucide-react';

export function RecentClientsSection() {
  const logos = [
    { name: 'FIVE GUYS', row: 1 },
    { name: 'LAMBORGHINI', row: 1 },
    { name: 'DQ', row: 1 },
    { name: 'Wayne Gretzky', row: 2 },
    { name: 'illumi', row: 2 },
    { name: 'No Boats', row: 2 },
    { name: 'Deliverr', row: 2 },
    { name: 'Heartbeat', row: 2 },
    { name: 'Golf Town', row: 2 },
    { name: 'VINFAST', row: 2 },
    { name: 'SWISS CHALET', row: 3 },
    { name: 'OXY', row: 3 },
    { name: 'GG POKER', row: 3 },
    { name: 'CR Reports', row: 3 },
    { name: 'TOYOTA', row: 3 },
    { name: 'OLAY', row: 3 },
  ];

  return (
    <section className="relative w-full bg-[#050505] text-white py-[clamp(4rem,8vw,8rem)] px-[clamp(1rem,4vw,6rem)] overflow-hidden">
      <div className="max-w-[1920px] mx-auto w-full border-t border-l border-white/20">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 w-full">
          
          {/* Header Block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 border-r border-b border-white/20 flex flex-col justify-center p-[clamp(2rem,4vw,4rem)]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-[clamp(2rem,3vw,3rem)] h-[2px] bg-[#F5B82A]" />
              <span className="text-white text-[clamp(1rem,1.2vw,1.25rem)] font-light tracking-wide">
                Some of our
              </span>
            </div>
            <h2 className="text-[clamp(3.5rem,6vw,6rem)] font-bold text-white leading-[1.05] tracking-tight">
              Recent clients<span className="text-[#F5B82A]">.</span>
            </h2>
          </div>

          {/* Render Logo Placeholders */}
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="col-span-1 h-[clamp(8rem,12vw,12rem)] border-r border-b border-white/20 flex items-center justify-center p-6 opacity-70 hover:opacity-100 transition-opacity duration-300 group cursor-pointer"
            >
              {/* Text-based approximation of the logos to maintain the visual layout */}
              <span className="font-bold text-lg md:text-xl lg:text-2xl text-center uppercase tracking-tighter text-white group-hover:scale-105 transition-transform duration-300">
                {logo.name}
              </span>
            </div>
          ))}

          {/* View More Clients Block */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 h-[clamp(8rem,12vw,12rem)] border-r border-b border-white/20 bg-white text-black flex items-center p-6 cursor-pointer hover:bg-gray-100 transition-colors duration-300 group">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-[clamp(1rem,1.2vw,1.125rem)] leading-tight">
                view more<br />clients
              </span>
              <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
