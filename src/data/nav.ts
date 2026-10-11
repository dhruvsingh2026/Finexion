import { NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  {
    label: 'Features',
    href: '#features',
    children: [
      {
        label: 'AI Cashflow Forecaster',
        description: 'Predict liquidity gaps and runway with neural simulations',
        href: '#features',
      },
      {
        label: 'Multi-Currency Vaults',
        description: 'Hold and convert 40+ currencies at mid-market rates',
        href: '#global-finance',
      },
      {
        label: 'Smart Expense Automation',
        description: 'Auto-categorize and tag company and personal receipts',
        href: '#steps',
      },
    ],
  },
  { label: 'Solutions', href: '#individuals-businesses' },
  { label: 'Analytics', href: '#analytics' },
  { label: 'Pricing', href: '#pricing' },
];
