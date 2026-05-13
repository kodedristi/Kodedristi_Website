import { Metadata } from "next";

export const metadata: Metadata = {
  title: "National AI Hackathon | Kodedristi",
  description: "Join the most advanced engineering event of the decade. 48 hours to code the future.",
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
