"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FiMenu, FiX, FiTwitter, FiInstagram, FiMessageCircle } from "react-icons/fi"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Games", href: "#games" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen((prev) => !prev)

  const handleCta = () => {
    const target = document.querySelector("#games")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navLink = (item, index) => (
    <motion.a
      key={item.label}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.7 + index * 0.1,
      }}
      href={item.href}
      className="relative text-gray-100 hover:text-violet-400 font-medium transition-colors duration-300 group"
      onClick={() => setIsOpen(false)}
    >
      {item.label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-400 group-hover:w-full transition-all duration-300"></span>
    </motion.a>
  )

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-xl shadow-lg shadow-violet-500/10" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 24, delay: 0.2 }}
            className="flex items-center"
          >
            <a href="#home" className="flex items-center">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-black font-extrabold text-xl mr-3 shadow-lg shadow-violet-500/40">
                GP
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                  GamePort
                </span>
                <span className="text-xs uppercase tracking-[0.35em] text-violet-300/80">Crypto Ready Gaming Store</span>
              </div>
            </a>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring", damping: 18 }}
            className="hidden lg:flex space-x-10"
          >
            {navItems.map(navLink)}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7, type: "spring", damping: 20 }}
            className="hidden md:flex items-center space-x-4"
          >
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              href="https://x.com/Miladi_Code"
              target="_blank"
              rel="noreferrer"
              className="text-gray-200 hover:text-violet-400 transition-colors duration-300"
            >
              <FiTwitter className="w-5 h-5" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-200 hover:text-violet-400 transition-colors duration-300"
            >
              <FiInstagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              href="https://www.linkedin.com/in/milad-abdi-899bb32b2/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-200 hover:text-violet-400 transition-colors duration-300"
            >
              <FiMessageCircle className="w-5 h-5" />
            </motion.a>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.6, type: "spring", stiffness: 140 }}
              onClick={handleCta}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(147,51,234,0.35)" }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-violet-500/30"
            >
              Shop Games
            </motion.button>
          </motion.div>

          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-100 hover:text-violet-400 focus:outline-none"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-black/90 backdrop-blur-lg border-t border-white/5"
      >
        <div className="px-6 py-6 space-y-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg text-gray-100 hover:text-violet-400 font-medium transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10">
            <div className="flex space-x-5">
              <a href="https://x.com/Miladi_Code" className="text-gray-300 hover:text-violet-400 transition-colors duration-300" target="_blank" rel="noreferrer">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-violet-400 transition-colors duration-300">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/milad-abdi-899bb32b2/"
                className="text-gray-300 hover:text-violet-400 transition-colors duration-300"
                target="_blank"
                rel="noreferrer"
              >
                <FiMessageCircle className="w-5 h-5" />
              </a>
            </div>
            <button
              className="mt-5 block w-full px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white font-semibold text-center transition-all duration-300 shadow-lg shadow-violet-500/20"
              onClick={handleCta}
            >
              Shop Games
            </button>
          </div>
        </div>
      </motion.div>
    </header>
  )
}

export default Header

