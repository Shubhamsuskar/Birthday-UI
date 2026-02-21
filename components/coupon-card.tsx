"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Gift, Check } from "lucide-react"

interface CouponCardProps {
  id: string
  title: string
  description: string
  redeemed: boolean
  onRedeem: (id: string) => void
}

export function CouponCard({
  id,
  title,
  description,
  redeemed,
  onRedeem,
}: CouponCardProps) {
  return (
    <motion.div
      layout
      className={`relative rounded-xl border-2 p-4 transition-colors ${
        redeemed
          ? "border-primary/30 bg-rose-light"
          : "border-border bg-card hover:border-primary/40 hover:shadow-md"
      }`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex-shrink-0 rounded-full p-2 ${
            redeemed ? "bg-primary/20" : "bg-secondary"
          }`}
        >
          <Gift
            className={`h-5 w-5 ${
              redeemed ? "text-primary" : "text-muted-foreground"
            }`}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4
            className={`font-semibold text-sm ${
              redeemed ? "text-primary" : "text-card-foreground"
            }`}
          >
            {title}
          </h4>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-3 flex justify-end">
        <AnimatePresence mode="wait">
          {redeemed ? (
            <motion.div
              key="redeemed"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1.5"
            >
              <Check className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary">
                Redeemed
              </span>
            </motion.div>
          ) : (
            <motion.button
              key="redeem"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onRedeem(id)}
              className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              Redeem Later
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {redeemed && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute top-2 right-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary/30"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
