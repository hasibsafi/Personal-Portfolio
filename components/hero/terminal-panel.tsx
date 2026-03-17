"use client"

import { motion } from "framer-motion"

const logLines = [
  "$ terraform apply",
  "Apply complete! Resources: 3 added",
  "$ kubectl rollout status",
  "deployment successfully rolled out",
  "$ pipeline status",
  "pipeline healthy",
]

interface TerminalPanelProps {
  visible: boolean
}

export function TerminalPanel({ visible }: TerminalPanelProps) {
  if (!visible) return null

  return (
    <motion.aside
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glass-panel absolute bottom-16 left-6 z-20 hidden w-64 rounded-xl p-4 md:block"
    >
      <div className="flex items-center gap-2 border-b border-white/15 pb-2">
        <span className="h-2 w-2 rounded-full bg-rose-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">infra-terminal</span>
      </div>
      <div className="mt-3 space-y-1 font-mono text-[11px] leading-relaxed text-muted-foreground">
        {logLines.map((line, index) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </motion.aside>
  )
}
