
import { Review, TrustMetrics } from '../types';
import butter1 from '../images/butter1.webp';
import butter2 from '../images/butter2.jpg';
import butter3 from '../images/butter3.webp';
import butter4 from '../images/butter4.webp';
export const MOCK_METRICS: TrustMetrics = {
  averageRating: 4.74,
  totalReviews: 382,
  repeatPurchaseRate: '72%',
  customerCount: '10,000+',
  satisfiedPercentage: 98,
  topAttributes: [
    { label: 'Spiciness', score: 95 },
    { label: 'Texture', score: 98 },
    { label: 'Natural Ingredients', score: 96 }
  ]
};
export const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sharad Mittal',
    location: 'Gwalior',
    rating: 5,
    headline: 'Unexpectedly addictive!',
    comment:
      'The Chatpata flavor is a game changer. I never thought peanut butter could be spicy and tangy.',
    date: '09/01/2026',
    isVerified: true,
    isRepeatBuyer: true,
    purchasedSize: '500g',
    avatar: 'https://i.pravatar.cc/150?u=sharad',
    image: butter1,
    helpfulCount: 42,
    sentimentTags: ['Spicy', 'Unique', 'Healthy'],
  },
  {
    id: '2',
    author: 'Ekta Singh',
    location: 'Mumbai',
    rating: 5,
    headline: 'Best pre-workout snack',
    comment:
      'Finally, an Indian brand doing peanut butter right. No added oils, just pure goodness.',
    date: '05/01/2026',
    isVerified: true,
    isRepeatBuyer: true,
    purchasedSize: '1kg',
    avatar: 'https://i.pravatar.cc/150?u=ekta',
    image: butter2,
    helpfulCount: 15,
    sentimentTags: ['Pre-workout', 'No Oil'],
  },
  {
    id: '3',
    author: 'Rahul Verma',
    location: 'Delhi',
    rating: 4,
    comment:
      'Texture is very smooth. It has that authentic peanut taste.',
    date: '02/01/2026',
    isVerified: true,
    isRepeatBuyer: false,
    purchasedSize: '300g',
    avatar: 'https://i.pravatar.cc/150?u=rahul',
    image: butter3,
    helpfulCount: 8,
  },
  {
    id: '4',
    author: 'Sneha Kapur',
    location: 'Bangalore',
    rating: 5,
    headline: 'Maska Life is better!',
    comment:
      'The texture is incredibly drizzly and perfect for my smoothie bowls.',
    date: '28/12/2025',
    isVerified: true,
    isRepeatBuyer: true,
    purchasedSize: '500g',
    avatar: 'https://i.pravatar.cc/150?u=sneha',
    image: butter4, 
    helpfulCount: 29,
    sentimentTags: ['No Sugar', 'Natural'],
  },
];
