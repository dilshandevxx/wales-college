import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const services = [
  {
    num: "01",
    title: "Digital Strategy",
    tags: ["GTM Strategy", "Growth Strategy", "Content Strategy", "Brand Strategy"]
  },
  {
    num: "02",
    title: "Branding & Design",
    tags: ["Visual Identity", "App UI/UX", "Packaging & Displays", "Promo Materials"]
  },
  {
    num: "03",
    title: "Marketing Campaigns",
    tags: ["Hyper-Targeted Ads", "Influencers", "Email & SMS", "Guerrilla & OOH"]
  },
  {
    num: "04",
    title: "Content Creation",
    tags: ["Ads", "Graphics", "Animations", "UGC & Influencers", "Photo & Video"]
  },
  {
    num: "05",
    title: "Social Media Management",
    tags: ["Content & Scheduling", "Community Engagement", "Ambassadors", "Partnerships"]
  },
  {
    num: "06",
    title: "Web Design & Development",
    tags: ["B2B & B2C", "eCommerce", "Landing Pages", "Upkeep & Maintenance"]
  },
  {
    num: "07",
    title: "PR & Press",
    tags: ["Media Relations", "Press Releases", "Endorsements", "Thought Leadership"]
  }
];

export function ServicesSection() {
  return (
    <section className="relative w-full bg-[#050505] text-white py-[clamp(4rem,10vw,10rem)] px-[clamp(1.5rem,5vw,6rem)]">
      <div className="max-w-[1920px] mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Left Column - Sticky */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 flex flex-col">
           {/* Circle decoration */}
           <div className="w-[clamp(3rem,5vw,5rem)] h-[clamp(3rem,5vw,5rem)] rounded-full border border-white/10 mb-[clamp(1.5rem,3vw,3rem)] shrink-0" />
           
           <h2 className="text-[clamp(3rem,5vw,4.5rem)] font-bold leading-none tracking-tight mb-[clamp(2rem,4vw,4rem)]">
             What we do<span className="text-[#F5B82A]">.</span>
           </h2>
           
           <div className="flex flex-col w-fit group cursor-pointer">
             <div className="flex items-center gap-2 font-bold text-[clamp(0.75rem,1vw,1rem)] mb-2 uppercase tracking-wide">
               View Success Stories
               <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" strokeWidth={3} />
             </div>
             <div className="w-full h-[2px] bg-white group-hover:bg-[#F5B82A] transition-colors duration-300" />
           </div>
        </div>

        {/* Right Column - Services List */}
        <div className="lg:w-2/3 flex flex-col w-full border-t border-white/10 mt-12 lg:mt-0">
          {services.map((service, idx) => (
            <div 
              key={service.num}
              className="flex flex-row py-[clamp(2rem,4vw,3rem)] border-b border-white/10 group cursor-pointer"
            >
              {/* Number and Separator Block */}
              <div className="flex items-start gap-[clamp(1rem,3vw,2rem)] w-[clamp(5rem,15vw,8rem)] shrink-0">
                <span className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tighter leading-none mt-1">
                  {service.num}
                </span>
                {/* Vertical accent line - Yellow on hover or if it's item 3 & 4 (to match the screenshot specifically) */}
                <div className={`w-[2px] h-[clamp(1.5rem,3vw,2.5rem)] mt-2 transition-colors duration-300 ${idx === 2 || idx === 3 ? 'bg-[#F5B82A]' : 'bg-white/10 group-hover:bg-[#F5B82A]'}`} />
              </div>
              
              {/* Content block */}
              <div className="flex flex-col gap-[clamp(1rem,2vw,1.5rem)] w-full">
                <h3 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold tracking-tight leading-none">
                  {service.title}
                </h3>
                
                <div className="flex flex-wrap gap-[clamp(0.25rem,0.5vw,0.5rem)]">
                  {service.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-[clamp(0.5rem,1vw,1rem)] py-[clamp(0.25rem,0.5vw,0.5rem)] rounded-full bg-[#1A1A1A] text-gray-300 font-medium text-[clamp(0.6rem,0.8vw,0.75rem)] tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="px-[clamp(0.5rem,1vw,1rem)] py-[clamp(0.25rem,0.5vw,0.5rem)] rounded-full bg-white text-black font-bold text-[clamp(0.6rem,0.8vw,0.75rem)] flex items-center tracking-wide">
                    + more
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
