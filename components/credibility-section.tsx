export function CredibilitySection() {
  const highlights = [
    {
      stat: "15+ hrs/week",
      description: "Saved through AI automation pipeline",
    },
    {
      stat: "Daily Builder",
      description: "OpenClaw framework, home automation, workflow tools",
    },
    {
      stat: "Hands-On",
      description: "Not just advice—I build AI systems daily",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {item.stat}
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
