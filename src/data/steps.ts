export interface StepItem {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  type: 'wallet' | 'chart' | 'pricing';
}

export const stepsData: StepItem[] = [
  {
    id: 'step-1',
    stepNumber: 'Step 01',
    title: 'Smart Wallet Overview',
    description: 'Track balance, rewards, and transfers in one secure place.',
    type: 'wallet',
  },
  {
    id: 'step-2',
    stepNumber: 'Step 02',
    title: 'Financial Performance Insights',
    description: 'Monitor trends and make smarter financial decisions.',
    type: 'chart',
  },
  {
    id: 'step-3',
    stepNumber: 'Step 03',
    title: 'Flexible Pricing Plans',
    description: 'Pick the right plan with clear, transparent pricing.',
    type: 'pricing',
  },
];
