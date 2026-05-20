import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore Kodedristi\'s enterprise-grade software architecture, digital engineering solutions, cloud infrastructure, AI integration, and custom software development services.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  const servicesJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "App Development",
      "description": "High-performance mobile and desktop applications tailored for businesses and startups using modern cross-platform technologies (iOS & Android).",
      "provider": {
        "@type": "Organization",
        "name": "Kodedristi",
        "url": "https://kodedristi.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Application Development",
      "description": "Scalable, secure, and high-performance web applications designed for growth — from startups to enterprise systems.",
      "provider": {
        "@type": "Organization",
        "name": "Kodedristi",
        "url": "https://kodedristi.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SaaS Product Development",
      "description": "End-to-end SaaS solutions with subscription systems, multi-tenant architecture, and cloud-ready infrastructure.",
      "provider": {
        "@type": "Organization",
        "name": "Kodedristi",
        "url": "https://kodedristi.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI & Automation",
      "description": "Smart systems including AI chatbots, recommendation engines, and automation tools to enhance business efficiency.",
      "provider": {
        "@type": "Organization",
        "name": "Kodedristi",
        "url": "https://kodedristi.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom Software Development",
      "description": "Tailored software solutions like ERP, MIS, and business tools designed specifically for modern organizations.",
      "provider": {
        "@type": "Organization",
        "name": "Kodedristi",
        "url": "https://kodedristi.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SEO & Digital Growth",
      "description": "Boost your online presence with SEO, content strategy, and performance-driven digital marketing solutions.",
      "provider": {
        "@type": "Organization",
        "name": "Kodedristi",
        "url": "https://kodedristi.com"
      }
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      {children}
    </>
  );
}
