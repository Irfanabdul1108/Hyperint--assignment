
import React, { useState,useEffect } from 'react';
import { DesignVariation } from './types';
import MinimalLayout from './layouts/MinimalLayout';
import StructuredLayout from './layouts/StructuredLayout';
import BalancedLayout from './layouts/BalancedLayout';
import VisualLayout from './layouts/VisualLayout';
import UltimateLayout from './layouts/UltimateLayout';

const App: React.FC = () => {
  const [variation, setVariation] = useState<DesignVariation>('ultimate');
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // remove if you want instant jump
  });
}, [variation]);

  const variations: { id: DesignVariation; label: string; title: string; desc: string }[] = [
    { id: 'minimal', label: '1. Basic', title: 'The Essentialist', desc: 'Focus on clean typography and whitespace for high readability. Removes all friction.' },
    { id: 'structured', label: '2. Hierarchy', title: 'The Credible Feed', desc: 'Introduces cards and metadata (location, verified status) to organize social proof.' },
    { id: 'balanced', label: '3. Proof', title: 'The Conversion Engine', desc: 'Heavy on metrics (10k+ sold). Uses the brand palette to highlight success numbers.' },
    { id: 'visual', label: '4. Visual', title: 'The Lifestyle Wall', desc: 'Uses customer-generated photos to show the product in a real-world context.' },
    { id: 'ultimate', label: '5. Premium', title: 'The Trust Hub', desc: 'Our final production-ready vision. Balanced, feature-rich, and context-aware.' }
  ];

  return (
    <div className="min-h-screen bg-[#F5F1E6]/40 font-sans text-[#4B2C20]">
      {/* Simulation Dashboard */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#4B2C20] rounded-2xl flex items-center justify-center text-white font-black italic shadow-lg shadow-brown-900/20">M</div>
          <div>
            <h1 className="text-base font-black uppercase tracking-tighter leading-tight">Maska Butters</h1>
            {/* <p className="text-[9px] text-gray-400 font-black uppercase tracking-[0.2em]">Assignment: Frontend Intern</p> */}
          </div>
        </div>
        
        <nav className="flex bg-gray-100/50 p-1.5 rounded-2xl gap-1">
          {variations.map((v) => (
            <button 
              key={v.id}
              onClick={() => setVariation(v.id)}
              className={`px-4 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
                variation === v.id 
                ? 'bg-[#4B2C20] text-white shadow-xl shadow-brown-900/10 scale-105' 
                : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {v.label}
            </button>
          ))}
        </nav>
      </div>

      <main className="max-w-7xl mx-auto py-16 px-6">
        {/* Design Context Card */}
        <section className="mb-20 max-w-2xl mx-auto text-center">
          <span className="text-[#D14124] font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Selection: {variation.toUpperCase()}</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-none italic">{variations.find(v => v.id === variation)?.title}</h2>
          <p className="text-[#4B2C20]/60 text-base leading-relaxed font-medium">
            {variations.find(v => v.id === variation)?.desc}
          </p>
        </section>

        {/* Variations Render */}
        <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-brown-900/5 overflow-hidden border border-gray-100">
          {variation === 'minimal' && <MinimalLayout />}
          {variation === 'structured' && <StructuredLayout />}
          {variation === 'balanced' && <BalancedLayout />}
          {variation === 'visual' && <VisualLayout />}
          {variation === 'ultimate' && <UltimateLayout />}
        </div>

        {/* Footer Meta */}
        <div className="mt-24 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>Assignment for HyperInt</p>
          <div className="flex gap-8">
            <span className="hover:text-[#D14124] cursor-pointer transition-colors">Component Architecture</span>
            <span className="hover:text-[#D14124] cursor-pointer transition-colors">Maska Design Tokens</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
