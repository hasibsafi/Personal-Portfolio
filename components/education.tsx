import { GraduationCap } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const education = [
  {
    period: "Expected May 2025",
    degree: "Bachelor of Science in Computer Science",
    minor: "Minor in Data Science",
    school: "California State University, Northridge",
    description:
      "Core coursework in software engineering, data structures, algorithms, and systems design. Data science minor covering statistical analysis, machine learning fundamentals, and data-driven decision making.",
    tags: ["Computer Science", "Data Science", "Algorithms", "Machine Learning"],
  },
]

export function Education() {
  return (
    <section id="education" className="relative px-6 py-16 md:py-20">
      <div className="glass-panel mx-auto max-w-6xl rounded-2xl p-7 sm:p-10">
        <ScrollReveal className="mb-12">
          <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-neon">
            Academics
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Education
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Where I built my foundation in computer science and data.
          </p>
        </ScrollReveal>

        <ScrollReveal className="flex flex-col gap-8" delay={0.15}>
          {education.map((edu, i) => (
            <div
              key={i}
              className="group rounded-xl border border-white/15 bg-white/6 p-6 backdrop-blur-2xl transition-all duration-300 hover:border-cloud-cyan/50 hover:shadow-[0_0_32px_rgba(34,211,238,0.18)]"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/8 text-cloud-cyan transition-colors group-hover:border-cloud-cyan/60">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-cloud-cyan">{edu.minor}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {edu.school}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-muted-foreground sm:shrink-0">
                  {edu.period}
                </span>
              </div>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {edu.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {edu.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-cloud-cyan/40 bg-white/5 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
