import { motion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";

const steps = [
  {
    step: "01",
    title: "We Discover",
    desc: "You share your business goals and challenges. I listen, ask the right questions, and understand exactly what you need.",
    icon: "🤝",
  },
  {
    step: "02",
    title: "We Propose",
    desc: "You receive a clear document — scope, timeline, and fixed price. You review, ask questions, and approve before anything starts.",
    icon: "📋",
  },
  {
    step: "03",
    title: "We Design",
    desc: "You see wireframes and mockups first. Your feedback shapes the design. We will not move forward unless you are fully satisfied.",
    icon: "🎨",
  },
  {
    step: "04",
    title: "We Build",
    desc: "You get weekly progress updates and can see the product being built in real time. No black boxes — ever.",
    icon: "⚙️",
  },
  {
    step: "05",
    title: "We Launch",
    desc: "You go live. I handle deployment, domain setup, and train your team. And I'm still here for you after launch.",
    icon: "🚀",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-12 px-4 sm:px-6 bg-transparent dark:bg-slate-900/40">
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
            Our Journey Together
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-3 mb-3">
            How We Build Your Solution Together
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto">
            From your first call to a live, working product — here&apos;s exactly what our journey looks like.{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">You&apos;re involved at every step.</span>
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal connector line (desktop only) */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 dark:from-blue-900 dark:via-blue-600 dark:to-blue-900 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2 relative z-10">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0 lg:text-center"
              >
                {/* Step circle */}
                <div className="flex-shrink-0 flex flex-col items-center gap-1">
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-2 border-blue-500 shadow-lg shadow-blue-500/20 flex flex-col items-center justify-center z-10">
                    <span className="text-xl" role="img" aria-label={item.title}>{item.icon}</span>
                    <span className="text-xs font-black text-blue-600 dark:text-blue-400">{item.step}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="lg:hidden text-blue-400 dark:text-blue-600 text-xl font-black mt-1" aria-hidden="true">↓</div>
                  )}
                </div>

                {/* Content */}
                <div className="lg:mt-3 flex-1 lg:flex-none">
                  <h3 className="text-sm font-black text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute text-blue-400 dark:text-blue-500 text-2xl font-black" aria-hidden="true"
                      style={{ top: "24px", left: `calc(${(i + 1) * 20}% - 10px)` }}>
                      →
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
            Ready to start? <span className="font-semibold text-slate-800 dark:text-slate-200">Step 1 is just a free conversation — no commitment.</span>
          </p>
          <a
            href="https://wa.me/919920042608"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-500/25 w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Start with a Free Discovery Call
          </a>
        </motion.div>

      </div>
    </section>
  );
}
