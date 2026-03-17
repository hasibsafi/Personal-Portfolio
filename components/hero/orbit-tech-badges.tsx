"use client"

import { motion } from "framer-motion"

const techBadges = [
  "Kubernetes",
  "Terraform",
  "AWS",
  "CI/CD",
  "Security",
  "Observability",
  "Automation",
]

export function OrbitTechBadges() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-[44%] hidden h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 md:block"
      animate={{ rotate: 360 }}
      transition={{ duration: 70, ease: "linear", repeat: Infinity }}
    >
      {techBadges.map((badge, index) => {
        const angle = (360 / techBadges.length) * index
        return (
          <div
            key={badge}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `rotate(${angle}deg) translateX(280px) rotate(-${angle}deg)` }}
          >
            <span className="glass-panel block rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-cloud-cyan">
              {badge}
            </span>
          </div>
        )
      })}
    </motion.div>
  )
}
