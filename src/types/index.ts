export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; description: string; href: string }[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TransferRow {
  id: string;
  invoice: string;
  currency: string;
  country: string;
  amount: string;
  status?: string;
  flagCode: 'us' | 'fr' | 'uk';
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  ctaLabel: string;
  isPopular?: boolean;
}

export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}
