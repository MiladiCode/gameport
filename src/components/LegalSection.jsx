"use client"

import { motion } from "framer-motion"

const policies = [
  {
    id: "terms",
    title: "Terms of Service",
    summary:
      "Access to GamePort requires a verified account and agreement to our anti-fraud monitoring. Orders are fulfilled instantly with replacement coverage on activation conflicts. Crypto transactions are final once on-chain confirmations are complete.",
    bullets: [
      "All keys sourced from licensed distributors with audit trails.",
      "Chargebacks and fraudulent activity lead to immediate account suspension.",
      "Refunds issued in store credit within 24 hours when a publisher recall occurs.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    summary:
      "We collect only essential information to process orders, prevent fraud, and comply with payment regulation. Cryptomus handles wallet data; GamePort stores hashed references only.",
    bullets: [
      "Personal data encrypted in transit and at rest with regional hosting.",
      "No sale of customer information—data used strictly for fulfilment and compliance.",
      "GDPR and CCPA rights honored with self-service data export and deletion.",
    ],
  },
]

const LegalSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#08010f] via-[#050010] to-[#06000d] py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute top-0 right-1/3 h-72 w-72 rounded-full bg-violet-700/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-fuchsia-600/20 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-violet-300/70">Transparency</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">Policies Built for Trust</h2>
          <p className="mt-4 text-base md:text-lg text-purple-200/80">
            GamePort meets the disclosure requirements for Cryptomus merchants with clear terms and privacy controls.
            Review the highlights below or contact support for the full documentation set.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <motion.article
              key={policy.id}
              id={policy.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="h-full rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 shadow-[0px_30px_60px_rgba(93,26,175,0.3)]"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">{policy.title}</h3>
              <p className="text-sm text-purple-100/80 leading-relaxed">{policy.summary}</p>
              <ul className="mt-6 space-y-3 text-sm text-purple-100/75">
                {policy.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center mt-8 text-xs uppercase tracking-[0.3em] text-violet-200/80 hover:text-white transition-colors"
              >
                Request Full Policy PDF
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LegalSection

