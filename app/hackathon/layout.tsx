import { Metadata } from "next";

export const metadata: Metadata = {
  title: "National AI Hackathon | Kodedristi",
  description: "Join the most advanced engineering event of the decade. 48 hours to code the future.",
};

export default function HackathonLayout({ children }: { children: React.ReactNode }) {
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "National AI Hackathon 2026",
    "description": "The National AI Hackathon 2026 is a 20-hour intensive coding marathon designed to push the boundaries of what's possible with Artificial Intelligence.",
    "startDate": "2026-06-20T09:00:00+05:45",
    "endDate": "2026-06-21T12:00:00+05:45",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Kathmandu, Nepal",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kathmandu",
        "addressRegion": "Bagmati",
        "addressCountry": "NP"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "5000",
      "priceCurrency": "NPR",
      "url": "https://forms.gle/k9XYt89brsv3dgLUA",
      "availability": "https://schema.org/InStock"
    },
    "organizer": {
      "@type": "Organization",
      "name": "Kodedristi",
      "url": "https://kodedristi.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      {children}
    </>
  );
}
