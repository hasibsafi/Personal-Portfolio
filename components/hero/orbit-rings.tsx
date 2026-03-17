"use client"

import { motion } from "framer-motion"

export function OrbitRings() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <motion.div
        className="absolute left-1/2 top-[44%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cloud-cyan/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 46, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        className="absolute left-1/2 top-[44%] h-[500px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-infra-cyan/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 54, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        className="absolute left-1/2 top-[44%] h-[620px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-subtle-indigo/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 68, ease: "linear", repeat: Infinity }}
      />
    </div>
  )
}
