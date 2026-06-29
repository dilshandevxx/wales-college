import React from 'react';

export function StatsSection() {
  return (
    <section className="relative w-full bg-[#050505] text-white py-[clamp(4rem,10vw,8rem)] px-[clamp(1.5rem,5vw,6rem)]">
      
      {/* Subtle background circle decoration from previous section might overflow here, but we'll keep this clean */}
      
      <div className="max-w-[1920px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(3rem,5vw,5rem)] justify-items-start md:justify-items-center">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-start w-full max-w-[300px]">
            <h3 className="text-[clamp(3.5rem,6vw,5.5rem)] font-bold text-white leading-none mb-[clamp(1rem,2vw,1.5rem)] tracking-tight">
              350 +
            </h3>
            <div className="flex items-center gap-4">
              <div className="w-[clamp(2rem,3vw,3rem)] h-[2px] bg-[#F5B82A]" />
              <span className="text-white text-[clamp(1rem,1.2vw,1.25rem)] font-light tracking-wide">
                Clients
              </span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-start w-full max-w-[300px]">
            <h3 className="text-[clamp(3.5rem,6vw,5.5rem)] font-bold text-white leading-none mb-[clamp(1rem,2vw,1.5rem)] tracking-tight">
              1.2 billion
            </h3>
            <div className="flex items-center gap-4">
              <div className="w-[clamp(2rem,3vw,3rem)] h-[2px] bg-[#F5B82A]" />
              <span className="text-white text-[clamp(1rem,1.2vw,1.25rem)] font-light tracking-wide">
                Media impressions
              </span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-start w-full max-w-[300px]">
            <h3 className="text-[clamp(3.5rem,6vw,5.5rem)] font-bold text-white leading-none mb-[clamp(1rem,2vw,1.5rem)] tracking-tight">
              5* rated
            </h3>
            <div className="flex items-center gap-4">
              <div className="w-[clamp(2rem,3vw,3rem)] h-[2px] bg-[#F5B82A]" />
              <span className="text-white text-[clamp(1rem,1.2vw,1.25rem)] font-light tracking-wide">
                Based on 40+ reviews
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
