import { motion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";

const tags = [
  "⚡ Fast Delivery", "📱 Mobile Ready", "🔍 SEO Optimised",
  "🔒 Secure & Reliable", "💰 Fixed Pricing", "🛠 Post-launch Support",
];

const cards = [
  {
    icon: "🌐",
    title: "Business Website",
    desc: "Professional, SEO-ready websites that attract clients 24/7",
    tag: "Live in 2 weeks",
    color: "border-blue-200 dark:border-blue-500/30",
    tagColor: "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: "📊",
    title: "Business App",
    desc: "Custom billing, inventory & payroll — built for your workflow",
    tag: "Fully custom",
    color: "border-purple-200 dark:border-purple-500/30",
    tagColor: "bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    icon: "🏢",
    title: "Enterprise Dashboard",
    desc: "Multi-branch operations & reporting in one screen",
    tag: "Scalable",
    color: "border-teal-200 dark:border-teal-500/30",
    tagColor: "bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400",
  },
];

export default function Hero() {
  return (
    <section id="hero" className="relative flex items-center overflow-hidden pt-16">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT — Text content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-2 rounded-full mb-5"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
              Available for new projects
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="leading-tight mb-4"
            >
              <span className="block text-2xl sm:text-3xl font-semibold text-slate-500 dark:text-slate-500 mb-1">
                Problem Identified.
              </span>
              <span className="block text-4xl sm:text-5xl font-black gradient-text mb-1">
                Digital Solution Built.
              </span>
              <span className="block text-2xl sm:text-3xl font-bold text-green-500 dark:text-green-400">
                Business Transformed.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6"
            >
              From identifying your challenge to building the right digital tool —
              I deliver solutions that help your business work better, faster, and smarter.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-6"
            >
              <a
                href="https://wa.me/919920042608"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-green-500/25"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                Let&apos;s Talk on WhatsApp
              </a>
              <a
                href="#portfolio"
                className="flex items-center justify-center gap-2 border-2 border-blue-500 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 font-semibold px-6 py-3 rounded-full text-base transition-all hover:scale-105 shadow-sm hover:shadow-lg hover:shadow-blue-500/25"
              >
                See My Work
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-1.5"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded-full shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Service cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-3"
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className={`bg-white dark:bg-slate-800/70 border ${card.color} rounded-xl p-4 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow`}
              >
                <span className="text-2xl flex-shrink-0 mt-0.5" role="img" aria-label={card.title}>{card.icon}</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <p className="font-bold text-slate-900 dark:text-white text-sm">{card.title}</p>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full flex-shrink-0 ${card.tagColor}`}>
                      {card.tag}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Enquire prompt */}
            <a
              href="#contact"
              className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl p-3 transition-all group shadow-lg shadow-blue-600/20"
            >
              <div>
                <p className="font-bold text-sm">Have a project in mind?</p>
                <p className="text-blue-200 text-xs mt-0.5">Fill the enquiry form — I reply within 24 hours</p>
              </div>
              <svg className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
