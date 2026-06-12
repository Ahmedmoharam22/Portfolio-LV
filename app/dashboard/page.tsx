export default function DashboardPage() {
  // Analytical mock metrics ready to be fetched dynamically
  const statusMetrics = [
    { title: "Total Live Projects", count: "3", sub: "Rahala, Al-Noor, Tawsila" },
    { title: "Arsenal Stack Items", count: "18", sub: "Core languages & frameworks" },
    { title: "Inquiry Form Status", count: "Active", sub: "Secure endpoint operational" },
  ];

  return (
    <div className="flex flex-col gap-12">
      
      {/* Welcome Title */}
      <div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-luxury-white mb-2 tracking-tight">
          Welcome Back, Ahmed
        </h1>
        <p className="text-luxury-muted text-sm font-light tracking-wide">
          Manage your elite architecture, update project modules, and fine-tune your core technical presence.
        </p>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statusMetrics.map((metric, idx) => (
          <div 
            key={idx}
            className="bg-[#0F0F0F] border border-white/[0.03] rounded-2xl p-6 flex flex-col justify-between min-h-[140px]"
          >
            <span className="text-[10px] uppercase tracking-widest text-luxury-muted font-bold">
              {metric.title}
            </span>
            <span className="font-serif text-3xl font-black text-gold-accent my-2">
              {metric.count}
            </span>
            <span className="text-xs text-luxury-muted font-light tracking-wide">
              {metric.sub}
            </span>
          </div>
        ))}
      </div>

      {/* Quick Action Box */}
      <div className="bg-luxury-gray/30 border border-dashed border-white/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-4">
        <h3 className="text-sm font-serif text-luxury-white font-bold tracking-wide">
          Ready to deploy system changes?
        </h3>
        <p className="text-xs text-luxury-muted font-light max-w-sm leading-relaxed">
          Select Manage Works or Manage Arsenal from the executive sidebar console to alter live parameters.
        </p>
      </div>

    </div>
  );
}