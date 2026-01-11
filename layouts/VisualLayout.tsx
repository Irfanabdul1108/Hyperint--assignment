
import React from 'react';
import { MOCK_REVIEWS } from '../data/mockData';
import ReviewCard from '../components/ReviewCard';

const VisualLayout: React.FC = () => {
  return (
    <div className="bg-[#F5F1E6]/50 p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#4B2C20] mb-6 italic tracking-tight">Seen in the Wild</h2>
          <p className="text-[#4B2C20]/60 max-w-xl mx-auto font-bold uppercase tracking-widest text-[10px]">Tag @MaskaButters to get featured</p>
        </header>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {MOCK_REVIEWS.map(r => (
            <ReviewCard key={r.id} review={r} variant="visual" />
          ))}
          
          <div className="break-inside-avoid bg-[#4B2C20] rounded-3xl p-10 flex flex-col items-center justify-center text-center gap-6 text-white min-h-[300px]">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#D14124]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/></svg>
            </div>
            <h3 className="text-2xl font-black leading-tight italic">Your Maska Moment?</h3>
            <p className="text-gray-400 text-sm font-medium">Upload a photo with your review and get a chance to win a 1kg jar!</p>
            <button className="px-8 py-3 bg-[#D14124] rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#4B2C20] transition-all">
              Upload Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualLayout;
