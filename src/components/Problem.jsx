import { motion } from "framer-motion";

const categories = [
  {
    icon: "🌐",
    title: "Online Visibility & Credibility",
    color: "border-blue-400/40 dark:border-blue-500/30",
    iconBg: "bg-blue-50 dark:bg-blue-500/10",
    problems: [
      "No website — losing clients to competitors who have one",
      "Invisible on Google, no one can find your business online",
      "No professional page to share with clients or investors",
    ],
  },
  {
    icon: "🧾",
    title: "Manual & Paper-Based Operations",
    color: "border-orange-400/40 dark:border-orange-500/30",
    iconBg: "bg-orange-50 dark:bg-orange-500/10",
    problems: [
      "Invoices & quotations made in Excel every single day",
      "Bills and product catalogues tracked on paper registers",
      "Hours lost daily to tasks a system could do in seconds",
    ],
  },
  {
    icon: "💰",
    title: "Payroll & HR Problems",
    color: "border-green-400/40 dark:border-green-500/30",
    iconBg: "bg-green-50 dark:bg-green-500/10",
    problems: [
      "Payroll calculation takes 3+ painful days every month",
      "Timecards, leave & overtime tracked manually — disputes arise often",
      "No central record of employee history or attendance",
    ],
  },
  {
    icon: "📦",
    title: "Inventory & Stock Problems",
    color: "border-purple-400/40 dark:border-purple-500/30",
    iconBg: "bg-purple-50 dark:bg-purple-500/10",
    problems: [
      "Stock runs out before you even realise it's low",
      "Over-purchasing due to no forecasting — cash locked in dead stock",
      "Multiple locations with no unified inventory view",
    ],
  },
  {
    icon: "📊",
    title: "Business Data & Reporting",
    color: "border-cyan-400/40 dark:border-cyan-500/30",
    iconBg: "bg-cyan-50 dark:bg-cyan-500/10",
    problems: [
      "Data scattered across WhatsApp, paper & email — no single view",
      "No dashboard to see real-time business performance",
      "Reports compiled manually — slow, error-prone, and outdated",
    ],
  },
  {
    icon: "🚀",
    title: "Growth Bottlenecks",
    color: "border-rose-400/40 dark:border-rose-500/30",
    iconBg: "bg-rose-50 dark:bg-rose-500/10",
    problems: [
      "Admin work eating 4+ hours of the owner's day",
      "Processes built for 5 employees — now you have 50",
      "Paying for SaaS tools that don't fit your workflow at all",
    ],
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-12 px-4 sm:px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Sound Familiar?
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-3 mb-3">
            We Solve the Business Problems <br className="hidden sm:block" />
            <span className="gradient-text">That Stop You From Growing</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto">
            From manual paperwork to zero online visibility — these are the exact problems
            we eliminate with custom-built digital solutions.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`bg-white dark:bg-slate-800/50 border ${cat.color} rounded-2xl p-4 card-hover shadow-sm dark:shadow-none flex flex-col gap-3`}
            >
              {/* Icon + title */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${cat.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <span className="text-xl" role="img" aria-label={cat.title}>{cat.icon}</span>
                </div>
                <h3 className="font-black text-slate-900 dark:text-white text-sm leading-snug">
                  {cat.title}
                </h3>
              </div>

              {/* Problem bullets */}
              <ul className="space-y-2">
                {cat.problems.map((prob, pi) => (
                  <li key={pi} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 leading-snug">
                    <span className="text-red-400 dark:text-red-500 mt-0.5 flex-shrink-0">✕</span>
                    {prob}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* "And many more" card */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: categories.length * 0.07 }}
            className="bg-blue-50/60 dark:bg-blue-500/5 border-2 border-dashed border-blue-300 dark:border-blue-500/30 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-3 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all group cursor-pointer lg:col-start-2"
          >
            <div className="w-11 h-11 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-500/30 transition-colors">
              <span className="text-xl">✨</span>
            </div>
            <div>
              <p className="font-black text-slate-900 dark:text-white text-base mb-1">
                ...and many more, as per your need
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-snug">
                Every business has unique challenges. If your problem isn&apos;t listed above — I still solve it. Just tell me what&apos;s holding you back.
              </p>
            </div>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-bold group-hover:underline">
              Tell me your problem →
            </span>
          </motion.a>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-base text-slate-500 dark:text-slate-500 max-w-2xl mx-auto">
            The solution? A digital tool built around{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">your</span>{" "}
            workflow — not the other way around.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
