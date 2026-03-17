"use client"

import { SiGithub } from "react-icons/si"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

const projects = [
  {
    title: "MetriCore",
    description:
      "Built a multi-tenant analytics SaaS that automates performance and SEO insights for organizations. Designed strict tenant isolation with RBAC and async scan processing (Redis/BullMQ) to keep requests fast under load. Added SSRF protection, scoped queries, and rate limiting for production-grade security.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "BullMQ"],
    link: "https://getmetricore.com",
    github: "https://github.com/hasibsafi/MetriCore",
    featured: true,
    image: "/images/metricore.png",
    imageAlt: "MetriCore dashboard preview",
    imageClassName: "object-contain p-6",
  },
  {
    title: "MuzMates",
    description:
      "Built a roommate-matching platform with secure onboarding, account protection, and real-time messaging. Implemented deterministic conversation threads with read/unread tracking for reliable chat UX. Strengthened deployment readiness with CSP/HSTS headers, structured SEO, and Docker multi-stage builds.",
    tags: ["React", "Firebase Authentication", "Cloud Firestore", "Docker", "Next.js"],
    link: "https://muzmates.com",
    github: "https://github.com/hasibsafi?tab=repositories",
    githubLabel: "Private repo",
    featured: true,
    image: "/images/muzmates.png",
    imageAlt: "MuzMates app preview",
    imageClassName: "object-cover",
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-16 md:py-20">
      <div className="glass-panel mx-auto max-w-6xl rounded-2xl p-7 sm:p-10">
        <ScrollReveal className="mb-12">
          <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-cloud-cyan">
            Selected Work
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Production applications I{"'"}ve architected and shipped end-to-end.
          </p>
        </ScrollReveal>

        <ScrollReveal className="grid gap-4 sm:grid-cols-2" delay={0.15}>
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-xl border border-white/15 bg-white/6 p-6 backdrop-blur-2xl transition-all duration-300 hover:border-cloud-cyan/50 hover:shadow-[0_0_32px_rgba(34,211,238,0.18)] ${
                project.featured ? "" : ""
              }`}
            >
              {project.featured && (
                <div className="absolute right-4 top-4 z-20">
                  <span className="rounded-full border border-cloud-cyan/35 bg-slate-950/75 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-cloud-cyan backdrop-blur-md">
                    Featured
                  </span>
                </div>
              )}

              <div className="relative mb-4 overflow-hidden rounded-lg border border-white/15 bg-slate-900/55">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className={`${project.imageClassName} opacity-80 transition-transform duration-500 group-hover:scale-[1.03]`}
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <span className="absolute bottom-2 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-cloud-cyan/85">
                  Product Preview
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-cloud-cyan">
                {project.title}
              </h3>

              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-cloud-cyan/40 bg-white/5 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-end border-t border-glass-border pt-4">
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-cloud-cyan"
                  >
                    <SiGithub size={16} />
                    {project.githubLabel && (
                      <span className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                        {project.githubLabel}
                      </span>
                    )}
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className="text-muted-foreground transition-colors hover:text-cloud-cyan"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
