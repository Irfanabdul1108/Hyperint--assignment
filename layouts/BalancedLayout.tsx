
import React from 'react';
import { MOCK_REVIEWS, MOCK_METRICS } from '../data/mockData';
import ReviewCard from '../components/ReviewCard';
import StarRating from '../components/StarRating';

const BalancedLayout: React.FC = () => {
  return (
    <div className="bg-white">
      {/* High-Impact Stat Bar */}
      <div className="bg-[#4B2C20] py-8 px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-b-8 border-[#D14124]">
        <div>
          <p className="text-4xl font-black text-white mb-1">{MOCK_METRICS.customerCount}</p>
          <p className="text-orange-200 text-[9px] font-black uppercase tracking-widest">Happy Jars Sold</p>
        </div>
        <div className="border-l border-white/10">
          <p className="text-4xl font-black text-white mb-1">{MOCK_METRICS.averageRating}</p>
          <div className="flex justify-center"><StarRating rating={MOCK_METRICS.averageRating} size="sm" /></div>
          <p className="text-orange-200 text-[9px] font-black uppercase tracking-widest mt-1">Average Rating</p>
        </div>
        <div className="border-l border-white/10 hidden md:block">
          <p className="text-4xl font-black text-white mb-1">{MOCK_METRICS.repeatPurchaseRate}</p>
          <p className="text-orange-200 text-[9px] font-black uppercase tracking-widest">Repeat Love</p>
        </div>
        <div className="border-l border-white/10 hidden md:block">
          <p className="text-4xl font-black text-white mb-1">{MOCK_METRICS.satisfiedPercentage}%</p>
          <p className="text-orange-200 text-[9px] font-black uppercase tracking-widest">Happy Fans</p>
        </div>
      </div>

      <div className="p-8 md:p-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MOCK_REVIEWS.map(r => (
            <ReviewCard key={r.id} review={r} variant="structured" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BalancedLayout;
