import { motion } from "framer-motion";
import { services } from "../data/projects";

export default function Solution() {
  return (
    <section id="services" className="py-10 px-4 sm:px-6 bg-transparent dark:bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            The Solution
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-3 mb-3">
            Digital Solutions Built for{" "}
            <span className="gradient-text">Your Business</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto">
            From a simple 4-page website to a full business management system —
            every solution is designed around <em>your</em> workflow, not the other way around.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-5 card-hover group shadow-sm dark:shadow-none"
            >
              <div className="text-2xl mb-2" role="img" aria-label={s.title}>{s.icon}</div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                {s.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing hint */}
        <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-bold text-slate-900 dark:text-white text-sm mb-1">💰 Transparent, Fixed Pricing</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Every project gets a clear quote upfront — scope, timeline &amp; price. No hidden costs, ever.</p>
          </div>
          <a href="#contact" className="flex-shrink-0 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors">
            Get a Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
