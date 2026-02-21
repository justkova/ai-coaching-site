export function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          {/* Photo placeholder */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-lg bg-slate-200 flex items-center justify-center">
              <span className="text-slate-400">Photo</span>
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About David</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                David [LastName] builds AI systems daily—from automation tools 
                to intelligent workflows.
              </p>
              <p>
                He helps business leaders cut through AI noise and focus on what 
                actually delivers results.
              </p>
              <p>Based in the Netherlands.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
