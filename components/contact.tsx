import { ArrowUpRight, Linkedin, Mail } from "lucide-react"
import { SiGithub } from "react-icons/si"

const socials = [
  { label: "GitHub", href: "https://github.com/hasibsafi", icon: SiGithub, handle: "@hasibsafi" },
  { label: "LinkedIn", href: "https://linkedin.com/in/hasibsafi", icon: Linkedin, handle: "/in/hasibsafi" },
]

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-14">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-neon/4 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl rounded-2xl border border-glass-border/60 bg-glass/70 p-8 sm:p-10 backdrop-blur-sm">
        <div className="mb-12">
          <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-neon">
            Connect
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            If you{"'"}d like to discuss a project or just say hi, I{"'"}m always open to chat.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Email card */}
          <a
            href="mailto:hasibsaf91@gmail.com"
            className="group flex items-center gap-5 rounded-xl border border-glass-border bg-glass p-6 backdrop-blur-md transition-all duration-300 hover:border-neon/30 hover:shadow-[0_0_30px_rgba(0,210,211,0.06)]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-glass-border bg-secondary/60 text-neon transition-colors group-hover:border-neon/40">
              <Mail size={20} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">Email</div>
              <div className="text-sm text-muted-foreground">hasibsaf91@gmail.com</div>
            </div>
            <ArrowUpRight
              size={18}
              className="text-muted-foreground transition-all group-hover:text-neon group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* Social cards */}
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="group flex items-center gap-5 rounded-xl border border-glass-border bg-glass p-6 backdrop-blur-md transition-all duration-300 hover:border-neon/30 hover:shadow-[0_0_30px_rgba(0,210,211,0.06)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-glass-border bg-secondary/60 text-neon transition-colors group-hover:border-neon/40">
                <social.icon size={20} />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground">{social.label}</div>
                <div className="text-sm text-muted-foreground">{social.handle}</div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground transition-all group-hover:text-neon group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
