import React from "react"
import { motion } from "framer-motion"

export default function FadeAnimations({
  children,
  fadeDirection,
  ...rest
}: {
  children: React.ReactNode
  fadeDirection: "left" | "right" | "up" | "down"
  rest?: any
}) {
  const animationConfigurations = {
    left: { opacity: 0, translateX: 40 },
    right: { opacity: 0, translateX: -40 },
    up: { opacity: 0, translateY: 50 },
    down: { opacity: 0, translateY: -40 },
  }

  const initialConfig = animationConfigurations[fadeDirection] || {
    opacity: 0,
    translateX: 40,
  }

  const viewConfigurations = {
    left: { opacity: 1, translateX: 0 },
    right: { opacity: 1, translateX: 0 },
    up: { opacity: 1, translateY: 0 },
    down: { opacity: 1, translateY: 0 },
  }

  const viewConfig = viewConfigurations[fadeDirection] || {
    opacity: 1,
    translateX: 0,
  }

  return (
    <motion.div
      style={{
        margin: 0,
        padding: 0,
      }}
      initial={initialConfig}
      transition={{ ease: "backInOut", duration: 0.9 }}
      whileInView={viewConfig}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
