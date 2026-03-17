"use client"

import { useEffect, useRef } from "react"

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    let animationFrame: number

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        glow.style.setProperty("--glow-x", `${e.clientX}px`)
        glow.style.setProperty("--glow-y", `${e.clientY}px`)
        glow.style.opacity = "1"
      })
    }

    const handleMouseLeave = () => {
      glow.style.opacity = "0"
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrame)
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 opacity-0 transition-opacity duration-300"
      style={{
        background: `
          radial-gradient(
            600px circle at var(--glow-x, 50%) var(--glow-y, 50%),
            rgb(34 211 238 / 0.14),
            transparent 40%
          ),
          radial-gradient(
            800px circle at var(--glow-x, 50%) var(--glow-y, 50%),
            rgb(56 189 248 / 0.1),
            transparent 52%
          ),
          radial-gradient(
            920px circle at var(--glow-x, 50%) var(--glow-y, 50%),
            rgb(99 102 241 / 0.08),
            transparent 50%
          )
        `,
      }}
    />
  )
}
