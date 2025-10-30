"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Spline from "@splinetool/react-spline"
import { motion } from "framer-motion"

export default function HeroSection() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const subheadingRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })

    tl.to(
      headingRef.current,
      {
        y: 200,
        opacity: 0,
        ease: "power2.inOut",
      },
      0,
    )

    tl.to(
      subheadingRef.current,
      {
        y: 400,
        opacity: 0,
        ease: "power2.inOut",
      },
      0,
    )


    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
    }
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="h-screen flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0216] via-[#110627] to-black z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(147,51,234,0.35),transparent_55%)]" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          delay: 1.0,
          duration: 1.8,
        }}
        className="z-40 flex flex-col xl:mb-0 mb-[20%] max-w-2xl"
      >
        <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 2.0,
          }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-start text-white z-10 mb-6 leading-[1.05]"
        >
          Your Gateway to the Best Digital Games
        </motion.h1>
        <motion.p
          ref={subheadingRef}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 2.0,
          }}
          className="text-lg md:text-xl lg:text-2xl text-purple-200/90 text-start z-10"
        >
          GamePort curates premium PC and console keys, indie favorites, and AAA blockbusters with instant delivery,
          verified publishers, and crypto-ready checkout. We make building your dream library secure, seamless, and fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8, type: "spring", stiffness: 100 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button
            onClick={() => document.querySelector("#games")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white font-semibold shadow-lg shadow-violet-500/30 hover:shadow-fuchsia-500/50 transition-all duration-300"
          >
            Browse Featured Games
          </button>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-violet-400/40 text-violet-200 hover:text-white hover:border-violet-300/80 transition-all duration-300 backdrop-blur-sm"
          >
            Contact Support
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8, type: "spring", stiffness: 80 }}
          className="mt-12 grid gap-4 sm:grid-cols-2"
        >
          {["Instant digital delivery", "Crypto & fiat checkout", "100% verified game keys", "24/7 player support"].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm md:text-base text-purple-200/80 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3"
            >
              <span className="text-violet-300 text-lg">•</span>
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <Spline
        className="z-10 absolute xl:right-[-25%] right-[-10%] xl:top-0 top-[-18%] w-[140%] max-w-none"
        scene="https://prod.spline.design/xjQFy-JzKcwAc59B/scene.splinecode"
      />
    </section>
  )
}
