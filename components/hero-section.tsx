"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  const handleBookingClick = () => {
    // TODO: Replace with actual Calendly link
    alert("Calendly integration: Add your Calendly scheduling link here");
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Headshot - placeholder for now */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-slate-200 flex items-center justify-center">
            <span className="text-slate-400 text-sm">Photo</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Stop Guessing About AI.{" "}
            <span className="text-primary">Start Using It.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Most AI advice is recycled hype. I build AI systems daily—and help 
            business leaders focus on what actually delivers results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="text-lg px-8 py-6" onClick={handleBookingClick}>
              Book Free 30-Min Strategy Call
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            No sales pitch. Real conversation about your AI challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
