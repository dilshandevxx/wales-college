import React from 'react';
import { ChevronDown } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="relative w-full bg-[#050505] text-white py-[clamp(4rem,10vw,8rem)] px-[clamp(1.5rem,5vw,6rem)] flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-4xl mx-auto flex flex-col">
        
        {/* Header */}
        <div className="text-center mb-[clamp(3rem,6vw,5rem)]">
          <h2 className="text-[clamp(3.5rem,6vw,5.5rem)] font-bold leading-[1.1] tracking-tight mb-[clamp(0.5rem,1vw,1rem)]">
            Let's start a<br />conversation<span className="text-[#F5B82A]">.</span>
          </h2>
          <a href="mailto:hello@func.media" className="text-[#F5B82A] font-bold text-[clamp(1rem,1.2vw,1.125rem)] tracking-wide hover:underline">
            hello@func.media
          </a>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(1rem,2vw,1.5rem)]">
             <div className="flex flex-col gap-2">
               <label className="text-xs md:text-sm font-bold ml-1">Name*</label>
               <input type="text" placeholder="..." className="bg-[#111111] border border-white/5 rounded-md p-4 text-white focus:outline-none focus:border-white/20 transition-colors" />
             </div>
             <div className="flex flex-col gap-2">
               <label className="text-xs md:text-sm font-bold ml-1">Company Name*</label>
               <input type="text" placeholder="..." className="bg-[#111111] border border-white/5 rounded-md p-4 text-white focus:outline-none focus:border-white/20 transition-colors" />
             </div>
             <div className="flex flex-col gap-2">
               <label className="text-xs md:text-sm font-bold ml-1">Company Email*</label>
               <input type="email" placeholder="..." className="bg-[#111111] border border-white/5 rounded-md p-4 text-white focus:outline-none focus:border-white/20 transition-colors" />
             </div>
             <div className="flex flex-col gap-2">
               <label className="text-xs md:text-sm font-bold ml-1">Phone*</label>
               <input type="tel" placeholder="..." className="bg-[#111111] border border-white/5 rounded-md p-4 text-white focus:outline-none focus:border-white/20 transition-colors" />
             </div>
             
             {/* Selects */}
             <div className="flex flex-col gap-2 relative">
               <label className="text-xs md:text-sm font-bold ml-1">I'm looking for*</label>
               <select className="bg-[#111111] border border-white/5 rounded-md p-4 text-white appearance-none focus:outline-none focus:border-white/20 transition-colors font-medium">
                 <option>Select</option>
                 <option>Digital Strategy</option>
                 <option>Branding</option>
                 <option>Web Design</option>
               </select>
               <div className="absolute right-4 top-[40px] md:top-[44px] pointer-events-none">
                 <ChevronDown className="w-5 h-5 text-white" />
               </div>
             </div>
             <div className="flex flex-col gap-2 relative">
               <label className="text-xs md:text-sm font-bold ml-1">I heard about func. from*</label>
               <select className="bg-[#111111] border border-white/5 rounded-md p-4 text-white appearance-none focus:outline-none focus:border-white/20 transition-colors font-medium">
                 <option>Google</option>
                 <option>Social Media</option>
                 <option>Referral</option>
               </select>
               <div className="absolute right-4 top-[40px] md:top-[44px] pointer-events-none">
                 <ChevronDown className="w-5 h-5 text-white" />
               </div>
             </div>
             
             <div className="flex flex-col gap-2 relative md:col-span-2">
               <label className="text-xs md:text-sm font-bold ml-1">My budget range is*</label>
               <select className="bg-[#111111] border border-white/5 rounded-md p-4 text-white appearance-none focus:outline-none focus:border-white/20 transition-colors font-medium">
                 <option>Less Than $25K</option>
                 <option>$25K - $50K</option>
                 <option>$50K+</option>
               </select>
               <div className="absolute right-4 top-[40px] md:top-[44px] pointer-events-none">
                 <ChevronDown className="w-5 h-5 text-white" />
               </div>
             </div>
             
             <div className="flex flex-col gap-2 md:col-span-2">
               <label className="text-xs md:text-sm font-bold ml-1">Project Details*</label>
               <textarea rows={5} placeholder="Let us know more about what you're looking for" className="bg-[#111111] border border-white/5 rounded-md p-4 text-white focus:outline-none focus:border-white/20 transition-colors resize-y font-medium text-sm" />
             </div>
          </div>
          
          <button type="submit" className="mt-8 w-full md:w-[clamp(12rem,15vw,16rem)] mx-auto bg-[#F5B82A] text-white font-bold text-sm py-4 rounded-sm hover:bg-[#F5B82A]/90 transition-colors">
            Send
          </button>
        </form>

      </div>
    </section>
  );
}
