"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ScrollFadeProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollFade({ children, className, delay = 0 }: ScrollFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
