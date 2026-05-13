import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the architects at Kodedristi. A team of elite engineers, developers, and designers redefining the underlying architecture of digital enterprise.',
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
