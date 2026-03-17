"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useMemo, useRef } from "react"

type Direction = "up" | "left" | "right"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: Direction
}

const axisByDirection: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" })
  const reduceMotion = useReducedMotion()

  const offsets = useMemo(() => axisByDirection[direction], [direction])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: offsets.x, y: offsets.y }}
      animate={
        isInView || reduceMotion
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: offsets.x, y: offsets.y }
      }
      transition={{ duration: 0.6, ease: "easeOut", delay: reduceMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}