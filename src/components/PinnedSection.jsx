"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function PinnedSection() {
  // Main refs
  const sectionRef = useRef(null)
  const circleRef = useRef(null)
  const initialTextRef = useRef(null)
  const finalTextRef = useRef(null)

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger)

    // Make sure all ScrollTrigger instances are properly killed
    const cleanup = () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionRef.current) {
          st.kill(true)
        }
      })
    }

    // Clean up any existing ScrollTrigger instances
    cleanup()

    // Set initial states
    gsap.set(circleRef.current, { scale: 1, backgroundColor: "white" })
    gsap.set(initialTextRef.current, { opacity: 1 })
    gsap.set(finalTextRef.current, { opacity: 0 })

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%", // Shorter scroll distance for smoother effect
        pin: true,
        scrub: 0.5, // Smoother scrub
        anticipatePin: 1,
        fastScrollEnd: true, // Better performance for fast scrolling
        preventOverlaps: true,
        invalidateOnRefresh: true, // Important for responsive design
      },
    })

    // SIMPLIFIED ANIMATION SEQUENCE

    // 1. Initial state to mid-zoom (0-50%)
    tl.to(
      circleRef.current,
      {
        scale: 5,
        backgroundColor: "#9333EA",
        ease: "power1.inOut",
        duration: 0.5,
      },
      0,
    )

    // Fade out initial text during first half
    tl.to(
      initialTextRef.current,
      {
        opacity: 0,
        ease: "power1.out",
        duration: 0.2,
      },
      0.1,
    )

    // 2. Mid-zoom to final state (50-100%)
    tl.to(
      circleRef.current,
      {
        scale: 17,
        backgroundColor: "#E9D5FF",
        boxShadow: "0 0 50px 20px rgba(233, 213, 255, 0.3)",
        ease: "power2.inOut",
        duration: 0.5,
      },
      0.5,
    )

    // Fade in final text during second half
    tl.to(
      finalTextRef.current,
      {
        opacity: 1,
        ease: "power2.in",
        duration: 0.2,
      },
      0.7,
    )

    // Return cleanup function
    return cleanup
  }, [])

  return (
    <section
      id="pinned-section" // Added ID for custom cursor targeting
      ref={sectionRef}
      className="flex items-center justify-center bg-black relative"
      style={{ overscrollBehavior: "none" }} // Prevent scroll bouncing
    >
      {/* Simple circle with minimal nesting */}
      <div
        ref={circleRef}
        className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-100 flex items-center justify-center relative transition-shadow duration-1000"
      >
        {/* Initial text */}
        <p
          ref={initialTextRef}
          className="text-black font-bold text-base sm:text-lg md:text-xl absolute inset-0 flex items-center justify-center text-center"
        >
          SCROLL FOR TRUST
        </p>

        {/* Final text */}
        <div
          ref={finalTextRef}
          className="text-center relative flex flex-col items-center justify-center opacity-0 px-6"
        >
          <h1 className="text-black text-lg sm:text-xl md:text-2xl font-semibold leading-snug mb-4">
            Certified for Crypto Payments
          </h1>

          <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            GamePort runs automated KYC, purchase risk scoring, and smart escrow release on every order. Our operations
            team monitors 24/7 so your crypto settlements stay compliant, traceable, and player-friendly.
          </p>

          <button
            className="mt-6 px-6 py-2.5 rounded-xl bg-black hover:bg-white hover:text-black transition-all duration-500 shadow-md hover:shadow-lg hover:shadow-violet-200 text-sm sm:text-base"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Compliance
          </button>
        </div>
      </div>
    </section>
  )
}
