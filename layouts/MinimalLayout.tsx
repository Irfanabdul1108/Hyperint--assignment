
import React from 'react';
import { MOCK_REVIEWS, MOCK_METRICS } from '../data/mockData';
import ReviewCard from '../components/ReviewCard';
import StarRating from '../components/StarRating';

const MinimalLayout: React.FC = () => {
  return (
    <div className="bg-white p-8 md:p-16 max-w-4xl mx-auto">
      <header className="mb-12 border-b border-gray-100 pb-10 flex flex-col items-center text-center">
        <h2 className="text-3xl font-black text-[#4B2C20] mb-4">Customer Words</h2>
        <div className="flex items-center gap-4 mb-2">
          <StarRating rating={MOCK_METRICS.averageRating} size="md" showLabel />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500 font-bold text-sm">{MOCK_METRICS.totalReviews} Reviews</span>
        </div>
      </header>
      
      <div className="divide-y divide-gray-50">
        {MOCK_REVIEWS.slice(0, 3).map(r => (
          <ReviewCard key={r.id} review={r} variant="minimal" />
        ))}
      </div>
      
      <button className="w-full mt-10 py-4 border border-gray-200 rounded-xl text-[#4B2C20] font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors">
        Read More
      </button>
    </div>
  );
};

export default MinimalLayout;
