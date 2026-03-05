import { GraduationCap } from "lucide-react"

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
    <section id="education" className="relative px-6 py-14">
      <div className="mx-auto max-w-6xl rounded-2xl border border-glass-border/60 bg-glass/70 p-8 sm:p-10 backdrop-blur-sm">
        <div className="mb-12">
          <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-neon">
            Academics
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Education
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Where I built my foundation in computer science and data.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {education.map((edu, i) => (
            <div
              key={i}
              className="group rounded-xl border border-glass-border bg-glass p-6 backdrop-blur-md transition-all duration-300 hover:border-neon/30 hover:shadow-[0_0_30px_rgba(0,210,211,0.06)]"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-glass-border bg-secondary/60 text-neon transition-colors group-hover:border-neon/40">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-neon">{edu.minor}</p>
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
                    className="rounded-md border border-glass-border bg-secondary/50 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
