import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore Kodedristi\'s enterprise-grade software architecture, digital engineering solutions, cloud infrastructure, AI integration, and custom software development services.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
