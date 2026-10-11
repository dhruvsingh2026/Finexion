import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter (Free)',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for tracking your basic expenses and getting real-time insights.',
    features: [
      'Basic expense and income tracking',
      'Automatic transaction categorisation',
      'Monthly spending summary',
      'One linked account (demo)',
      'Standard customer support',
    ],
    ctaLabel: 'Get Started Free',
    isPopular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Most Popular',
    monthlyPrice: 99,
    yearlyPrice: 84, // billed $1,010 yearly
    description: 'Unlock advanced features for smarter financial decisions.',
    features: [
      'Unlimited expense and income tracking',
      'Advanced budgeting tools',
      'Detailed financial reports',
      'Multi-account support',
      'Priority customer support',
      'Bank-level security',
    ],
    ctaLabel: 'Upgrade to Pro',
    isPopular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: 399,
    yearlyPrice: 339, // billed $4,070 yearly
    description: 'Built for teams, startups, and professionals with complex needs.',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'Advanced user roles and permissions',
      'Dedicated account manager',
      'Custom reports and dashboards',
    ],
    ctaLabel: 'Contact Sales',
    isPopular: false,
  },
];
