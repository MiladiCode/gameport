"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export default function CustomCursor() {
  // Refs for cursor elements
  const cursorRef = useRef(null)
  const cursorBorderRef = useRef(null)
  const followerRef = useRef(null)

    // Hide cursor on mobile devices
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches

  if (isMobile) {
    return null
  }

  // State to track current cursor type
  const [cursorType, setCursorType] = useState("default")

  useEffect(() => {
    // Get cursor elements
    const cursor = cursorRef.current
    const cursorBorder = cursorBorderRef.current
    const follower = followerRef.current

    // Initial position off-screen
    gsap.set([cursor, cursorBorder, follower], { xPercent: -50, yPercent: -50 })

    // Variables for cursor position
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" })
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" })

    // Variables for border position (slightly slower for trailing effect)
    const xToBorder = gsap.quickTo(cursorBorder, "x", { duration: 0.5, ease: "power3.out" })
    const yToBorder = gsap.quickTo(cursorBorder, "y", { duration: 0.5, ease: "power3.out" })

    // Variables for follower position (slowest for more dramatic effect)
    const xToFollower = gsap.quickTo(follower, "x", { duration: 0.8, ease: "power3.out" })
    const yToFollower = gsap.quickTo(follower, "y", { duration: 0.8, ease: "power3.out" })

    // Mouse move handler
    const handleMouseMove = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
      xToBorder(e.clientX)
      yToBorder(e.clientY)
      xToFollower(e.clientX)
      yToFollower(e.clientY)
    }

    // Add mouse move listener
    window.addEventListener("mousemove", handleMouseMove)

    // Set up hover interactions for different elements
    const setupHoverInteractions = () => {
      // Text elements (headings and paragraphs)
      const textElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a")

      textElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          setCursorType("text")
          gsap.to(cursor, {
            width: "40px",
            height: "40px",
            opacity: 0.5,
            backgroundColor: "#E9D5FF",
            mixBlendMode: "difference",
            duration: 0.3,
          })
          gsap.to(cursorBorder, {
            width: "60px",
            height: "60px",
            borderColor: "#E9D5FF",
            mixBlendMode: "difference",
            duration: 0.3,
          })
          gsap.to(follower, {
            width: "100px",
            height: "100px",
            opacity: 0.1,
            duration: 0.3,
          })
        })

        element.addEventListener("mouseleave", () => {
          setCursorType("default")
          resetCursor()
        })
      })

      // Interactive elements (buttons)
      const buttons = document.querySelectorAll("button, .panel")

      buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          setCursorType("button")
          gsap.to(cursor, {
            width: "15px",
            height: "15px",
            backgroundColor: "#A855F7",
            mixBlendMode: "screen",
            duration: 0.3,
          })
          gsap.to(cursorBorder, {
            width: "70px",
            height: "70px",
            borderRadius: "8px",
            borderColor: "#A855F7",
            borderWidth: "2px",
            opacity: 0.5,
            duration: 0.3,
          })
          gsap.to(follower, {
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            opacity: 0.2,
            duration: 0.3,
          })
        })

        button.addEventListener("mouseleave", () => {
          setCursorType("default")
          resetCursor()
        })
      })

      // Images and media
      const mediaElements = document.querySelectorAll("img, video, canvas")

      mediaElements.forEach((media) => {
        media.addEventListener("mouseenter", () => {
          setCursorType("media")
          gsap.to(cursor, {
            width: "30px",
            height: "30px",
            backgroundColor: "transparent",
            border: "2px solid white",
            mixBlendMode: "exclusion",
            duration: 0.3,
          })
          gsap.to(cursorBorder, {
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            borderColor: "white",
            opacity: 0.3,
            duration: 0.3,
          })
          gsap.to(follower, {
            width: "150px",
            height: "150px",
            opacity: 0.1,
            duration: 0.3,
          })
        })

        media.addEventListener("mouseleave", () => {
          setCursorType("default")
          resetCursor()
        })
      })

      // Special elements - pinned section
      const pinnedSection = document.querySelector("#pinned-section")

      if (pinnedSection) {
        pinnedSection.addEventListener("mouseenter", () => {
          setCursorType("pinned")
          gsap.to(cursor, {
            width: "50px",
            height: "50px",
            backgroundColor: "#7E22CE",
            mixBlendMode: "lighten",
            borderRadius: "50%",
            duration: 0.3,
          })
          gsap.to(cursorBorder, {
            width: "90px",
            height: "90px",
            borderColor: "#7E22CE",
            borderRadius: "50%",
            opacity: 0.5,
            duration: 0.3,
          })
          gsap.to(follower, {
            width: "180px",
            height: "180px",
            opacity: 0.15,
            duration: 0.3,
          })
        })

        pinnedSection.addEventListener("mouseleave", () => {
          setCursorType("default")
          resetCursor()
        })
      }
    }

    // Reset cursor to default state
    const resetCursor = () => {
      gsap.to(cursor, {
        width: "10px",
        height: "10px",
        backgroundColor: "white",
        mixBlendMode: "difference",
        borderRadius: "50%",
        border: "none",
        opacity: 1,
        duration: 0.3,
      })
      gsap.to(cursorBorder, {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        borderColor: "white",
        borderWidth: "1px",
        opacity: 0.5,
        duration: 0.3,
      })
      gsap.to(follower, {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        opacity: 0.1,
        duration: 0.3,
      })
    }

    // Initialize hover interactions after a short delay to ensure DOM is ready
    setTimeout(setupHoverInteractions, 1000)

    // Add click animation
    document.addEventListener("mousedown", () => {
      gsap.to([cursor, cursorBorder, follower], {
        scale: 0.8,
        duration: 0.2,
      })
    })

    document.addEventListener("mouseup", () => {
      gsap.to([cursor, cursorBorder, follower], {
        scale: 1,
        duration: 0.2,
      })
    })

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", () => {})
      document.removeEventListener("mouseup", () => {})

      // Remove all event listeners from elements
      const allElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, button, .panel, img, video, canvas")
      allElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => {})
        el.removeEventListener("mouseleave", () => {})
      })

      const pinnedSection = document.querySelector("#pinned-section")
      if (pinnedSection) {
        pinnedSection.removeEventListener("mouseenter", () => {})
        pinnedSection.removeEventListener("mouseleave", () => {})
      }
    }
  }, [])



  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="custom-cursor fixed top-0 left-0 w-[10px] h-[10px] bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ mixBlendMode: "difference" }}
      />

      {/* Cursor border */}
      <div
        ref={cursorBorderRef}
        className="custom-cursor-border fixed top-0 left-0 w-[40px] h-[40px] rounded-full border border-white pointer-events-none z-[9998]"
        style={{ opacity: 0.5, mixBlendMode: "difference" }}
      />

      {/* Cursor follower (larger, more subtle element) */}
      <div
        ref={followerRef}
        className="custom-cursor-follower fixed top-0 left-0 w-[80px] h-[80px] rounded-full bg-white pointer-events-none z-[9997]"
        style={{ opacity: 0.1 }}
      />
    </>
  )
}
