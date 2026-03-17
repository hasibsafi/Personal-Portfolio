import { ArrowUpRight, Linkedin, Mail } from "lucide-react"
import { SiGithub } from "react-icons/si"
import { ScrollReveal } from "@/components/scroll-reveal"

const socials = [
  { label: "GitHub", href: "https://github.com/hasibsafi", icon: SiGithub, handle: "@hasibsafi" },
  { label: "LinkedIn", href: "https://linkedin.com/in/hasibsafi", icon: Linkedin, handle: "/in/hasibsafi" },
]

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-16 md:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-infra-cyan/15 blur-[120px]" />

      <div className="glass-panel relative mx-auto max-w-6xl rounded-2xl p-7 sm:p-10">
        <ScrollReveal className="mb-12">
          <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-cloud-cyan">
            Connect
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            If you{"'"}d like to discuss a project or just say hi, I{"'"}m always open to chat.
          </p>
        </ScrollReveal>

        <ScrollReveal className="grid gap-6 md:grid-cols-2" delay={0.15}>
          {/* Email card */}
          <a
            href="mailto:hasibsaf91@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 rounded-xl border border-white/15 bg-white/6 p-6 backdrop-blur-2xl transition-all duration-300 hover:border-cloud-cyan/50 hover:shadow-[0_0_32px_rgba(34,211,238,0.18)]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/8 text-cloud-cyan transition-colors group-hover:border-cloud-cyan/60">
              <Mail size={20} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">Email</div>
              <div className="text-sm text-muted-foreground">hasibsaf91@gmail.com</div>
            </div>
            <ArrowUpRight
              size={18}
              className="text-muted-foreground transition-all group-hover:text-cloud-cyan group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* Social cards */}
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-xl border border-white/15 bg-white/6 p-6 backdrop-blur-2xl transition-all duration-300 hover:border-cloud-cyan/50 hover:shadow-[0_0_32px_rgba(34,211,238,0.18)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/8 text-cloud-cyan transition-colors group-hover:border-cloud-cyan/60">
                <social.icon size={20} />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground">{social.label}</div>
                <div className="text-sm text-muted-foreground">{social.handle}</div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground transition-all group-hover:text-cloud-cyan group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
