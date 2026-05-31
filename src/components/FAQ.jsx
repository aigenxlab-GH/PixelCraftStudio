import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does it take to build a website or app?",
    a: "A standard 4–5 page business website takes 7–14 days. A business utility app (billing, payroll, inventory) typically takes 3–6 weeks depending on complexity. I'll give you a clear timeline in the proposal before we start.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, absolutely. I work with clients across India, UAE, UK, USA, Singapore, and beyond. All communication happens over email and video calls, and payments can be made internationally.",
  },
  {
    q: "What is your pricing?",
    a: "Every project is scoped and priced based on your specific requirements. You always get a fixed price upfront before any work begins — no hidden charges, no hourly billing surprises. Contact me with your requirements and I'll send a clear, detailed quote.",
  },
  {
    q: "Do you provide support after the project is delivered?",
    a: "Yes. Every project includes a post-launch support period. After that, I offer affordable maintenance packages. I don't disappear after delivery — you always have direct access to me.",
  },
  {
    q: "Will I be able to manage my website/app myself?",
    a: "Yes. If you need a CMS or admin panel, I build one in. I also provide a handover document and a walkthrough session so you can manage your own content without depending on me for every small change.",
  },
  {
    q: "I'm not technical — can I still work with you?",
    a: "That's exactly who I work best with. I explain everything in plain English — no jargon. You tell me what your business needs, and I handle all the technical decisions. You're involved in approvals, not in code.",
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-xl overflow-hidden shadow-sm dark:shadow-none"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-4 py-3.5 text-left"
      >
        <span className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">{faq.q}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${open ? "bg-blue-600 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"}`} aria-hidden="true">
          <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="px-4 pb-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-3">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-12 px-4 sm:px-6 bg-transparent dark:bg-slate-900/40">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-3 mb-3">
            Common Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Everything you need to know before reaching out.
          </p>
        </motion.div>

        <div className="space-y-2.5">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 dark:text-slate-500 text-sm mt-6"
        >
          Still have questions?{" "}
          <a href="#contact" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            Send me an enquiry →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
