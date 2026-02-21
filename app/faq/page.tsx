import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "FAQ | AI Coaching & Consulting",
  description: "Frequently asked questions about AI coaching and consulting services.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What happens during the free 30-minute strategy call?",
      answer: "We'll discuss your specific AI challenges and goals. I'll ask about your current processes, where you see AI opportunities, and what results you're looking for. By the end, you'll have clarity on whether AI can help and what the next steps might look like. No sales pitch—just a real conversation.",
    },
    {
      question: "What's your pricing for coaching or consulting?",
      answer: "Pricing depends on your needs. Executive coaching sessions start at [rate]. Custom consulting projects are scoped individually based on complexity and timeline. We'll discuss specific pricing during the strategy call once I understand your situation.",
    },
    {
      question: "How do you differ from other AI consultants?",
      answer: "I build AI systems daily—not just advise on them. Most consultants recycle theory and hype. I show you what actually works because I'm hands-on with AI tools, automation, and workflows every day. You get practical advice from someone who's solved these problems, not just read about them.",
    },
    {
      question: "Do you work with companies of all sizes?",
      answer: "I primarily work with executives and business leaders at established companies, as well as growth-stage entrepreneurs. If you're unsure whether your situation is a fit, book a strategy call and we'll figure it out together.",
    },
    {
      question: "What industries do you work with?",
      answer: "AI applications span all industries. I've worked with clients in various sectors. The principles of effective AI implementation are universal—what matters most is your specific use case and goals.",
    },
    {
      question: "Can you implement AI solutions, or just advise?",
      answer: "Both. I offer strategic coaching for leaders who want to guide their teams, and hands-on implementation for clients who need technical execution. We'll determine the right approach during the strategy call.",
    },
    {
      question: "How long does a typical engagement last?",
      answer: "It varies. Some clients need a single strategy session, others want ongoing coaching (weekly or monthly), and consulting projects can run from a few weeks to several months. We'll tailor the engagement to your needs.",
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          Frequently Asked Questions
        </h1>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <Footer />
    </main>
  );
}
