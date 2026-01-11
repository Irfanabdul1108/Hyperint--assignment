
import React from 'react';
import { Review } from '../types';
import StarRating from './StarRating';

interface ReviewCardProps {
  review: Review;
  variant: 'minimal' | 'structured' | 'ultimate' | 'visual';
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, variant }) => {
  // Brand Colors
  const brown = "#4B2C20";
  const orange = "#D14124";
  const cream = "#F5F1E6";

  if (variant === 'minimal') {
    return (
      <div className="py-8 border-b border-gray-100 last:border-0">
        <div className="flex items-center gap-3 mb-3">
          <StarRating rating={review.rating} size="sm" />
          <span className="font-bold text-[#4B2C20] text-sm">{review.author}</span>
          <span className="text-gray-400 text-xs">{review.date}</span>
        </div>
        <p className="text-[#4B2C20]/80 text-sm leading-relaxed font-medium">"{review.comment}"</p>
      </div>
    );
  }

  if (variant === 'visual') {
    return (
      <div className="break-inside-avoid mb-6 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group">
        {review.image && (
          <div className="aspect-square overflow-hidden">
            <img src={review.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Review" />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <StarRating rating={review.rating} size="sm" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{review.date}</span>
          </div>
          <p className="text-[#4B2C20] font-bold text-sm mb-2 italic">"{review.comment}"</p>
          <div className="flex items-center gap-2">
            <img src={review.avatar} className="w-6 h-6 rounded-full" alt="" />
            <span className="text-xs font-black text-[#4B2C20]">{review.author}</span>
          </div>
        </div>
      </div>
    );
  }

  const isUltimate = variant === 'ultimate';

  return (
    <div className={`p-8 rounded-[2rem] transition-all duration-300 ${
      isUltimate ? 'bg-white border border-gray-100 shadow-sm hover:shadow-md' : 'bg-white border border-gray-100'
    }`}>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src={review.avatar} alt="" className="w-14 h-14 rounded-full border-2 border-white shadow-sm object-cover" />
            {review.isRepeatBuyer && (
              <div className="absolute -bottom-1 -right-1 bg-[#4B2C20] text-white p-1 rounded-full border-2 border-white">
                <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20"><path d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.723V15a3 3 0 006 0V4a2 2 0 00-2-2h-3a2 2 0 00-2 2v2.277A4.99 4.99 0 0112 8h3a1 1 0 011 1v5a1 1 0 01-1 1h-3a1 1 0 01-1-1V8a1 1 0 01.11-.453l1.16-2.321A1 1 0 0011.382 4H11a1 1 0 00-1 1v10.277z"/></svg>
              </div>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-black text-[#4B2C20] text-lg">{review.author}</h4>
              {review.isVerified && (
                <div className="flex items-center gap-1 text-[9px] font-black text-green-600 bg-green-50 px-2 py-0.5 rounded-full uppercase tracking-widest border border-green-100">
                  <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  Verified
                </div>
              )}
            </div>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
              {review.date} • {review.location}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <StarRating rating={review.rating} />
          {review.purchasedSize && (
            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg ${isUltimate ? 'bg-[#F5F1E6] text-[#4B2C20]' : 'text-gray-400'}`}>
              Size: {review.purchasedSize}
            </span>
          )}
        </div>
      </div>

      {review.headline && <h5 className="text-[#4B2C20] font-black mb-3 text-xl italic tracking-tight leading-tight">"{review.headline}"</h5>}
      <p className="text-[#4B2C20]/80 text-base md:text-lg leading-relaxed mb-8 font-medium">
        {review.comment}
      </p>

      {isUltimate && review.image && (
        <div className="mb-8 rounded-3xl overflow-hidden aspect-[16/10] w-full border border-gray-100 shadow-inner group">
          <img src={review.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Customer Photo" />
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-gray-100">
        <div className="flex flex-wrap gap-2">
          {review.isRepeatBuyer && (
            <span className="flex items-center gap-1.5 text-[10px] font-black text-white bg-[#4B2C20] px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
              Loyal Buyer
            </span>
          )}
          {isUltimate && review.sentimentTags?.map(tag => (
            <span key={tag} className="text-[10px] font-black text-[#4B2C20]/60 border border-gray-100 bg-white px-4 py-1.5 rounded-full uppercase tracking-widest">{tag}</span>
          ))}
        </div>
        
        <button className="flex items-center gap-2 text-gray-400 hover:text-[#D14124] transition-all text-[11px] font-black uppercase tracking-widest group">
          <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.757c1.246 0 2.14 1.244 1.63 2.37l-2.33 5.166a2 2 0 01-1.79 1.164H5a2 2 0 01-2-2V9a2 2 0 012-2h2m2 4l2-2 2 2m-6-9a2 2 0 114 0 2 2 0 01-4 0z" />
          </svg>
          Helpful ({review.helpfulCount})
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
