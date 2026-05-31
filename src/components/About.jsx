import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "Node.js", "Java", "Microservices",
  "Supabase", "Tailwind CSS", "PostgreSQL", "REST APIs",
  "Cloudflare", "SEO", "GCP", "Vercel", "Git",
];

export default function About() {
  return (
    <section id="about" className="py-10 px-4 sm:px-6 bg-transparent dark:bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
              About Me
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-3 mb-4">
              Hi, I&apos;m Sandeep — <br />
              <span className="gradient-text">I Build What Your Business Needs</span>
            </h2>
            <div className="space-y-3 text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
              <p>
                I&apos;m a full-stack developer based in India, specialising in building custom websites and business utility applications for professionals, growing businesses, and enterprises.
              </p>
              <p>
                I started PixelCraft Studio with one belief — every business deserves software built specifically for how <em>they</em> work, not generic tools that force them to adapt. I&apos;ve seen too many businesses waste hours every day on spreadsheets, paper registers, and disconnected tools when a simple custom solution could save them those hours.
              </p>
              <p>
                When you work with me, you get direct access — no middlemen, no outsourcing, no miscommunication. I handle every project from the first conversation to post-launch support.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-5">
              <p className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-2.5">Tech I Work With</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill}
                    className="text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Profile card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* Avatar card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl p-6 text-center shadow-xl shadow-blue-600/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full border-[30px] border-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-3 border-4 border-white/30 shadow-lg text-4xl font-black text-white" aria-label="Sandeep Singsarva">
                  S
                </div>
                <h3 className="text-xl font-black text-white mb-1">Sandeep Singsarva</h3>
                <p className="text-blue-200 text-sm mb-1">Founder &amp; Lead Developer</p>
                <p className="text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3">PixelCraft Studio</p>
                <div className="flex items-center justify-center gap-2 text-blue-100 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
                  Available for new projects
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "🎯", label: "Focus", value: "Custom Solutions" },
                { icon: "🌍", label: "Clients", value: "India & Global" },
                { icon: "⚡", label: "Delivery", value: "On Time, Always" },
                { icon: "🤝", label: "Style", value: "Direct & Personal" },
              ].map((f) => (
                <div key={f.label}
                  className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-3">
                  <span className="text-lg mb-1 block" role="img" aria-label={f.label}>{f.icon}</span>
                  <p className="text-xs text-slate-500 dark:text-slate-500">{f.label}</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{f.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
