"use client"

import { motion } from "framer-motion"
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi"

const contactDetails = [
  {
    icon: <FiMail className="w-5 h-5" />,
    label: "Support Email",
    value: "support.gameport@gmail.com",
    href: "mailto:support.gameport@gmail.com",
  },
  {
    icon: <FiPhone className="w-5 h-5" />,
    label: "Phone",
    value: "+1 (844) 555-GAME",
    href: "tel:+18445554263",
  },
  {
    icon: <FiMapPin className="w-5 h-5" />,
    label: "HQ",
    value: "Silicon Arcade, Suite 12, San Francisco, CA",
  },
  {
    icon: <FiClock className="w-5 h-5" />,
    label: "Support Hours",
    value: "24/7 priority response for crypto payments",
  },
]

const ContactSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-[#07000f] via-[#0d0220] to-[#080214] py-28 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-12 -left-10 h-96 w-96 rounded-full bg-violet-700/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-fuchsia-600/25 blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-violet-300/70">Talk To GamePort</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">We’re ready to help 24/7</h2>
          <p className="mt-4 text-base md:text-lg text-purple-200/80">
            Cryptomus moderation requires clear support channels—and we deliver. Reach out any time for account
            verification, payout questions, or detailed game sourcing requests. Our team replies within minutes.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-1 space-y-6"
          >
            {contactDetails.map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl px-6 py-5 flex items-start gap-4 text-left shadow-lg shadow-violet-500/15"
              >
                <div className="mt-1 text-violet-200">{item.icon}</div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-purple-200/70">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-lg text-white font-semibold hover:text-violet-300 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg text-white font-semibold">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-10 shadow-[0px_35px_60px_rgba(93,26,175,0.35)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-100/70 mb-2">
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Gamer"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-100/70 mb-2">
                    Work email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@gameport.gg"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="subject" className="block text-sm font-medium text-purple-100/70 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Requesting Cryptomus compliance docs"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
                  required
                />
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-purple-100/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your request. We typically respond in under 15 minutes."
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
                  required
                ></textarea>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white font-semibold shadow-lg shadow-violet-500/30 transition-transform duration-300 hover:scale-105"
                >
                  Send Message
                </button>
                <p className="text-xs uppercase tracking-[0.3em] text-purple-200/70">
                  Response time &lt; 15 mins | Verified support agents
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

