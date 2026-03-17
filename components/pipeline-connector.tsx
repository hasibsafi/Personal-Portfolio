"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"

interface PipelineConnectorProps {
  label: string
}

export function PipelineConnector({ label }: PipelineConnectorProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -110px 0px" })
  const reduceMotion = useReducedMotion()
  const active = isInView || reduceMotion

  return (
    <div ref={ref} className="relative px-6">
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-center">
        <div className="relative flex h-full w-24 flex-col items-center justify-center">
          <motion.div
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 origin-top bg-gradient-to-b from-cloud-cyan/70 via-infra-cyan/45 to-transparent"
            initial={{ scaleY: 0, opacity: 0.4 }}
            animate={active ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0.4 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />

          <motion.span
            className="relative z-10 h-[10px] w-[10px] rounded-full border border-cloud-cyan/75 bg-[#020617]"
            initial={{ scale: 0.75, boxShadow: "0 0 0 rgba(34,211,238,0)" }}
            animate={
              active
                ? {
                    scale: [0.8, 1.15, 1],
                    boxShadow: [
                      "0 0 0 rgba(34,211,238,0)",
                      "0 0 24px rgba(34,211,238,0.9)",
                      "0 0 10px rgba(34,211,238,0.55)",
                    ],
                  }
                : { scale: 0.75, boxShadow: "0 0 0 rgba(34,211,238,0)" }
            }
            transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : 0.1 }}
          />

          <motion.span
            className="absolute -bottom-1 font-mono text-[10px] uppercase tracking-[0.24em] text-cloud-cyan/65"
            initial={{ opacity: 0, y: 6 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ duration: 0.35, delay: reduceMotion ? 0 : 0.34, ease: "easeOut" }}
          >
            {label}
          </motion.span>
        </div>
      </div>
    </div>
  )
}