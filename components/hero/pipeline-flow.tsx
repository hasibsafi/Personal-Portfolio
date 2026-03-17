"use client"

import { motion } from "framer-motion"

const steps = ["Source", "Build", "Scan", "Deploy", "Observe"]

export function PipelineFlow() {
  return (
    <div className="mx-auto mt-8 max-w-5xl px-6 md:mt-12">
      <div className="glass-panel relative overflow-hidden rounded-2xl p-4 md:p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cloud-cyan">CI/CD Pipeline Flow</p>
        <div className="mt-3 overflow-x-auto pb-1">
          <div className="grid min-w-[520px] grid-cols-5 items-center gap-2 md:min-w-0">
            {steps.map((step, index) => (
              <div key={step} className="relative">
                <div className="rounded-lg border border-white/20 bg-white/5 px-2 py-2 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-foreground md:text-xs">
                  {step}
                </div>
                {index < steps.length - 1 && (
                  <div className="pipeline-line absolute -right-1 top-1/2 h-[2px] w-2 -translate-y-1/2 md:w-3" />
                )}
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="absolute bottom-4 left-4 hidden h-1.5 w-1.5 rounded-full bg-cloud-cyan shadow-[0_0_14px_rgba(34,211,238,0.9)] md:block"
          animate={{ x: [0, 540, 0] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  )
}
