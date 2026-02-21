"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lock, Unlock, Heart, ChevronDown, ChevronUp, Sparkles } from "lucide-react"
import type { DayData } from "@/lib/day-data"
import { CouponCard } from "./coupon-card"

interface DayCardProps {
  day: DayData
  isUnlocked: boolean
  redeemedCoupons: string[]
  onUnlock: (dayNumber: number, answer: string) => boolean
  onRedeem: (couponId: string) => void
}

function HeartBurst() {
  const hearts = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * 360
    const rad = (angle * Math.PI) / 180
    const distance = 60 + Math.random() * 40
    return {
      id: i,
      x: Math.cos(rad) * distance,
      y: Math.sin(rad) * distance,
      scale: 0.5 + Math.random() * 0.8,
      rotation: Math.random() * 360,
    }
  })

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
          animate={{
            x: h.x,
            y: h.y,
            scale: h.scale,
            opacity: 0,
            rotate: h.rotation,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute"
        >
          <Heart className="h-4 w-4 text-primary fill-primary" />
        </motion.div>
      ))}
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute rounded-full bg-primary/20 w-8 h-8"
      />
    </div>
  )
}

export function DayCard({
  day,
  isUnlocked,
  redeemedCoupons,
  onUnlock,
  onRedeem,
}: DayCardProps) {
  const [answer, setAnswer] = useState("")
  const [error, setError] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [shakeKey, setShakeKey] = useState(0)
  const [showBurst, setShowBurst] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const success = onUnlock(day.day, answer)
    if (success) {
      setShowBurst(true)
      setExpanded(true)
      setError(false)
      setTimeout(() => setShowBurst(false), 1000)
    } else {
      setError(true)
      setShakeKey((k) => k + 1)
      setTimeout(() => setError(false), 2500)
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: day.day * 0.05 }}
      className="w-full relative"
    >
      {showBurst && <HeartBurst />}

      {!isUnlocked ? (
        /* Locked card */
        <motion.div
          key={`locked-${shakeKey}`}
          animate={
            error
              ? { x: [0, -10, 10, -10, 10, 0] }
              : {}
          }
          transition={{ duration: 0.4 }}
          className="animate-gentle-pulse"
        >
          <div className="relative overflow-hidden rounded-2xl border-2 border-border bg-card/80 backdrop-blur-sm shadow-sm">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                background:
                  "repeating-linear-gradient(45deg, transparent, transparent 10px, #e8739a 10px, #e8739a 11px)",
              }}
            />
            <div className="relative p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary">
                    <span className="text-sm font-bold text-secondary-foreground font-serif">
                      {day.day}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">
                      Day {day.day}
                    </h3>
                    <p className="text-xs text-muted-foreground">Locked</p>
                  </div>
                </div>
                <Lock className="h-5 w-5 text-muted-foreground" />
              </div>

              {/* Riddle display */}
              <div className="mb-4 rounded-xl bg-rose-light p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">Riddle</span>
                </div>
                <p className="text-sm text-card-foreground leading-relaxed font-serif italic">
                  {`"${day.riddle}"`}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Your answer..."
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className={`flex-1 rounded-xl border-2 bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${
                    error
                      ? "border-destructive"
                      : "border-border focus:border-primary/50"
                  }`}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <Unlock className="h-4 w-4" />
                  <span className="sr-only">Unlock Day {day.day}</span>
                </motion.button>
              </form>

              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-xs text-destructive mt-2 font-medium"
                  >
                    Not quite, try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      ) : (
        /* Unlocked card */
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="rounded-2xl border-2 border-primary/30 bg-card shadow-lg shadow-primary/5 overflow-hidden"
        >
          {/* Card header */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full p-5 flex items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/15">
                <Heart className="h-5 w-5 text-primary fill-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-card-foreground">
                  Day {day.day}
                </h3>
                <p className="text-xs text-primary font-medium">Unlocked</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {expanded ? (
                <ChevronUp className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              )}
            </motion.div>
          </button>

          {/* Expanded content */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 space-y-6">
                  {/* Divider */}
                  <div className="h-px bg-border" />

                  {/* Love Note Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-base">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary inline-block">
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </span>
                      <h4 className="font-semibold text-sm text-card-foreground">
                        Love Note
                      </h4>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="rounded-xl overflow-hidden mb-4 bg-muted/50 flex items-center justify-center"
                    >
                      <img
                        src={day.imageUrl}
                        alt={`Love note image for day ${day.day}`}
                        className="w-full h-auto object-contain rounded-xl max-h-96"
                        crossOrigin="anonymous"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="rounded-xl bg-rose-light p-4 border border-border"
                    >
                      <p className="text-sm text-card-foreground leading-relaxed font-serif italic">
                        {`"${day.note}"`}
                      </p>
                    </motion.div>
                  </div>

                  {/* Gift Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-base">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary inline-block">
                          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4 15.38 12 17 10.83 14.92 8H20v6z"/>
                        </svg>
                      </span>
                      <h4 className="font-semibold text-sm text-card-foreground">
                        Future Coupons
                      </h4>
                    </div>

                    <div className="space-y-3">
                      {day.coupons.map((coupon, index) => (
                        <motion.div
                          key={coupon.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <CouponCard
                            id={coupon.id}
                            title={coupon.title}
                            description={coupon.description}
                            redeemed={redeemedCoupons.includes(coupon.id)}
                            onRedeem={onRedeem}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </motion.div>
  )
}
