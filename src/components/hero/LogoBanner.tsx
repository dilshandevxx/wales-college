import React from 'react';

export function LogoBanner() {
  return (
    <div className="relative z-10 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 mt-auto flex-shrink-0">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 w-full divide-x divide-y md:divide-y-0 divide-white/10">
        
        {/* 1. Forbes 30 Under 30 */}
        <div className="h-20 md:h-24 flex flex-col items-center justify-center p-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
          <span className="font-serif italic text-[10px] text-white">Forbes</span>
          <span className="font-black text-3xl leading-none text-white tracking-tighter">30</span>
          <span className="text-[7px] text-red-500 font-bold uppercase tracking-widest mt-0.5">Under 30</span>
        </div>
        
        {/* 2. NBC */}
        <div className="h-20 md:h-24 flex items-center justify-center p-4 opacity-70 hover:opacity-100 transition-opacity duration-300 gap-2">
          {/* NBC colorful placeholder icon */}
          <div className="flex -space-x-1">
            <div className="w-3 h-4 rounded-full bg-yellow-500 transform -rotate-12" />
            <div className="w-3 h-5 rounded-full bg-red-500 z-10" />
            <div className="w-3 h-4 rounded-full bg-blue-500 transform rotate-12" />
          </div>
          <span className="font-bold text-2xl tracking-tighter text-white">NBC</span>
        </div>
        
        {/* 3. Entrepreneur */}
        <div className="h-20 md:h-24 flex items-center justify-center p-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
          <span className="font-serif font-bold text-xl tracking-tight text-white">Entrepreneur</span>
        </div>
        
        {/* 4. THE GLOBE AND MAIL */}
        <div className="h-20 md:h-24 flex flex-col items-center justify-center p-3 opacity-70 hover:opacity-100 transition-opacity duration-300 text-center gap-1">
          <div className="flex gap-1 items-center">
             <div className="bg-[#E81123] text-white font-serif font-bold text-[9px] leading-tight px-1 py-1 w-16 text-left">
                THE GLOBE AND MAIL*
             </div>
             <div className="flex flex-col text-left">
               <span className="text-white font-bold text-[10px] uppercase">Report on Business</span>
               <span className="text-gray-400 text-[6px] uppercase tracking-wider">Canada's Top Growing Companies</span>
             </div>
          </div>
        </div>
        
        {/* 5. FAST COMPANY */}
        <div className="h-20 md:h-24 flex items-center justify-center p-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
          <span className="font-bold text-lg tracking-tighter italic text-white">FAST COMPANY</span>
        </div>
        
        {/* 6. Bloomberg */}
        <div className="h-20 md:h-24 flex items-center justify-center p-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
          <span className="font-bold text-xl tracking-tighter text-white">Bloomberg</span>
        </div>
        
        {/* 7. BUSINESS INSIDER */}
        <div className="h-20 md:h-24 flex flex-col items-center justify-center p-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
          <span className="font-bold text-lg leading-tight tracking-tighter uppercase text-white">Business</span>
          <span className="font-bold text-lg leading-tight tracking-tighter uppercase text-white">Insider</span>
        </div>

      </div>
    </div>
  );
}
