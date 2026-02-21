"use client";

import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  const handleBookingClick = () => {
    // TODO: Replace with actual Calendly link
    alert("Calendly integration: Add your Calendly scheduling link here");
  };

  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to cut through the AI noise?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Book a free 30-minute strategy call. No sales pitch—just a real 
          conversation about your AI challenges and opportunities.
        </p>
        <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={handleBookingClick}>
          Book Your Free Strategy Call
        </Button>
      </div>
    </section>
  );
}
