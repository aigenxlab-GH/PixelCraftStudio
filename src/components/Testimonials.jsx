import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Soumya Electricals",
    role: "Business Owner",
    location: "India",
    project: "End-to-End Business Management System",
    delivered: ["Attendance & payroll automation", "Inventory & quotation workflows"],
    initials: "SE",
    color: "from-indigo-600 to-purple-600",
  },
  {
    name: "Rudra Electricals",
    role: "Solar Business Owner",
    location: "Bilaspur, CG",
    project: "Solar Energy Business Website",
    delivered: ["Professional website with CMS", "WhatsApp integration & enquiry form"],
    initials: "RE",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 px-4 sm:px-6 bg-transparent">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Client Stories
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-3 mb-3">
            What Clients Say
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-xl mx-auto">
            Real feedback from real businesses we&apos;ve worked with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-5 shadow-sm dark:shadow-none card-hover flex flex-col"
            >
              {/* Client header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-black flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-slate-500 dark:text-slate-500 text-xs">{t.role} · {t.location}</p>
                </div>
                <span className="ml-auto text-xs bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 px-2.5 py-1 rounded-full font-medium flex-shrink-0">
                  Review pending
                </span>
              </div>

              <p className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-1.5">
                Project Delivered
              </p>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                {t.project}
              </p>

              <ul className="space-y-1.5 mb-4 flex-1">
                {t.delivered.map((d, di) => (
                  <li key={di} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-green-500 text-base" aria-hidden="true">✓</span>
                    {d}
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-500 italic">Written review coming soon</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
