import { FiTwitter, FiInstagram, FiMessageCircle } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-[#05000a] to-[#040107] border-t border-white/5 text-white mt-32">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-10 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-black font-extrabold">
                GP
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight">GamePort</p>
                <p className="text-xs uppercase tracking-[0.35em] text-violet-200/80">Crypto Gaming Hub</p>
              </div>
            </div>
            <p className="text-sm text-purple-100/80 leading-relaxed">
              Premium marketplace for verified digital games, instant key delivery, and crypto-ready checkout. Trusted by
              global publishers and audited for anti-fraud compliance.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.35em] text-violet-200/80">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-purple-100/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#games" className="hover:text-white transition-colors">
                  Featured Games
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.35em] text-violet-200/80">Compliance</h3>
            <ul className="mt-4 space-y-2 text-sm text-purple-100/80">
              <li>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Report an Issue
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.35em] text-violet-200/80">Contact</h3>
            <div className="space-y-2 text-sm text-purple-100/80">
              <p>support.gameport@gmail.com</p>
              <p>+1 (844) 555-GAME</p>
              <p>Silicon Arcade, Suite 12, San Francisco, CA</p>
            </div>
            <div className="flex space-x-4 text-purple-100/80">
              <a
                href="https://x.com/Miladi_Code"
                className="hover:text-white transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="hover:text-white transition-colors" aria-label="Instagram">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/milad-abdi-899bb32b2/"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <FiMessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-purple-200/60">
          <p>© GamePort 2025. Fully compliant with Cryptomus merchant policies.</p>
          <p>Instant delivery • Fraud monitored • PCI & GDPR aligned</p>
        </div>
      </div>
    </footer>
  )
}
