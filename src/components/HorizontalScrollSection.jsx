"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SlShareAlt } from "react-icons/sl"

export default function HorizontalScrollSection() {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)
  const horizontalRef = useRef(null)
  const titleRef = useRef(null)
  const titleLineRef = useRef(null)

  // Project videos data
  const projectVideos = [
    {
      id: 1,
      title: "Neon Drift 2099",
      genre: "Racing • Multiplayer",
      price: "$49",
      videoSrc: "videos/project-1.mp4",
    },
    {
      id: 2,
      title: "Starforge Exodus",
      genre: "Sci-fi RPG",
      price: "$59",
      videoSrc: "videos/project-2.mp4",
    },
    {
      id: 3,
      title: "Spectrum Tactics",
      genre: "Strategy • Co-op",
      price: "$39",
      videoSrc: "videos/project-3.mp4",
    },
    {
      id: 4,
      title: "Pulse Arena VR",
      genre: "VR Shooter",
      price: "$44",
      videoSrc: "videos/project-4.mp4",
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // VERTICAL SCROLLING EFFECTS

    // 1. Title reveal animation
    gsap.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // 2. Title line animation
    gsap.fromTo(
      titleLineRef.current,
      {
        width: "0%",
        opacity: 0,
      },
      {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // 3. Section entrance effect
    gsap.fromTo(
      triggerRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // 4. Parallax effect for the entire section
    gsap.fromTo(
      sectionRef.current,
      {
        backgroundPosition: "50% 0%",
      },
      {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    )

    // HORIZONTAL SCROLLING

    // Create the horizontal scroll animation
    const horizontalScroll = gsap.to(".panel", {
      xPercent: -100 * (projectVideos.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${horizontalRef.current.offsetWidth}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (projectVideos.length - 1),
          duration: { min: 0.2, max: 0.3 },
          delay: 0.1,
        },
        invalidateOnRefresh: true,
      },
    })

    // VIDEO ANIMATIONS

    // Animate each video panel
    const panels = gsap.utils.toArray(".panel")
    panels.forEach((panel, i) => {
      const video = panel.querySelector(".project-video")
      const videoTitle = panel.querySelector(".project-title")

      // Create a timeline for each panel
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScroll,
          start: "left right",
          end: "right left",
          scrub: true,
        },
      })

      // Video scale and opacity animation
      tl.fromTo(video, { scale: 0.8, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 0.5 })

      // Title animation if it exists
      if (videoTitle) {
        tl.fromTo(videoTitle, { y: 100, }, { y: -100, duration: 0.3, }, 0.2)
      }
    })

    // Play/pause videos based on visibility
    const handleVideoVisibility = () => {
      const videos = document.querySelectorAll(".project-video")

      videos.forEach((video) => {
        const rect = video.getBoundingClientRect()
        const isVisible = rect.left < window.innerWidth && rect.right > 0

        if (isVisible && video.paused) {
          video.play().catch((e) => console.log("Video play error:", e))
        } else if (!isVisible && !video.paused) {
          video.pause()
        }
      })
    }

    // Set up scroll listener for video playback
    window.addEventListener("scroll", handleVideoVisibility)

    // Initial check
    handleVideoVisibility()

    return () => {
      // Clean up
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current || trigger.vars.trigger === triggerRef.current) {
          trigger.kill()
        }
      })
      window.removeEventListener("scroll", handleVideoVisibility)
    }
  }, [projectVideos.length])

  return (
    <section
      id="games"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-[#0b0214] via-[#14042a] to-[#08010f]"
      style={{
        overflow: "hidden",
      }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-20 left-1/4 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/5 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      {/* Section Title */}
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 opacity-0">
          Featured Releases
        </h2>
        <div ref={titleLineRef} className="w-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 mx-auto opacity-0"></div>
        <p className="mt-6 text-center text-purple-200/80 max-w-2xl mx-auto text-sm md:text-base">
          Discover the most requested titles on GamePort this week. Every purchase includes instant key delivery, secure
          storage, and support-ready replacements if activation ever fails.
        </p>
      </div>

      {/* Horizontal Scroll Section */}
      <div ref={triggerRef} className="overflow-hidden opacity-0">
        <div ref={horizontalRef} className="horizontal-section">
          {projectVideos.map((project) => (
            <div key={project.id} className="panel relative flex items-center justify-center px-6">
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <video
                  className="project-video max-w-full max-h-full rounded-3xl object-cover border border-white/10 shadow-[0px_25px_60px_rgba(93,26,175,0.35)]"
                  src={project.videoSrc}
                  muted
                  loop
                  playsInline
                />
                <div className="project-title mt-8 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 text-white shadow-lg shadow-violet-500/15">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-purple-200/80 mb-3">GamePort Exclusive</p>
                    <h3 className="text-2xl md:text-3xl font-semibold flex items-center gap-3">
                      {project.title}
                      <SlShareAlt className="text-purple-200/70" />
                    </h3>
                    <p className="text-sm text-purple-100/80 mt-2">{project.genre}</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="text-3xl font-semibold text-violet-200">{project.price}</span>
                    <a
                      href="#contact"
                      className="px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-sm font-semibold shadow-lg shadow-violet-500/25 transition-transform duration-300 hover:scale-105"
                    >
                      Request Key
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
