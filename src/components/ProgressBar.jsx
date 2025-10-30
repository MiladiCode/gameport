"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function ProgressBar() {
  const progressBarRef = useRef(null)
  const progressFillRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Create a GSAP animation that updates the width of the progress bar
    // based on the scroll position
    gsap.to(progressFillRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3, // Smooth updating
        onUpdate: (self) => {
          // Optional: You can add additional effects based on progress
          const progress = self.progress.toFixed(2)

          // Change color based on progress
          if (progress > 0.75) {
            gsap.to(progressFillRef.current, { backgroundColor: "#E9D5FF", duration: 0.5 })
          } else if (progress > 0.5) {
            gsap.to(progressFillRef.current, { backgroundColor: "#A855F7", duration: 0.5 })
          } else if (progress > 0.25) {
            gsap.to(progressFillRef.current, { backgroundColor: "#7E22CE", duration: 0.5 })
          } else {
            gsap.to(progressFillRef.current, { backgroundColor: "#4A1D96", duration: 0.5 })
          }
        },
      },
    })

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === document.body) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <div ref={progressBarRef} className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
      <div
        ref={progressFillRef}
        className="h-full w-0 bg-purple-600 transition-colors duration-300"
        style={{ width: "0%" }}
      />
    </div>
  )
}
