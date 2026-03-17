"use client"

import { motion } from "framer-motion"

interface PlatformCoreProps {
  visible: boolean
}

export function PlatformCore({ visible }: PlatformCoreProps) {
  if (!visible) return null

  return (
    <motion.aside
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-panel absolute right-6 top-20 z-20 hidden w-56 rounded-xl p-4 lg:block"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cloud-cyan">Platform Core</p>
        <div className="mt-3 space-y-2 text-xs text-muted-foreground">
          <div className="flex items-center justify-between">
            <span>Pipeline Status</span>
            <span className="inline-flex items-center gap-1 text-pipeline-green">
              <span className="h-1.5 w-1.5 rounded-full bg-pipeline-green" />
              Active
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>Infrastructure Nodes</span>
            <span className="text-foreground">12 / 12</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Deployment Health</span>
            <span className="text-foreground">99.9%</span>
          </div>
        </div>
      </motion.div>
    </motion.aside>
  )
}
