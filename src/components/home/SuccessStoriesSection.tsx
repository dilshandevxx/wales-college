import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const stories = [
  {
    client: 'Musi',
    headline: '$0 Ad Spend, 5M+ Reached Organically',
    hasDot: true, // Added the missing yellow dot
    description: 'With over three million 5-star reviews on iOS, Musi has rapidly become one of the top music apps. By leveraging a purely organic social media strategy, Musi reached over 5 million users on social without any paid advertising.',
    bgImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2874&auto=format&fit=crop', // orange/music vibe placeholder
    tags: [
      { label: 'content creation', color: 'bg-red-500' },
      { label: 'social management', color: 'bg-[#3b82f6]' }, // vibrant blue
      { label: 'branding & design', color: 'bg-orange-500' }
    ]
  },
  {
    client: 'illumi',
    headline: '5.87x ROAS $21M in Sales',
    hasDot: true,
    description: "From the founder of Cirque du Soleil, illumi is the world's largest multimedia show. Millions of lights, millions of visitors, and millions in sales through an industry leading digital strategy.",
    bgImage: 'https://images.unsplash.com/photo-1549666060-da08f5d02377?q=80&w=2874&auto=format&fit=crop', // blue lights placeholder
    tags: [
      { label: 'digital strategy', color: 'bg-red-500' },
      { label: 'ad campaigns', color: 'bg-green-500' },
      { label: 'content creation', color: 'bg-[#F5B82A]' }
    ]
  },
  {
    client: 'Deliverr',
    headline: '$2.1B Acquisition by Shopify',
    hasDot: true,
    description: "The largest acquisition in Shopify's history. Building the future of global logistics with an end-to-end platform that unlocks fast and easy fulfillment for millions of merchants around the world.",
    bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c808f9?q=80&w=2940&auto=format&fit=crop', // warehouse/trucks placeholder
    tags: [
      { label: 'digital strategy', color: 'bg-red-500' },
      { label: 'content creation', color: 'bg-[#F5B82A]' },
      { label: 'social management', color: 'bg-[#3b82f6]' },
      { label: 'branding & design', color: 'bg-orange-500' }
    ]
  },
  {
    client: 'GGPoker',
    headline: '44% Increase in App Installs',
    hasDot: true,
    description: "The world's biggest poker room needed a big idea to expand its reach. By partnering with celebrities like Daniel Negreanu and the right mix of relevant, click-worthy content, our campaign achieved a 44% increase in app installs.",
    bgImage: 'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?q=80&w=2960&auto=format&fit=crop', // casino/poker placeholder
    tags: [
      { label: 'digital strategy', color: 'bg-red-500' },
      { label: 'ad campaigns', color: 'bg-green-500' },
      { label: 'web design & development', color: 'bg-purple-500' },
      { label: 'content creation', color: 'bg-[#F5B82A]' },
      { label: 'branding & design', color: 'bg-orange-500' }
    ]
  },
  {
    client: 'Five Guys',
    headline: 'Sizzling Social Results',
    hasDot: true,
    description: "Five Guys' passion for food is second to none, and they never compromise on quality. It's only fitting that their digital presence matches these high standards. Since taking over, our EGC approach has delivered on highly engaging posts that resonate with their loyal fanbase.",
    bgImage: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2930&auto=format&fit=crop', // burger joint placeholder
    tags: [
      { label: 'digital strategy', color: 'bg-red-500' },
      { label: 'content creation', color: 'bg-[#F5B82A]' },
      { label: 'social management', color: 'bg-[#3b82f6]' },
      { label: 'branding & design', color: 'bg-orange-500' }
    ]
  }
];

