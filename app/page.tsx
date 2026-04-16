"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // ── CEO DATA ──────────────────────────────────────────────────────────────
  const ceoData = [
    {
      title: "The Vision",
      text: '"We established Kodedristi not to participate in the software industry, but to fundamentally redefine the underlying architecture of digital enterprise."',
      author: "— Prabin Kumar Bogati, CEO",
      img: "/home/prabin-kumar-bogati.jpeg",
    },
    {
      title: "The Standard",
      text: '"Zero legacy debt. Zero compromise. We hire the top 0.1% of global engineering talent because the systems we build run the world."',
      author: "— Prabin Kumar Bogati, CEO",
      img: "/home/prabin-kumar-bogati-1.png",
    },
  ];

  // ── APPROACH DATA ──────────────────────────────────────────────────────────
  const approachData = [
    {
      phase: "01 / Discovery",
      title: "System Intelligence Audit",
      text: "We reverse-engineer your entire system — analyzing architecture, data flow, and dependencies to uncover hidden bottlenecks.",
      // img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      phase: "02 / Architecture",
      title: "Scalable System Design",
      text: "We design robust, modular architectures aligned with your business logic — ensuring high performance and long-term scalability.",
      // img: "https://plus.unsplash.com/premium_photo-1744944778150-12afe488303e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      phase: "03 / Engineering",
      title: "Precision Development",
      text: "Our engineers build with clean, maintainable code using modern stacks — optimized for speed, security, and seamless integration.",
      // img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    },
    {
      phase: "04 / Deployment",
      title: "Zero-Downtime Delivery",
      text: "We implement CI/CD pipelines and deploy with precision — ensuring smooth rollouts, zero downtime, and production-grade reliability.",
      // img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2074",
    },
    {
      phase: "05 / Evolution",
      title: "Continuous Optimization",
      text: "We continuously monitor, analyze, and refine your system — adapting to scale and evolving with your business needs.",
      // img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070",
    },
  ];

  // ── SERVICES DATA ─────────────────────────────────────────────────────────
  const servicesData = [
    {
      title: "App Development",
      desc: "We build high-performance mobile applications for Android and iOS using modern technologies like React Native and Flutter, tailored for global users.",
      img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2070",
    },
    {
      title: "Web Development",
      desc: "From business websites to complex web platforms, we create fast, responsive, and scalable web applications using modern stacks like React, Next.js, and Node.js.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070",
    },
    {
      title: "SaaS Product Development",
      desc: "We design and develop scalable SaaS platforms with multi-tenant architecture, subscription systems, and cloud deployment for startups and enterprises.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
    },
    {
      title: "AI & Smart Systems",
      desc: "We integrate AI-powered features like recommendation systems, chatbots, and adaptive learning solutions to make your product smarter and more efficient.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    },
    {
      title: "Custom Software Development",
      desc: "We build tailored software solutions for businesses — including ERP systems, MIS, and digital transformation tools based on your exact needs.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
    },
    {
      title: "SEO & Digital Growth",
      desc: "We help your business grow online with SEO optimization, content strategy, and performance marketing focused on ranking and conversions.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070",
    },
    {
      title: "Other IT Services",
      desc: "We also provide UI/UX design, maintenance, cloud setup, DevOps, and IT consulting services for startups, NGOs, and enterprises .",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    },
  ];

  // ── TEAM DATA — aligned with app/team/page.tsx ───────────────────────────
  const homeTeamData = [
    {
      name: "Nabin Dhami",
      role: "Full Stack Developer",
      img: "/team/nabin-dhami.jpg",
      imgHover: "/team/nabin_dhami1.jpg",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Bipan Pandey",
      role: "Graphics Designer",
      img: "/team/bipan-pandey.jpg",
      imgHover: "/team/bipan-pandey.jpg",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Suman Sapkota",
      role: "Frontend & UI/UX Designer",
      img: "/team/suman_sapkota.jpg",
      imgHover: "/team/suman_sapkota1.jpg",
      linkedin: "https://linkedin.com"

    },
  ];
  // partners data
  const partnersData = [
    { name: "boxmandu", logo: "/partners/boxmandu.jpg" },
    { name: "Unigo", logo: "/partners/unigo.png" },
    { name: "Linking Derams", logo: "/partners/linking_dreams.jpg" },
    { name: "renaissance library", logo: "/partners/renaissance-library-logo.png" },
    { name: "kidzee", logo: "/partners/kidzee.svg" },
    { name: "Career Academy", logo: "/partners/career-academy.png" },
    { name: "Aristotle Academy", logo: "/partners/aristotle-academy.jpeg" },
  ];

  // ── GSAP ──────────────────────────────────────────────────────────────────
  useGSAP(
    () => {
      // Hero entrance (after PageLoader dismisses)
      gsap.fromTo(
        ".gsap-hero-element",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.18,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.3,
        },
      );

      // Hero BG slow zoom
      gsap.to(".gsap-hero-bg", {
        scale: 1.12,
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // CEO pinned fade
      const ceoSection = document.querySelector(
        ".gsap-ceo-section",
      ) as HTMLElement;
      if (ceoSection) {
        const panels = ceoSection.querySelectorAll(".gsap-ceo-panel");
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ceoSection,
            pin: true,
            start: "top top",
            end: "+=200%",
            scrub: 1,
          },
        });
        panels.forEach((panel, i) => {
          if (i > 0)
            tl.fromTo(
              panel,
              { opacity: 0, x: 30 },
              { opacity: 1, x: 0, duration: 1, ease: "none" },
            );
          if (i !== panels.length - 1)
            tl.to(panel, { opacity: 0, x: -30, duration: 1, ease: "none" });
        });
      }

      // Approach horizontal scroll
      const approachSection = document.querySelector(
        ".gsap-approach-section",
      ) as HTMLElement;
      if (approachSection) {
        const wrapper = approachSection.querySelector(
          ".gsap-approach-wrapper",
        ) as HTMLElement;
        if (wrapper) {
          const tween = gsap.to(wrapper, {
            x: () => -(wrapper.scrollWidth - window.innerWidth),
            ease: "none",
          });
          ScrollTrigger.create({
            trigger: approachSection,
            pin: true,
            start: "top top",
            end: () => `+=${wrapper.scrollWidth - window.innerWidth}`,
            scrub: 1,
            animation: tween,
          });
        }
      }

      // Services pinned fade
      const serviceSection = document.querySelector(
        ".gsap-service-section",
      ) as HTMLElement;
      if (serviceSection) {
        const panels = serviceSection.querySelectorAll(".gsap-service-panel");
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: serviceSection,
            pin: true,
            start: "top top",
            end: "+=250%",
            scrub: 1,
          },
        });
        panels.forEach((panel, i) => {
          if (i > 0)
            tl.fromTo(
              panel,
              { opacity: 0, scale: 0.97 },
              { opacity: 1, scale: 1, duration: 1, ease: "none" },
            );
          if (i !== panels.length - 1)
            tl.to(panel, {
              opacity: 0,
              scale: 1.03,
              duration: 1,
              ease: "none",
            });
        });
      }

      // Team cards stagger on scroll
      gsap.fromTo(
        ".gsap-home-team-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".gsap-home-team-grid", start: "top 80%" },
        },
      );

      // Partners marquee
      const partnersMarquee = document.querySelector(
        ".gsap-partners-marquee",
      ) as HTMLElement;
      if (partnersMarquee) {
        gsap.fromTo(
          partnersMarquee,
          { xPercent: -50 },
          { xPercent: 0, duration: 30, repeat: -1, ease: "none" },
        );
      }

      ScrollTrigger.refresh();
    },
    { scope: containerRef },
  );

  return (
    <div
      className="bg-background text-foreground overflow-x-clip"
      ref={containerRef}
    >
      <main className="w-full gsap-global-wrapper">
        {/* ── Section 1: Hero ── */}
        <section
          id="hero"
          onClick={() =>
            window.open("https://forms.gle/k9XYt89brsv3dgLUA", "_blank")
          }
          className="group relative h-[100dvh] w-full flex items-center justify-center overflow-hidden border-b border-white/10 cursor-pointer"
        >
          <div className="absolute inset-0 bg-black">
            {/* <img
              src="https://images.unsplash.com/photo-1737644467636-6b0053476bb2?q=80&w=2144&auto=format&fit=crop"
              className="gsap-hero-bg w-full h-full object-cover opacity-60 transition-opacity duration-700 group-hover:opacity-80"
              alt="Hero background"
            /> */}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-background" />

          <div className="relative z-10 text-center flex flex-col items-center max-w-7xl px-8">
            <div className="gsap-hero-element mb-6 inline-flex items-center gap-3 border border-white/30 bg-white/10 px-6 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Registrations Open ·
            </div>
            <h1 className="gsap-hero-element text-4xl sm:text-6xl md:text-8xl lg:text-6xl font-black mb-6 tracking-tight leading-[0.9] text-white uppercase drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              National<span className="text-primary mx-2"> AI</span> Hackathon 2026
            </h1>
            <p className="gsap-hero-element text-lg md:text-2xl text-gray-300 md:max-w-3xl mb-10 font-medium tracking-wide">
              Click anywhere to secure your spot at the most advanced
              engineering event of the decade.
            </p>
            <div className="gsap-hero-element flex items-center gap-3 text-white/40 text-sm font-bold uppercase tracking-widest">
              <span>Tap to open Google Forms</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </div>
          </div>
        </section>

        {/* ── Section 2: CEO Message ── */}


        {/* ── Section 3: Our Approach ── */}

        {/* MOBILE: Normal vertical layout (hidden on md+) */}
        <section className="block md:hidden w-full bg-white border-b border-black/10 px-5 py-16">
          <h2 className="text-5xl font-black text-black uppercase tracking-tighter mb-3">
            Our Approach
          </h2>
          <p className="text-base font-medium text-gray-600 mb-10 leading-snug">
            We execute rigorously. Our operational pipeline guarantees absolute consistency.
          </p>
          <div className="flex flex-col gap-4">
            {approachData.map((phase, i) => (
              <div key={i} className="w-full bg-black p-6 flex flex-col gap-3">
                <p className="text-primary font-bold tracking-widest uppercase text-xs">
                  {phase.phase}
                </p>
                <h3 className="text-2xl font-black text-white uppercase leading-tight">
                  {phase.title}
                </h3>
                <p className="text-gray-400 font-medium text-sm leading-relaxed">
                  {phase.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* DESKTOP: GSAP Horizontal Scroll (hidden on mobile) */}
        <section className="gsap-approach-section hidden md:block relative h-screen w-full bg-white overflow-hidden border-b border-black/10">
          <div className="absolute bottom-12 left-24 z-20 pointer-events-none mix-blend-difference">
            <h2 className="text-8xl font-black text-white uppercase tracking-tighter mix-blend-difference drop-shadow-[0_0_15px_rgba(0,0,0,1)]">
              Our Approach
            </h2>
          </div>
          <div className="gsap-approach-wrapper flex flex-nowrap h-full items-center relative z-10 w-max">
            <div className="w-[70vw] h-full flex flex-col justify-center px-24 bg-white flex-shrink-0">
              <h3 className="text-primary text-3xl font-bold uppercase tracking-widest mb-4">
                → Swipe Process
              </h3>
              <p className="text-5xl font-medium text-black max-w-3xl leading-tight">
                We execute rigorously. Our operational pipeline guarantees
                absolute consistency.
              </p>
            </div>
            {approachData.map((phase, i) => (
              <div
                key={i}
                className="w-[80vw] lg:w-[78vw] h-full flex items-center justify-center p-2 flex-shrink-0 bg-white"
              >
                <div className="w-full max-w-6xl h-[70vh] flex flex-col justify-end relative overflow-hidden group bg-black">
                  <div className="absolute inset-0 bg-black z-0" />
                  <div className="relative z-10 p-12 w-1/2">
                    <p className="text-white font-bold tracking-widest uppercase mb-4 text-base">
                      {phase.phase}
                    </p>
                    <h3 className="text-5xl font-black text-white mb-6 uppercase">
                      {phase.title}
                    </h3>
                    <p className="text-gray-300 font-medium text-2xl">
                      {phase.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 4: Team ── */}
        <section
          id="team"
          className="relative w-full bg-background border-b border-white/10 py-24 overflow-hidden"
        >
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
            <div className="mb-16 md:mb-20">
              <p className="text-white font-bold tracking-[0.3em] uppercase text-xs mb-4">
                Our People
              </p>
              <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
                The Architects
              </h2>
              <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl">
                Hover over our core engineering team to reveal their secondary
                identity.
              </p>
            </div>

            <div className="gsap-home-team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {homeTeamData.map((member, i) => (
                <div
                  key={i}
                  className="gsap-home-team-card group relative h-[400px] sm:h-[520px] overflow-hidden bg-black border border-white/10 cursor-crosshair"
                >
                  {/* Primary image */}
                  <img
                    src={member.img}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 grayscale group-hover:opacity-0 transition-all duration-700 ease-in-out"
                    alt={member.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = member.imgHover;
                    }}
                  />
                  {/* Hover image */}
                  <img
                    src={member.imgHover}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-90 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                    alt={member.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
                  <div className="relative z-10 flex flex-col justify-end h-full p-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                    <h4 className="text-3xl font-black text-white uppercase leading-none mb-2">
                      {member.name}
                    </h4>
                    <p className="text-primary font-bold tracking-widest text-xs uppercase">
                      {member.role}
                    </p>
                  </div>
                  {/* Hover corner arrow */}
                  {/* <a href={member.linkedin} target="_blank"><div className="absolute top-6 right-6 w-10 h-10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                    </a> */}
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-end">
              <Link
                href="/team"
                className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-white font-bold uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition-colors duration-300"
              >
                Meet Full Team
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Section 5: Core Services ── */}

        {/* MOBILE: Normal vertical list (hidden on md+) */}
        <section className="block md:hidden w-full bg-background border-b border-white/10 px-5 py-16">
          <p className="text-white font-bold tracking-[0.3em] uppercase text-xs mb-4">
            What We Build
          </p>
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-10 leading-tight">
            Core<br />Services
          </h2>
          <div className="flex flex-col gap-4">
            {servicesData.map((srv, index) => (
              <div key={index} className="w-full bg-black border border-white/10 p-6 flex flex-col gap-2">
                <p className="text-white/50 font-bold tracking-widest uppercase text-xs">
                  0{index + 1}
                </p>
                <h3 className="text-xl font-black text-white uppercase leading-tight">
                  {srv.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* DESKTOP: GSAP Fade-Pinned (hidden on mobile) */}
        <section className="gsap-service-section hidden md:flex relative min-h-screen w-full bg-background border-b border-white/10 overflow-hidden">
          <div className="w-full h-full flex flex-row max-w-7xl mx-auto px-12 lg:pl-24 items-center justify-center gap-12">
            <div className="w-1/3 flex-shrink-0">
              <p className="text-white font-bold tracking-[0.3em] uppercase text-xs mb-4">
                What We Build
              </p>
              <h2 className="text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">
                Core<br />Services
              </h2>
              <p className="text-gray-500 text-sm font-medium">
                Scroll through our core offerings.
              </p>
            </div>
            <div className="w-2/3 h-[65vh] relative">
              {servicesData.map((srv, index) => (
                <div
                  key={index}
                  className={`gsap-service-panel absolute inset-0 w-full h-full border border-white/10 flex flex-col justify-end p-12 bg-black ${index === 0 ? "opacity-100 z-30" : "opacity-0 z-20"}`}
                >
                  <div className="absolute inset-0 z-0 bg-black">
                    <img
                      src={srv.img}
                      className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                      alt={srv.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-white font-bold tracking-widest uppercase text-xs mb-3">
                      0{index + 1}
                    </p>
                    <h3 className="text-5xl font-black text-white mb-4 uppercase leading-none">
                      {srv.title}
                    </h3>
                    <p className="text-gray-300 font-medium text-xl max-w-2xl leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 6: Partners Marquee ── */}
        <section className="w-full bg-white py-16 md:py-24 border-b relative flex flex-col items-center justify-center overflow-hidden">
          <p className="text-black mb-10 text-center font-black tracking-[0.3em] uppercase text-xs z-20">
            Trusted By
          </p>
          {/* <h3 className="text-black text-center font-bold text-2xl md:text-3xl mb-10 md:mb-16 z-20">
          Our Organizations & Partners
        </h3> */}
          <div className="flex w-full overflow-hidden">
            <div className="gsap-partners-marquee flex whitespace-nowrap items-center">
              {[...partnersData, ...partnersData, ...partnersData].map(
                (partner, i) => (
                  <div
                    key={i}
                    className="flex shrink-0 items-center gap-16 md:gap-28 px-8 md:px-14"
                  >
                    <img
                      src={partner.logo}
                      className="h-12 md:h-16 object-contain   transition-all duration-300"
                      alt={partner.name}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      </main>
    </div >
  );
}
