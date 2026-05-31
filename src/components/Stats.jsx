import { motion } from "framer-motion";

const stats = [
  { number: "4", label: "Projects Delivered" },
  { number: "39", label: "Tools Built" },
  { number: "100%", label: "On-Time Delivery" },
  { number: "24hr", label: "Response Time" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-6 px-4 sm:px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl px-6 py-5 shadow-lg shadow-blue-600/20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">{s.number}</div>
                <div className="text-blue-100 text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
