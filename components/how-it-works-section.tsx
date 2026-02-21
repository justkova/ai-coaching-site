export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Book a free 30-minute call",
      description: "We discuss your specific AI challenges",
    },
    {
      number: "2",
      title: "Get a clear plan",
      description: "I show you what's possible (and what's hype)",
    },
    {
      number: "3",
      title: "Implement with confidence",
      description: "Coaching sessions or hands-on implementation help",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