export function SuccessStoriesSection() {
  return (
    <section className="relative w-full bg-[#050505] text-white py-[clamp(4rem,10vw,8rem)] px-[clamp(1rem,4vw,6rem)] overflow-hidden">
      <div className="max-w-[1920px] mx-auto w-full flex flex-col relative">
        
        {/* Subtle background circle decoration */}
        <div className="absolute top-0 left-0 w-[clamp(4rem,8vw,8rem)] h-[clamp(4rem,8vw,8rem)] rounded-full border border-white/10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        {/* Section Header */}
        <div className="flex justify-center items-center mb-[clamp(3rem,6vw,6rem)] pt-[clamp(2rem,4vw,4rem)] relative z-10">
          <h2 className="text-[clamp(3rem,6vw,6rem)] font-bold tracking-tighter flex items-center gap-[clamp(0.5rem,1.5vw,1.5rem)] text-white">
            Success
            <span className="flex items-center text-[clamp(1rem,2vw,2rem)] font-light text-white/50 tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">
              (
               {/* Bacardi logo mockup */}
               <div className="flex flex-col items-center mx-2 opacity-80">
                 <div className="w-4 h-4 rounded-full bg-white/20 mb-0.5" />
                 <span className="font-bold text-white text-[clamp(0.5rem,0.8vw,0.75rem)] leading-none tracking-widest uppercase">BACARDÍ</span>
               </div>
              )
            </span>
            Stories
          </h2>
        </div>

        {/* Case Studies List */}
        <div className="flex flex-col gap-[clamp(1.5rem,4vw,4rem)] relative z-10">
          {stories.map((story, idx) => (
            <div 
              key={idx} 
              className="relative w-full overflow-hidden bg-zinc-900 group"
            >
              {/* Aspect Ratio Container (scales dynamically) */}
              <div className="relative w-full h-[600px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
                
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url(${story.bgImage})` }} 
                />
                
                {/* Dark Gradient Overlay for readability (left heavy) */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent md:hidden" />
                
                {/* Card Content */}
                <div className="relative z-10 flex flex-col justify-center h-full w-full max-w-4xl p-[clamp(2rem,5vw,6rem)] pt-[clamp(4rem,8vw,10rem)]">
                  
                  {/* Decorative circle on the first card */}
                  {idx === 0 && (
                    <div className="absolute top-[clamp(2rem,4vw,4rem)] left-[clamp(2rem,5vw,6rem)] w-[clamp(3rem,5vw,4rem)] h-[clamp(3rem,5vw,4rem)] rounded-full border border-white/20 pointer-events-none" />
                  )}
                  
                  {/* Top Tag */}
                  <div className="flex items-center gap-3 mb-[clamp(1.5rem,3vw,2rem)]">
                    <div className="w-[clamp(1.5rem,3vw,2.5rem)] h-[2px] bg-[#F5B82A]" />
                    <span className="text-white text-[clamp(0.875rem,1vw,1rem)] font-medium tracking-wide">
                      {story.client}
                    </span>
                  </div>
                  
                  {/* Headline */}
                  <h3 className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold text-white leading-[1.05] tracking-tight mb-[clamp(1.5rem,3vw,2.5rem)]">
                    {story.headline}{story.hasDot && <span className="text-[#F5B82A]">.</span>}
                  </h3>
                  
                  {/* Subtext */}
                  <p className="text-gray-200 text-[clamp(0.875rem,1.1vw,1.125rem)] leading-[1.6] mb-[clamp(2rem,4vw,4rem)] max-w-2xl font-medium">
                    {story.description}
                  </p>
                  
                  {/* Bottom Tags */}
                  <div className="flex flex-wrap items-center gap-x-[clamp(1rem,2vw,2rem)] gap-y-3 mt-auto md:mt-0">
                    {story.tags.map((tag, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-[clamp(0.3rem,0.6vw,0.5rem)]">
                        <div className={`w-[clamp(0.3rem,0.5vw,0.4rem)] h-[clamp(0.3rem,0.5vw,0.4rem)] ${tag.color}`} />
                        <span className="text-white text-[clamp(0.6rem,0.75vw,0.75rem)] font-bold uppercase tracking-[0.1em] leading-none mt-0.5">
                          {tag.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="flex justify-center mt-[clamp(4rem,8vw,8rem)] w-full pb-8">
          <div className="flex flex-col group cursor-pointer w-fit">
            <div className="flex items-center gap-2 font-bold text-[clamp(0.875rem,1.1vw,1.125rem)] mb-1 text-white">
              See more
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2.5} />
            </div>
            <div className="w-full h-[1px] bg-white group-hover:bg-[#F5B82A] transition-colors duration-300" />
          </div>
        </div>

      </div>
    </section>
  );
}
