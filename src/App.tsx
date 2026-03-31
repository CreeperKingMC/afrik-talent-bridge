/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Target,
  Info,
  ExternalLink
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-brand-bg/80 backdrop-blur-md border-b border-brand-primary/5">
      <div className="flex items-center gap-2">
        <img 
          src="https://lh3.googleusercontent.com/d/1VNLzjnK3AbM0-d6KTX5FTyAsmp_mKnEf" 
          alt="Afrik Talant Bridge Logo" 
          className="w-12 h-12 object-contain"
          onError={(e) => {
            // Fallback if image is not found
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement?.insertAdjacentHTML('afterbegin', '<div class="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-serif text-lg font-bold">A</div>');
          }}
        />
        <span className="font-serif text-lg font-bold tracking-tight">Afrik Talant Bridge</span>
      </div>
      <a 
        href="#donate" 
        className="px-5 py-2 bg-brand-primary text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-brand-accent transition-all shadow-sm"
      >
        Support Campaign
      </a>
    </nav>
  );
};

const CampaignHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-brand-bg">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-brand-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest">
              Building Wealth • Creating Impact
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] mb-8 text-balance">
            Empowering <span className="text-brand-primary">African Talent</span> to Build Lasting Wealth.
          </h1>
          <p className="text-xl text-brand-muted font-light mb-8 leading-relaxed">
            Your support helps us employ and train brilliant individuals in Africa, providing them with high-value digital skills that build generational wealth. We bridge this talent to NGOs dedicated to providing <span className="text-brand-text font-semibold">education, shelter, and food</span> across the continent.
          </p>
          
          <div className="flex items-start gap-4 p-5 bg-brand-primary/5 rounded-2xl border border-brand-primary/10 mb-8">
            <Info className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
            <p className="text-sm text-brand-muted">
              We are raising funds to provide 6 months of runway for 6 initial team members, establishing a foundation for a company that scales both community wealth and social good.
            </p>
          </div>
        </motion.div>

        <motion.div 
          id="donate"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-brand-surface p-6 rounded-[2rem] shadow-xl border border-brand-primary/10 relative"
        >
          <div className="flex flex-col items-center justify-center h-[400px] bg-brand-primary/5 rounded-2xl border border-dashed border-brand-primary/20 mb-6 p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-brand-primary animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Support Our Mission</h3>
            <p className="text-brand-muted mb-8 max-w-sm">
              Click the button below to be taken to our secure donation page powered by Zeffy. Your contribution directly funds job creation and training.
            </p>
            <a 
              href="https://www.zeffy.com/en-US/donation-form/afrik-talent-bridge" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 bg-brand-primary text-white font-bold uppercase tracking-widest rounded-xl hover:bg-brand-accent transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              Donate Now
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
          
          <div className="pt-4 border-t border-brand-primary/10">
            <p className="text-[11px] text-brand-muted leading-relaxed">
              <span className="font-bold text-brand-text block mb-1 uppercase tracking-wider">Fiscal Sponsorship</span>
              Donations are processed through the <span className="text-brand-primary font-semibold">SKEP Foundation</span>, our parent organization and fiscal sponsor. SKEP Foundation ensures that your contribution is directed to Afrik Talant Bridge to fund our employment and training initiatives.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TheCase = () => {
  return (
    <section className="py-20 px-6 bg-brand-surface">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              A New Path to <br/><span className="text-brand-primary italic">Economic Freedom</span>.
            </h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Building Individual Wealth</h4>
                  <p className="text-brand-muted text-sm leading-relaxed">We provide competitive salaries that allow our team members to build savings and invest in their own futures, breaking cycles of poverty.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <Users className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Community Job Creation</h4>
                  <p className="text-brand-muted text-sm leading-relaxed">Our goal is to create a ripple effect. Every job we create supports a family and inspires a community to look toward the global digital economy.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <Target className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Mission-Driven Support</h4>
                  <p className="text-brand-muted text-sm leading-relaxed">We focus our expertise on NGOs that provide essential services like education and shelter, ensuring your donation has a double impact.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-brand-bg p-10 rounded-[2rem] border border-brand-primary/5">
            <h3 className="text-2xl font-bold mb-6 italic">The Founder's Pivot</h3>
            <p className="text-brand-muted mb-6 leading-relaxed italic">
              "We started as trained medical coders, but we saw a bigger need. We chose to pivot into entrepreneurship to create jobs for our community. Afrik Talant Bridge is our way of proving that African talent can drive global change."
            </p>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm font-bold">Michael Wisdom & Blessing James</p>
                <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">Founders, Afrik Talant Bridge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-bg py-12 px-6 border-t border-brand-primary/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <img 
            src="https://lh3.googleusercontent.com/d/1VNLzjnK3AbM0-d6KTX5FTyAsmp_mKnEf" 
            alt="Afrik Talant Bridge Logo" 
            className="w-10 h-10 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.insertAdjacentHTML('afterbegin', '<div class="w-6 h-6 bg-brand-primary rounded flex items-center justify-center text-white font-serif text-xs font-bold">A</div>');
            }}
          />
          <span className="font-serif text-sm font-bold">Afrik Talant Bridge Campaign</span>
        </div>
        <div className="flex gap-8 text-[10px] text-brand-muted uppercase tracking-widest font-bold">
          <p>© 2026 Fundraising for Job Creation</p>
          <a href="#" className="hover:text-brand-primary">Privacy</a>
          <a href="#" className="hover:text-brand-primary">Contact</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <CampaignHero />
        <TheCase />
      </main>
      <Footer />
    </div>
  );
}
