"use client"

import { SiGithub } from "react-icons/si"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "MetriCore",
    description:
      "Production-grade multi-tenant SaaS analytics platform with async job processing (Redis + BullMQ), a deterministic recommendation engine, strict tenant isolation, RBAC, SSRF protection, and per-org rate limiting.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Redis", "BullMQ"],
    link: "https://getmetricore.com",
    github: "#",
    featured: true,
  },
  {
    title: "MuzMates",
    description:
      "Roommate finder web and mobile application featuring Firebase Auth onboarding, real-time messaging with read/unread tracking, security-focused HTTP headers, dynamic SEO, and Docker multi-stage production builds.",
    tags: ["React", "Firebase", "Docker", "Next.js"],
    link: "https://muzmates.com",
    github: "#",
    featured: true,
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-14">
      <div className="mx-auto max-w-6xl rounded-2xl border border-glass-border/60 bg-glass/70 p-8 sm:p-10 backdrop-blur-sm">
        <div className="mb-12">
          <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-neon">
            Selected Work
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Production applications I{"'"}ve architected and shipped end-to-end.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-xl border border-glass-border bg-glass p-6 backdrop-blur-md transition-all duration-300 hover:border-neon/30 hover:shadow-[0_0_30px_rgba(0,210,211,0.06)] ${
                project.featured ? "" : ""
              }`}
            >
              {project.featured && (
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-neon/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neon">
                    Featured
                  </span>
                </div>
              )}

              <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-neon">
                {project.title}
              </h3>

              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-glass-border bg-secondary/50 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-end border-t border-glass-border pt-4">
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    aria-label={`View ${project.title} on GitHub`}
                    className="text-muted-foreground transition-colors hover:text-neon"
                  >
                    <SiGithub size={16} />
                  </a>
                  <a
                    href={project.link}
                    aria-label={`Visit ${project.title}`}
                    className="text-muted-foreground transition-colors hover:text-neon"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
