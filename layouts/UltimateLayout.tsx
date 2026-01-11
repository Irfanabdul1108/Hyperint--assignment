
import React, { useState } from 'react';
import { MOCK_REVIEWS, MOCK_METRICS } from '../data/mockData';
import ReviewCard from '../components/ReviewCard';
import StarRating from '../components/StarRating';

const UltimateLayout: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'media'>('all');
  const [showAll, setShowAll] = useState(false);

  const displayedReviews = filter === 'media' 
    ? MOCK_REVIEWS.filter(r => r.image)
    : MOCK_REVIEWS;

  return (
    <div className="bg-[#FCFAF7]">
      {/* 1. Feature Hero Summary */}
      <section className="bg-white border-b border-gray-100 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-[#F5F1E6] text-[#4B2C20] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-[#4B2C20]/10">
              Community Shouts
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-[#4B2C20] mb-8 leading-[0.9] tracking-tighter">
              People Are <br/><span className="text-[#D14124] italic">Drizzling It.</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-2 mb-1">
                  <StarRating rating={MOCK_METRICS.averageRating} size="lg" />
                  <span className="text-[#4B2C20] font-black text-xl">{MOCK_METRICS.averageRating}</span>
                </div>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">382 Verified Jars Rated</p>
              </div>
              <div className="w-px h-12 bg-gray-100 hidden sm:block"></div>
              <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?u=${i+20}`} alt=""/>)}
                <div className="w-10 h-10 rounded-full bg-[#4B2C20] text-white flex items-center justify-center text-[10px] font-black border-2 border-white">+10k</div>
              </div>
            </div>
          </div>

          {/* 2. Sentiment Indicators */}
          <div className="w-full lg:w-[400px] bg-[#F5F1E6]/40 p-10 rounded-[3rem] border border-[#F5F1E6]">
            <h3 className="text-[#4B2C20] font-black mb-8 text-sm uppercase tracking-widest">Why fans love us:</h3>
            <div className="space-y-6">
              {MOCK_METRICS.topAttributes.map(attr => (
                <div key={attr.label}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-black text-[#4B2C20] text-xs uppercase tracking-tight">{attr.label}</span>
                    <span className="text-[#D14124] font-black text-[10px] uppercase tracking-widest">{attr.score}%</span>
                  </div>
                  <div className="h-2 bg-white rounded-full overflow-hidden shadow-inner">
                    <div 
                      className="h-full bg-[#D14124] rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${attr.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Review Action Bar */}
      <div className="max-w-5xl mx-auto py-16 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm">
            <button 
              onClick={() => setFilter('all')}
              className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === 'all' ? 'bg-[#4B2C20] text-white shadow-md' : 'text-gray-400 hover:text-[#4B2C20]'}`}
            >
              All Feedback
            </button>
            <button 
              onClick={() => setFilter('media')}
              className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === 'media' ? 'bg-[#4B2C20] text-white shadow-md' : 'text-gray-400 hover:text-[#4B2C20]'}`}
            >
              Real Photos
            </button>
          </div>
          
          <div className="flex gap-4">
            <button className="bg-white border border-[#4B2C20] text-[#4B2C20] px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#F5F1E6] transition-all">
              Write Review
            </button>
          </div>
        </div>

        {/* 4. The Feed */}
        <div className="space-y-8">
          {displayedReviews.slice(0, showAll ? undefined : 2).map(review => (
            <ReviewCard key={review.id} review={review} variant="ultimate" />
          ))}
        </div>

        {/* 5. Pagination CTA */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group relative inline-flex items-center gap-3 px-12 py-5 bg-[#4B2C20] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#D14124] transition-all overflow-hidden"
          >
            <span className="relative z-10">{showAll ? 'Collapse Feed' : `Read All ${MOCK_METRICS.totalReviews} Reviews`}</span>
            <svg className={`relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1 ${showAll ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"/></svg>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UltimateLayout;
