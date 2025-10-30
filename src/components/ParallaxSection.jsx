"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const highlights = [
  {
    title: "Global catalogue",
    description: "3,500+ PC, console, and indie titles sourced directly from verified publishers.",
  },
  {
    title: "Secure fulfillment",
    description: "Automated fraud screening, encrypted key vaults, and order tracking for every buyer.",
  },
  {
    title: "Flexible payments",
    description: "Instant crypto settlements plus cards and wallets in 80+ countries.",
  },
  {
    title: "Player-first support",
    description: "Live specialists and a published SLA backed by 24/7 monitoring.",
  },
]

export default function ParallaxSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const introRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    )

    gsap.fromTo(
      introRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-black via-[#0b0418] to-[#120426] py-32"
    >
      <div className="absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -top-28 -left-32 h-96 w-96 rounded-full bg-violet-700/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-white">
              About GamePort
            </h2>
            <p className="text-lg md:text-xl text-purple-100/90">
              GamePort is a curated marketplace built for gamers who demand instant access, transparent pricing, and
              flexible payments. Every key is sourced through official distributors, double-verified by our compliance
              team, and stored in a secure delivery vault so you can redeem with confidence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-purple-100/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                <p className="text-3xl font-semibold text-white">10k+</p>
                <p>transactions settled safely through Cryptomus and global payment partners.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                <p className="text-3xl font-semibold text-white">98%</p>
                <p>customer satisfaction rating with guaranteed replacement on activation issues.</p>
              </div>
            </div>
          </div>

          <div ref={introRef} className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur-xl shadow-lg shadow-violet-500/10"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-sm text-purple-100/80 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
