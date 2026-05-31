import { motion } from "framer-motion";

const whyItems = [
  { label: "100% Custom", desc: "Built around your exact workflow, not a template" },
  { label: "Fixed Pricing", desc: "No hidden costs, no surprise invoices" },
  { label: "Direct Access", desc: "You talk to me — the developer — at every step" },
  { label: "Post-Launch Support", desc: "I don't disappear after delivery" },
  { label: "Plain English", desc: "No tech jargon, just clear communication" },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="py-10 px-4 sm:px-6 bg-transparent dark:bg-slate-900/40">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Why PixelCraft Studio
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-3">
            What Makes Us Different
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {whyItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40 rounded-xl p-3.5 shadow-sm dark:shadow-none"
            >
              <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">{item.label}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-0.5">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
