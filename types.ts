
export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  headline?: string;
  date: string;
  isVerified: boolean;
  isRepeatBuyer: boolean;
  purchasedSize: '300g' | '500g' | '1kg';
  image?: string;
  avatar?: string;
  helpfulCount: number;
  sentimentTags?: string[];
}

export interface TrustMetrics {
  averageRating: number;
  totalReviews: number;
  repeatPurchaseRate: string;
  customerCount: string;
  satisfiedPercentage: number;
  topAttributes: { label: string; score: number }[];
}

export type DesignVariation = 'minimal' | 'structured' | 'balanced' | 'visual' | 'ultimate';
