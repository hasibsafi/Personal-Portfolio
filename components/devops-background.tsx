"use client"

export function DevOpsBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#020617]"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(circle at 50% 12%, rgba(56,189,248,0.24), transparent 34%)",
            "radial-gradient(circle at 84% 22%, rgba(99,102,241,0.24), transparent 30%)",
            "radial-gradient(circle at 18% 74%, rgba(34,211,238,0.18), transparent 34%)",
            "radial-gradient(circle at 72% 74%, rgba(56,189,248,0.14), transparent 28%)",
            "radial-gradient(circle at 36% 50%, rgba(148,163,184,0.1), transparent 44%)",
            "linear-gradient(135deg, #020617 0%, #061120 35%, #020617 100%)",
          ].join(", "),
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute h-[1100px] w-[1100px] rounded-full border border-cyan-400/10" />
        <div className="absolute h-[760px] w-[760px] rounded-full border border-white/5" />
      </div>

      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.13) 0 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(circle at center, black 34%, transparent 76%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 34%, transparent 76%)",
        }}
      />

      <div className="absolute -left-16 top-10 h-96 w-96 rounded-full bg-cyan-400/22 blur-3xl" />
      <div className="absolute -right-16 bottom-16 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-3xl" />
    </div>
  )
}
