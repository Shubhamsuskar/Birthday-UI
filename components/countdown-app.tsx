"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { daysData } from "@/lib/day-data"
import { DayCard } from "./day-card"
import { ProgressBar } from "./progress-bar"
import { FloatingHearts } from "./floating-hearts"
import { MusicToggle } from "./music-toggle"

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      console.error(error)
    }
  }, [key])

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const newValue = value instanceof Function ? value(prev) : value
        try {
          window.localStorage.setItem(key, JSON.stringify(newValue))
        } catch (error) {
          console.error(error)
        }
        return newValue
      })
    },
    [key]
  )

  return [storedValue, setValue]
}

export function CountdownApp() {
  const [unlockedDays, setUnlockedDays] = useLocalStorage<number[]>(
    "birthday-unlocked-days-v2",
    []
  )
  const [redeemedCoupons, setRedeemedCoupons] = useLocalStorage<string[]>(
    "birthday-redeemed-coupons-v2",
    []
  )
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleUnlock = (dayNumber: number, answer: string): boolean => {
    const day = daysData.find((d) => d.day === dayNumber)
    if (day && day.answer.toLowerCase().trim() === answer.toLowerCase().trim()) {
      setUnlockedDays((prev) => {
        if (prev.includes(dayNumber)) return prev
        return [...prev, dayNumber]
      })
      return true
    }
    return false
  }

  const handleRedeem = (couponId: string) => {
    setRedeemedCoupons((prev) => {
      if (prev.includes(couponId)) return prev
      return [...prev, couponId]
    })
  }

  const handleResetData = () => {
    if (confirm("Are you sure you want to reset all progress? All unlocked days and coupons will be locked again.")) {
      localStorage.removeItem("birthday-unlocked-days-v2")
      localStorage.removeItem("birthday-redeemed-coupons-v2")
      window.location.reload()
    }
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Heart className="h-12 w-12 text-primary fill-primary" />
        </motion.div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #f8bbd0 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #e8739a 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #fce4ec 0%, transparent 70%)" }}
        />
      </div>

      <main className="relative z-10 px-4 py-8 md:py-12">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10 md:mb-14"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="inline-block mb-4"
          >
            <Heart className="h-10 w-10 md:h-12 md:w-12 text-primary fill-primary mx-auto" />
          </motion.div>

          <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-3 text-balance">
            17 Days to Your Birthday
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-sm md:text-base max-w-md mx-auto leading-relaxed"
          >
            Each day holds a secret, a love note, and a little gift.
            Unlock them one by one as the countdown begins.
          </motion.p>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <ProgressBar opened={unlockedDays.length} total={17} />
          </motion.div>
        </motion.header>

        {/* Day Cards Grid */}
        <div className="max-w-lg mx-auto space-y-4">
          {daysData.map((day) => (
            <DayCard
              key={day.day}
              day={day}
              isUnlocked={unlockedDays.includes(day.day)}
              redeemedCoupons={redeemedCoupons}
              onUnlock={handleUnlock}
              onRedeem={handleRedeem}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-14 mb-20 md:mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span className="text-sm text-muted-foreground font-medium">
              Made with love, just for you
            </span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
          </div>
          <p className="text-xs text-muted-foreground/60">
            Every day counts when it counts down to you
          </p>
          <button
            onClick={handleResetData}
            className="mt-4 px-3 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors underline"
          >
            Reset Progress (Testing)
          </button>
        </motion.footer>
      </main>

      <MusicToggle />
    </div>
  )
}
