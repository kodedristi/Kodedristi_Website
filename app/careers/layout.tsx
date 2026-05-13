import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Kodedristi and help us engineer the future. We are always looking for top talent in software architecture, AI, cloud infrastructure, and cybersecurity.',
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
