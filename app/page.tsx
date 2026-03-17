import { Navbar } from "@/components/navbar"
import { HeroScene } from "@/components/hero-scene"
import { Projects } from "@/components/projects"
import { TechStack } from "@/components/tech-stack"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { DevOpsBackground } from "@/components/devops-background"
import { PipelineConnector } from "@/components/pipeline-connector"

export default function Page() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#020617] text-foreground">
      <DevOpsBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroScene />
        <PipelineConnector label="Foundation" />
        <Education />
        <PipelineConnector label="Compile" />
        <TechStack />
        <PipelineConnector label="Build" />
        <Experience />
        <PipelineConnector label="Deploy" />
        <Projects />
        <PipelineConnector label="Connect" />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
