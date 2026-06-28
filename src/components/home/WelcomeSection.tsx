import React from 'react';

export function WelcomeSection() {
  return (
    <section className="w-full bg-[#262C46] py-24 md:py-36 lg:py-48 px-6 md:px-12 xl:px-24 flex justify-center items-center">
      <div className="w-full max-w-[1500px] flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24">
        {/* Left Column: Label */}
        <div className="md:w-1/4 lg:w-1/5 pt-2 lg:pt-4 shrink-0">
          <h2 className="text-[#8489B9] text-xs md:text-sm font-bold uppercase tracking-[0.15em]">
            Welcome
          </h2>
        </div>
        
        {/* Right Column: Main Text */}
        <div className="md:w-3/4 lg:w-4/5">
          <p className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.25] font-medium text-[#787D9C] tracking-tight">
            Sydney’s original co-educational <br className="hidden lg:block" />
            college is <span className="text-[#646A97]">more than just a place to live.</span> <br className="hidden lg:block" />
            Wesley is a launchpad for life, where <br className="hidden lg:block" />
            connections become legacies.
          </p>
        </div>
      </div>
    </section>
  );
}
