"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"

export function MusicToggle() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Initialize an HTMLAudioElement for ambient music
    const audio = new Audio()
    const mainSrc = "/music/song.mp3" // public/ is the server root, so use /music
    audio.src = mainSrc
    audio.preload = "auto"
    audio.loop = true
    audio.volume = 0.3

    // If the file fails to load, swap in a tiny silent fallback
    audio.addEventListener("error", () => {
      console.warn(`Unable to load audio file "${mainSrc}". Switching to silent fallback.`)
      audio.src =
        "data:audio/mpeg;base64,//uQxAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAA..."
    })

    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ""
    }
  }, [])

  const toggleMusic = async () => {
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      try {
        await audioRef.current.play()
        setPlaying(true)
      } catch (err) {
        console.warn("audio play failed", err)
      }
    }
  }

  return (
    <motion.button
      onClick={toggleMusic}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-card border-2 border-border shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      aria-label={playing ? "Mute music" : "Play music"}
    >
      {playing ? (
        <Volume2 className="h-5 w-5 text-primary" />
      ) : (
        <VolumeX className="h-5 w-5 text-muted-foreground" />
      )}
    </motion.button>
  )
}
