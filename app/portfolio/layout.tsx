import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Portfolio',
  description: 'View Kodedristi\'s flagship products and digital monuments built to operate at the frontier of technology. Explore our case studies and selected projects.',
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
