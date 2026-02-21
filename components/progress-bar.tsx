"use client"

import { motion } from "framer-motion"

interface ProgressBarProps {
  opened: number
  total: number
}

export function ProgressBar({ opened, total }: ProgressBarProps) {
  const percentage = (opened / total) * 100

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-muted-foreground">
          Days Opened
        </span>
        <span className="text-sm font-semibold text-primary">
          {opened} / {total}
        </span>
      </div>
      <div className="h-3 rounded-full bg-secondary overflow-hidden shadow-inner">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #f8bbd0, #e8739a, #d4507a)",
          }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      {opened === total && (
        <motion.p
          className="text-center text-sm text-primary font-medium mt-2"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          All days unlocked! Happy Birthday!
        </motion.p>
      )}
    </div>
  )
}
