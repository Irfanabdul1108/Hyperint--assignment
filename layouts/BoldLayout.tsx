
import React from 'react';
import { MOCK_REVIEWS, MOCK_METRICS } from '../data/mockData';
import ReviewCard from '../components/ReviewCard';
import StarRating from '../components/StarRating';

const BoldLayout: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white">
      <div className="p-0 flex flex-col md:flex-row min-h-[600px]">
        {/* Left Sidebar - High Impact Stats */}
        <aside className="w-full md:w-1/3 bg-orange-600 p-8 md:p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-black mb-6 leading-tight">Join the Maska Family</h2>
            <p className="text-orange-100 text-sm mb-12 font-medium opacity-90 leading-relaxed">
              We're not just selling butter. We're fueling a community that loves flavor without compromise.
            </p>
            
            <div className="space-y-8">
              <div className="group">
                <p className="text-6xl font-black mb-1 group-hover:scale-105 transition-transform origin-left">{MOCK_METRICS.customerCount}</p>
                <p className="text-orange-200 text-xs font-bold uppercase tracking-widest">Happy Customers Globally</p>
              </div>
              <div className="group">
                <p className="text-6xl font-black mb-1 group-hover:scale-105 transition-transform origin-left">{MOCK_METRICS.repeatPurchaseRate}</p>
                <p className="text-orange-200 text-xs font-bold uppercase tracking-widest">Repeat Buyer Rate</p>
              </div>
              <div className="group">
                <p className="text-6xl font-black mb-1 group-hover:scale-105 transition-transform origin-left">{MOCK_METRICS.satisfiedPercentage}%</p>
                <p className="text-orange-200 text-xs font-bold uppercase tracking-widest">Satisfaction Score</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-orange-500/50">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-8 h-8 rounded-full border-2 border-orange-600" src={`https://picsum.photos/seed/${i+10}/50/50`} alt="" />
                ))}
              </div>
              <span className="text-xs font-bold">4.8/5 Avg Rating</span>
            </div>
          </div>
        </aside>

        {/* Right Content - Review Feed */}
        <div className="w-full md:w-2/3 p-8 md:p-12 bg-gray-50/30 overflow-y-auto">
          <div className="mb-8 flex justify-between items-center">
            <h3 className="text-xl font-extrabold text-gray-900">Recent Shouts</h3>
            <div className="flex gap-2">
              <select className="bg-white border-gray-200 border rounded-lg px-3 py-1.5 text-xs font-bold focus:ring-2 focus:ring-orange-500 outline-none">
                <option>Most Recent</option>
                <option>Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {MOCK_REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} variant="bordered" />
            ))}
          </div>

          <div className="mt-8">
             <button className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-400 font-bold text-sm hover:border-orange-400 hover:text-orange-600 transition-all">
               Load 52 More Reviews
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoldLayout;
