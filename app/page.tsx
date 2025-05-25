"use client";
import Image from "next/image";
import AnimatedTextCycle from "../components/ui/animated-text-cycle";
import Script from "next/script";

// Extend the Window interface for JFAGENT
declare global {
  interface Window {
    JFAGENT?: { open: () => void };
  }
}

// Hero section using AnimatedTextCycle
function AnimatedTextCycleDemo() {
  return (
    <div className="p-4 max-w-[500px]">
      <h1 className="text-4xl font-light text-left text-muted-foreground">
        <span className="text-white">Your</span>{" "}
        <AnimatedTextCycle
          words={[
            "business",
            "team",
            "workflow",
            "productivity",
            "projects",
            "analytics",
            "dashboard",
            "platform"
          ]}
          interval={3000}
          className={"text-foreground font-semi-bold"}
        />{" "}
        <span className="text-white">deserves</span>{" "}
        <span className="text-white">better</span>{" "}
        <span className="text-white">tools</span>
      </h1>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/Coast%20Video%20Background.mp4"
      />
      {/* Overlay Content */}
      <div className="relative z-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black/40">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
          {/* Hero Section */}
          <AnimatedTextCycleDemo />
        </main>
        <footer className="row-start-3 flex flex-col items-center justify-center w-full gap-2 pb-4">
          {/* Visit our Website link */}
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
            href="https://automationalien.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Visit our Website
          </a>
          {/* Logos below the footer link, centered */}
          <div className="flex gap-8 items-end justify-center mt-2">
            <a href="https://www.make.com/en" target="_blank" rel="noopener noreferrer">
              <img src="https://automationalien.s3.us-east-1.amazonaws.com/make-logo-png.png" alt="Make Logo" style={{ height: 56 }} />
            </a>
            <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer">
              <img src="https://automationalien.s3.us-east-1.amazonaws.com/n8n-logo-png_seeklogo-470809.png" alt="n8n Logo" style={{ height: 56 }} />
            </a>
            <a href="https://zapier.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://automationalien.s3.us-east-1.amazonaws.com/Zapier_logo.png" alt="Zapier Logo" style={{ height: 18, marginBottom: 18 }} />
            </a>
          </div>
        </footer>
        {/* Jotform Assistant Embed */}
        <Script src="https://cdn.jotfor.ms/agent/embedjs/01952a9d3fb275588d4fce8dc19d1aa9d6e0/embed.js?skipWelcome=1&maximizable=1" strategy="afterInteractive" />
      </div>
    </div>
  );
}
