import { Metadata } from "next";

export const metadata: Metadata = {
  title: "National AI Hackathon 2026 | Kodedristi",
  description: "32-Hour National-Level AI Hackathon. 23–24 Jestha, 2026. 250+ hackers. Build the future with AI.",
};

export default function HackathonLayout({ children }: { children: React.ReactNode }) {
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "National AI Hackathon 2026",
    "description": "32-Hour National-Level AI Hackathon on 23–24 Jestha, 2026. 250+ hackers, 2–4 members per team.",
    "startDate": "2026-06-06T09:00:00+05:45",
    "endDate": "2026-06-07T17:00:00+05:45",
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
      "price": "10000",
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
