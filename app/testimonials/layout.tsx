import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Hear from our clients and partners. Discover how Kodedristi has successfully architected cloud infrastructures, integrated AI, and built scalable software solutions.',
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
