import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | AI Coaching & Consulting",
  description: "Privacy policy for AI coaching and consulting services.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          Privacy Policy
        </h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information Collection</h2>
            <p className="text-muted-foreground">
              I collect only the information necessary to provide coaching and consulting 
              services. This may include your name, email, company information, and details 
              about your AI challenges and goals shared during our conversations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How Information Is Used</h2>
            <p className="text-muted-foreground">
              Your information is used solely to deliver services, communicate with you, 
              and improve service quality. I do not sell, rent, or share your personal 
              information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Storage & Security</h2>
            <p className="text-muted-foreground">
              Client information is stored securely using industry-standard practices. 
              Email communications, session notes, and project files are protected and 
              accessible only to authorized personnel (me).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Tools</h2>
            <p className="text-muted-foreground">
              I may use third-party tools for scheduling (Calendly), email communication, 
              and project management. These services have their own privacy policies and 
              security measures. I choose reputable providers committed to data protection.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Cookies & Analytics</h2>
            <p className="text-muted-foreground">
              This website may use basic analytics to understand visitor traffic and improve 
              the user experience. No personally identifiable information is tracked without 
              your consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights (GDPR)</h2>
            <p className="text-muted-foreground">
              If you're in the EU, you have the right to access, correct, or delete your 
              personal data. You can also object to processing or request data portability. 
              Contact me to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
            <p className="text-muted-foreground">
              Client information is retained for as long as necessary to provide services 
              and meet legal obligations. Upon request, I can delete your data, subject to 
              any legal requirements to retain certain records.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              This privacy policy may be updated periodically. Material changes will be 
              communicated to active clients. Continued use of services constitutes acceptance 
              of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
            <p className="text-muted-foreground">
              Questions or concerns about privacy? Email{" "}
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
