import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 px-4 sm:px-6 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Live Projects
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-3 mb-3">
            Real Work. <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto">
            Every project below is live and working for a real client. Click to see it in action.
          </p>
        </motion.div>

        <div className="space-y-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl overflow-hidden card-hover group shadow-sm dark:shadow-none"
            >
              <div className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl" role="img" aria-label={p.name}>{p.icon}</span>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${p.color} text-white`}>
                        {p.priority}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2">{p.tagline}</p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm">
                      {p.description}
                    </p>

                    {/* Highlights — first 2 on mobile, all on desktop */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
                      {p.highlights.map((h, hi) => (
                        <li
                          key={hi}
                          className={`flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300 ${hi >= 2 ? "hidden sm:flex" : ""}`}
                        >
                          <span className="text-blue-500 dark:text-blue-400 mt-0.5" aria-hidden="true">✦</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="text-xs bg-slate-100 dark:bg-slate-700/80 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right CTA */}
                  <div className="sm:pl-5 sm:border-l sm:border-slate-200 dark:sm:border-slate-700 flex flex-col items-stretch sm:items-end justify-between gap-2 sm:min-w-[160px]">
                    {p.liveUrl ? (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 bg-gradient-to-r ${p.color} text-white font-bold px-5 py-2.5 rounded-full text-sm hover:opacity-90 transition-opacity shadow-lg`}
                      >
                        View Live
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <span className="text-xs text-slate-500 dark:text-slate-500 italic border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-full text-center">
                        Demo on request
                      </span>
                    )}

                    {/* Login / access note */}
                    {p.liveNote && (
                      <p className="text-xs text-slate-400 dark:text-slate-500 text-center sm:text-right leading-snug flex items-start gap-1">
                        <span aria-hidden="true">ℹ️</span>
                        {p.liveNote}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
