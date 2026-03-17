"use client"

import {
  Activity,
  ArrowDown,
  Bot,
  Boxes,
  Cloud,
  Gauge,
  GitBranch,
  Linkedin,
  Mail,
  Shield,
  Wrench,
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SiGithub } from "react-icons/si"

const socialLinks = [
  { icon: SiGithub, href: "https://github.com/hasibsafi", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/hasibsafi", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hasibsaf91@gmail.com", label: "Email" },
]

const orbitNodes = [
  { label: "Kubernetes", icon: Boxes, angle: 0 },
  { label: "Terraform", icon: Wrench, angle: 45 },
  { label: "AWS", icon: Cloud, angle: 90 },
  { label: "CI/CD", icon: GitBranch, angle: 135 },
  { label: "Security", icon: Shield, angle: 180 },
  { label: "Observability", icon: Activity, angle: 225 },
  { label: "Automation", icon: Bot, angle: 270 },
  { label: "Scale", icon: Gauge, angle: 315 },
]

const infraTiles = ["Ingress", "Services", "Workers", "Registry", "Secrets", "Metrics"]
const pipelineStages = ["Source", "Build", "Scan", "Deploy", "Observe"]

export function Hero() {
  const { scrollY } = useScroll()
  const scrollHintOpacity = useTransform(scrollY, [0, 110], [1, 0])

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-8 top-12 h-[360px] w-[360px] rounded-full bg-cloud-cyan/18 blur-[140px]" />
        <div className="absolute right-10 top-20 h-[420px] w-[420px] rounded-full bg-subtle-indigo/24 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(460px,0.92fr)] lg:items-center lg:gap-8 xl:gap-12">
        <div className="max-w-3xl">
          <div className="mb-6">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-cloud-cyan sm:text-base">
              Hasib Safi
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Full-Stack Software Engineer</p>
          </div>

          <h1 className="text-balance text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl xl:text-7xl">
            I build full-stack systems
            <span className="my-3 block w-fit rounded-2xl border border-white/20 bg-white/12 px-4 py-2 text-cloud-cyan shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl">
              that ship cleanly,
            </span>
            and scale with confidence.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-[1.34rem]">
            I am a full-stack developer who designs high-trust platforms from API
            to UI. I ship backend architecture with real-world guardrails,
            frontend experiences that feel effortless, and deployment flows that
            are boring in all the right ways.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-cloud-cyan/40 bg-cloud-cyan px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.4)] transition-colors hover:bg-cloud-cyan/90"
            >
              Get in touch
            </a>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass-panel flex h-11 w-11 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-cloud-cyan"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[560px]">
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
            <motion.div
              className="absolute h-[94%] w-[94%] rounded-full border border-cyan-300/20 shadow-[0_0_40px_rgba(34,211,238,0.14)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            />
            <motion.div
              className="absolute h-[72%] w-[72%] rounded-full border border-white/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            />

            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 34, ease: "linear", repeat: Infinity }}
            >
              {orbitNodes.map((node, index) => {
                const Icon = node.icon
                return (
                  <motion.div
                    key={node.label}
                    className="group absolute left-1/2 top-1/2"
                    style={{ transform: `rotate(${node.angle}deg) translateX(245px)` }}
                    whileHover={{ y: -6, scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 34, ease: "linear", repeat: Infinity }}
                      className="glass-panel flex items-center gap-2 rounded-full px-3 py-1.5"
                      style={{ animationDelay: `${index * 0.12}s` }}
                    >
                      <Icon size={13} className="text-cloud-cyan" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/90">
                        {node.label}
                      </span>
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          <motion.div
            className="glass-panel relative z-10 mx-auto mt-10 w-[86%] rounded-[2rem] p-5 sm:p-6"
            animate={{ y: [0, -10, 0], rotateX: [0, 1.4, 0], rotateY: [0, -1.8, 0] }}
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="rounded-2xl border border-white/15 bg-slate-900/62 p-4">
              <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground/80">
                Live Platform Mesh
              </div>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[1.7rem] font-semibold leading-tight text-foreground">
                  Autonomous Delivery Core
                </h3>
                <span className="rounded-full border border-emerald-400/28 bg-emerald-400/12 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                  Stable
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {infraTiles.map((tile, idx) => (
                <motion.div
                  key={tile}
                  className="rounded-2xl border border-white/15 bg-white/8 p-3 text-center"
                  animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.03, 1] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.16 }}
                >
                  <div className="mx-auto mb-2 h-2 w-2 rounded-full bg-cloud-cyan shadow-[0_0_12px_rgba(34,211,238,0.85)]" />
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{tile}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-white/15 bg-slate-900/62 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground/80">
                  Pipeline Flow
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cloud-cyan">
                  Real-Time Sync
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {pipelineStages.map((stage, idx) => (
                  <div key={stage} className="flex items-center gap-2">
                    <motion.span
                      className="rounded-full border border-cloud-cyan/35 bg-cloud-cyan/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-cloud-cyan"
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(34,211,238,0)",
                          "0 0 20px rgba(34,211,238,0.3)",
                          "0 0 0 rgba(34,211,238,0)",
                        ],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: idx * 0.22 }}
                    >
                      {stage}
                    </motion.span>
                    {idx < pipelineStages.length - 1 && (
                      <motion.span
                        className="h-[2px] w-3 rounded-full bg-cloud-cyan/50"
                        animate={{ opacity: [0.25, 0.95, 0.25], x: [0, 2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.18 }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              className="mt-4 rounded-2xl border border-white/15 bg-slate-900/72 p-4"
              animate={{ opacity: [0.72, 1, 0.72] }}
              transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/85" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/85" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/85" />
                <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground/80">
                  Terminal
                </span>
              </div>
              <div className="space-y-1 font-mono text-sm text-muted-foreground">
                <p>
                  <span className="text-cloud-cyan">$</span> terraform apply --auto-approve
                </p>
                <p>
                  <span className="text-cloud-cyan">$</span> kubectl rollout status deploy/platform
                </p>
                <p>
                  <span className="text-cloud-cyan">$</span> pipeline: <span className="text-emerald-300">healthy</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="relative z-10 mt-14 flex items-center justify-center gap-2 text-muted-foreground/70"
        style={{ opacity: scrollHintOpacity }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.24em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  )
}
