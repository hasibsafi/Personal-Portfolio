"use client"

import { type IconType } from "react-icons"
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiPython,
  SiNodedotjs,
  SiFastapi,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiGithubactions,
  SiGit,
} from "react-icons/si"
import { Database, ShieldCheck } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

interface Tech {
  name: string
  icon: IconType | React.ComponentType<{ size?: number; className?: string }>
}

interface Category {
  label: string
  items: Tech[]
}

const categories: Category[] = [
  {
    label: "Frontend",
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML / CSS", icon: SiHtml5 },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: SiAngular },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Python", icon: SiPython },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
      { name: "SQL", icon: Database },
    ],
  },
  {
    label: "DevOps & Security",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Git", icon: SiGit },
      { name: "Firebase Admin", icon: ShieldCheck },
    ],
  },
]

export function TechStack() {
  return (
    <section id="stack" className="relative px-6 py-16 md:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-infra-cyan/12 blur-[150px]" />

      <div className="glass-panel relative mx-auto max-w-6xl rounded-2xl p-7 sm:p-10">
        <ScrollReveal className="mb-12 text-center">
          <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-cloud-cyan">
            Skills
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Skills &amp; Expertise
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Technologies and systems I rely on to deliver production-ready
            software.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          {categories.map((category) => (
            <div key={category.label} className="mt-10 first:mt-0">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-cloud-cyan">
                {category.label}
              </h3>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
                {category.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.name}
                      className="group flex flex-col items-center justify-center rounded-xl border border-cloud-cyan/40 bg-white/6 p-4 backdrop-blur-2xl transition-all duration-300 hover:border-cloud-cyan/60 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)]"
                    >
                      <Icon size={28} className="text-cloud-cyan transition-transform duration-300 group-hover:scale-110" />
                      <span className="mt-2 text-center text-xs text-muted-foreground">
                        {item.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
