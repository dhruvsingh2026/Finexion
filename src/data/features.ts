import { FeatureItem, TransferRow } from '../types';

export const coreFeatures: FeatureItem[] = [
  {
    id: 'core-1',
    title: 'Built for Individuals and Businesses',
    description: 'Whether you are managing personal budgets or handling business accounts, our tools adapt to your financial goals.',
    iconName: 'users',
  },
  {
    id: 'core-2',
    title: 'Real-Time Financial Insights',
    description: 'Instant transaction categorization, cashflow projections, and automated anomalies detection powered by predictive AI.',
    iconName: 'chart',
  },
  {
    id: 'core-3',
    title: 'Secure and Reliable Infrastructure',
    description: 'Protected with 256-bit AES encryption, biometric authentication, multi-sig controls, and 99.99% system uptime.',
    iconName: 'shield',
  },
];

export const sampleTransfers: TransferRow[] = [
  {
    id: 'row-1',
    invoice: 'INV384',
    currency: 'USD',
    country: 'United States',
    amount: '$1,500',
    flagCode: 'us',
  },
  {
    id: 'row-2',
    invoice: 'INV385',
    currency: 'EUR',
    country: 'France',
    amount: '€1,200',
    status: 'Pending',
    flagCode: 'fr',
  },
  {
    id: 'row-3',
    invoice: 'INV386',
    currency: 'GBP',
    country: 'United Kingdom',
    amount: '£900',
    flagCode: 'uk',
  },
];
