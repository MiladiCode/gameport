"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ParallaxSection from "./components/ParallaxSection"
import HorizontalScrollSection from "./components/HorizontalScrollSection"
import PinnedSection from "./components/PinnedSection"
import Footer from "./components/Footer"
import ProgressBar from "./components/ProgressBar"
import CustomCursor from "./components/CustomCursor"
import ContactSection from "./components/ContactSection"
import LegalSection from "./components/LegalSection"

function App() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Refresh ScrollTrigger when the page is fully loaded
    ScrollTrigger.refresh()

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      <Header />
      <HeroSection />
      <ParallaxSection />
      <HorizontalScrollSection />
      <PinnedSection />
      <ContactSection />
      <LegalSection />
      <Footer />
      <ProgressBar/>
      <CustomCursor />
    </>
  )
}

export default App
