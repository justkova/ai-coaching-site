import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | AI Coaching & Consulting",
  description: "Terms of service for AI coaching and consulting services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          Terms of Service
        </h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Services</h2>
            <p className="text-muted-foreground">
              AI coaching and consulting services are provided on a professional basis. 
              Specific deliverables, timelines, and pricing will be outlined in individual 
              agreements or statements of work.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Payment Terms</h2>
            <p className="text-muted-foreground">
              Payment terms will be specified in your service agreement. Typical arrangements 
              include upfront payment for single sessions or milestone-based payments for 
              consulting projects.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Confidentiality</h2>
            <p className="text-muted-foreground">
              All client information shared during coaching or consulting engagements is 
              treated as confidential. I will not disclose your business information, 
              strategies, or any proprietary data without your explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Cancellation Policy</h2>
            <p className="text-muted-foreground">
              Scheduled sessions may be rescheduled with at least 24 hours' notice. 
              Cancellations with less than 24 hours' notice may be subject to fees as 
              outlined in your service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Coaching and consulting services are provided for informational and strategic 
              purposes. While I provide expert guidance based on hands-on experience, results 
              depend on implementation and factors outside my control. I make no guarantees 
              of specific outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="text-muted-foreground">
              Any custom deliverables created specifically for your project (code, documentation, 
              strategy documents) become your property upon full payment. General frameworks, 
              methodologies, and tools I use remain my intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
            <p className="text-muted-foreground">
              These terms may be updated periodically. Clients will be notified of material 
              changes. Continued use of services after changes constitutes acceptance of 
              updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
            <p className="text-muted-foreground">
              Questions about these terms? Email{" "}
              <a href="mailto:contact@example.com" className="text-primary hover:underline">
                contact@example.com
              </a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
