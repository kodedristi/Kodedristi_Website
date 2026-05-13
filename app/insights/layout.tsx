import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Read the latest thoughts, articles, and insights on software architecture, AI integration, and digital engineering from the team at Kodedristi.',
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
