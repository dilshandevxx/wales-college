import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-white pt-24 pb-[clamp(2rem,4vw,4rem)] px-[clamp(1.5rem,5vw,6rem)] overflow-hidden">
      <div className="max-w-[1920px] mx-auto w-full flex flex-col relative">
        
        {/* Circle decoration */}
        <div className="absolute top-0 left-0 w-[clamp(4rem,8vw,8rem)] h-[clamp(4rem,8vw,8rem)] rounded-full border border-white/10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        {/* Top Border */}
        <div className="w-full h-[1px] bg-white/20 mb-16" />
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24">
          
          {/* Col 1 - Subscribe */}
          <div className="lg:col-span-2 flex flex-col pr-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-4 h-4 bg-white/10 flex items-center justify-center text-[8px] font-bold">f.</div>
              <span className="font-black text-lg tracking-tighter italic">func.media</span>
            </div>
            <h3 className="text-[clamp(1.5rem,2vw,1.75rem)] font-bold mb-8 leading-tight">
              Get our latest industry<br className="hidden md:block" />
              trends & insights into<br className="hidden md:block" />
              digital marketing.
            </h3>
            <div className="flex flex-col w-full max-w-sm">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="bg-transparent border-b border-white/30 py-3 text-white placeholder-gray-500 font-medium text-sm focus:outline-none focus:border-white mb-4 transition-colors"
              />
              <button className="flex items-center gap-2 font-bold text-sm w-fit group">
                Subscribe 
                <ArrowUpRight className="w-4 h-4 text-[#F5B82A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={3} />
              </button>
            </div>
          </div>
          
          {/* Col 2 - Expertise */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-xl mb-2">Expertise</h4>
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Digital Strategy</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Branding & Design</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Web Design & Development</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Content Creation</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Social Media Management</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Ad Campaigns</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">PR & Press</a>
          </div>
          
          {/* Col 3 - Explore */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-xl mb-2">Explore</h4>
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Our Work</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Success Stories</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Our Clients</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Latest News</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Industry Trends</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Career Opportunities</a>
          </div>
          
          {/* Col 4 - Connect */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-xl mb-2">Connect</h4>
            <a href="mailto:hello@func.media" className="text-[#F5B82A] font-bold text-sm transition-colors mb-2">hello@func.media</a>
            <a href="tel:18883882284" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">1.888.388.2284</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors mt-2">Contact Us</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Instagram</a>
          </div>
        </div>
        
        {/* Giant Text */}
        <div className="w-full mb-12 flex justify-start">
          <h1 className="text-[clamp(4rem,10vw,12rem)] font-bold tracking-tighter leading-none text-white whitespace-nowrap">
            Get in contact
          </h1>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-gray-400 font-medium">
          <span>© 2026 func.media inc. | all rights reserved</span>
          <span>60 Atlantic Ave, Toronto, ON, M6K 1X9</span>
        </div>

      </div>
    </footer>
  );
}
