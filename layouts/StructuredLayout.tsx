
import React from 'react';
import { MOCK_REVIEWS } from '../data/mockData';
import ReviewCard from '../components/ReviewCard';

const StructuredLayout: React.FC = () => {
  return (
    <div className="bg-[#F5F1E6]/20 p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-black text-[#4B2C20]">Our Feed</h2>
          <div className="flex gap-2">
            <span className="bg-white px-4 py-2 rounded-full text-[10px] font-black text-[#4B2C20] border border-gray-200 shadow-sm">Verified Buyers First</span>
          </div>
        </div>
        
        <div className="grid gap-6">
          {MOCK_REVIEWS.map(r => (
            <ReviewCard key={r.id} review={r} variant="structured" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StructuredLayout;
