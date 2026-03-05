import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { TechStack } from "@/components/tech-stack"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { MouseGlow } from "@/components/mouse-glow"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <MouseGlow />
      <Navbar />
      <Hero />
      <Education />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
