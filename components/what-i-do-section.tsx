import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function WhatIDoSection() {
  const services = [
    {
      title: "For Executives",
      subtitle: "Cut Through AI Noise",
      points: [
        "Build practical AI strategy aligned with business goals",
        "Separate hype from real opportunities",
        "Implement what actually delivers ROI",
      ],
    },
    {
      title: "For Your Team",
      subtitle: "Implement AI That Works",
      points: [
        "Deploy AI tools that save real time",
        "Train teams on effective AI usage",
        "Build sustainable AI workflows",
      ],
    },
    {
      title: "For Entrepreneurs",
      subtitle: "Scale with AI Automation",
      points: [
        "Automate repetitive business processes",
        "Leverage AI for competitive advantage",
        "Focus on high-value work",
      ],
    },
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What I Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="text-sm font-semibold text-primary mb-2">
                  {service.title}
                </div>
                <CardTitle className="text-2xl">{service.subtitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
