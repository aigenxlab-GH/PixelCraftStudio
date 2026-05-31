import { useState } from "react";
import { motion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const needOptions = [
  "Professional Website",
  "Business Utility App (Billing / Inventory / Payroll)",
  "Enterprise Dashboard / CRM",
  "SEO & Global Hosting",
  "Other",
];

const countryList = [
  "India", "United States", "United Kingdom", "United Arab Emirates",
  "Canada", "Australia", "Singapore", "Germany", "France", "Saudi Arabia",
  "South Africa", "New Zealand", "Other",
];

function EnquireForm() {
  const [form, setForm] = useState({ name: "", email: "", country: "", need: "", description: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Enquiry from ${form.name} — PixelCraft Studio`,
          from_name: "PixelCraft Studio",
          replyto: form.email,
          name: form.name,
          email: form.email,
          country: form.country,
          need: form.need,
          description: form.description,
          botcheck: false,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-none min-h-[360px]">
        {/* Top success badge */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white">Enquiry Received!</h3>
            <p className="text-green-600 dark:text-green-400 text-sm font-medium">Successfully submitted</p>
          </div>
        </div>

        {/* Email confirmation */}
        <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-5">
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Your details have been sent to <span className="font-bold text-slate-900 dark:text-white">PixelCraft Studio</span>{" "}
            <span className="text-blue-600 dark:text-blue-400">(mail: aigenxlab@gmail.com)</span>.
            We will reply within 24 hours.
          </p>
          <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-500 dark:text-slate-500 mb-0.5">We will reply to you at</p>
            <p className="text-sm font-bold text-slate-900 dark:text-white">{form.email}</p>
          </div>
        </div>

        {/* What happens next */}
        <p className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-3">What happens next</p>
        <div className="space-y-2.5 mb-6">
          {[
            { icon: "📬", text: "I review your enquiry personally" },
            { icon: "✉️", text: `I reply to you at ${form.email} within 24 hrs` },
            { icon: "📅", text: "We schedule a video call to discuss your project" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
              <span className="text-base" role="img" aria-label="">{s.icon}</span>
              <span>{s.text}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => { setStatus("idle"); setForm({ name: "", email: "", country: "", need: "", description: "" }); }}
          className="mt-auto text-sm text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline text-center"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm dark:shadow-none">

      {/* Destination notice */}
      <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-xl px-4 py-2.5">
        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <p className="text-xs text-blue-700 dark:text-blue-300">
          Your enquiry goes directly to <span className="font-bold">Sandeep (aigenxlab@gmail.com)</span> — no middlemen
        </p>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Full Name *</label>
        <input id="contact-name" type="text" name="name" required value={form.name} onChange={handleChange}
          placeholder="e.g. John Smith"
          className="w-full bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email Address *</label>
        <input id="contact-email" type="email" name="email" required value={form.email} onChange={handleChange}
          placeholder="you@example.com"
          className="w-full bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
      </div>

      {/* Country */}
      <div>
        <label htmlFor="contact-country" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Country *</label>
        <select id="contact-country" name="country" required value={form.country} onChange={handleChange}
          className="w-full bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors text-sm">
          <option value="">Select your country</option>
          {countryList.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* What do you need */}
      <div>
        <label htmlFor="contact-need" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">What do you need? *</label>
        <select id="contact-need" name="need" required value={form.need} onChange={handleChange}
          className="w-full bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors text-sm">
          <option value="">Select a service</option>
          {needOptions.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="contact-desc" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Tell me more *</label>
        <textarea id="contact-desc" name="description" required rows={3} value={form.description} onChange={handleChange}
          placeholder="Briefly describe your project or what problem you want to solve..."
          className="w-full bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none" />
      </div>

      <button type="submit" disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-blue-600/25 text-sm">
        {status === "sending" ? (
          <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Sending...</>
        ) : (
          <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg> Send Enquiry</>
        )}
      </button>

      {status === "error" && (
        <p className="text-red-500 text-xs text-center" role="alert">Something went wrong. Please try emailing directly at aigenxlab@gmail.com</p>
      )}
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 bg-transparent">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-7">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-3 mb-4">
            Let&apos;s Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto">
            Fill the form below — I&apos;ll reply to your email within 24 hours and we&apos;ll take it from there.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Enquire Now form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true"></span>
              Enquire Now
            </h3>
            <EnquireForm />
          </motion.div>

          {/* Right side info */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5">

            {/* Profile card */}
            <div className="bg-blue-50 dark:bg-slate-800/70 border border-blue-200 dark:border-slate-700 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-2xl font-black text-white flex-shrink-0" aria-label="Sandeep Singsarva">S</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Sandeep Singsarva</h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm">Founder &amp; Lead Developer</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">PixelCraft Studio</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                I personally handle every project from discovery to delivery. You&apos;ll always talk to me — not a sales team, not a support bot.
              </p>
            </div>

            {/* How it works after enquiry */}
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-5 shadow-sm dark:shadow-none">
              <p className="text-sm font-bold text-slate-900 dark:text-white mb-4">What happens after you submit?</p>
              <div className="space-y-3">
                {[
                  { step: "1", text: "Your enquiry lands in my inbox instantly" },
                  { step: "2", text: "I personally review your requirements" },
                  { step: "3", text: "I reply to your email within 24 hours" },
                  { step: "4", text: "We schedule a video call to discuss your project" },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-600 text-white text-xs font-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{s.step}</span>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct contacts */}
            <div className="space-y-3">
              <a href="mailto:aigenxlab@gmail.com"
                className="flex items-center gap-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl p-4 hover:border-blue-500/40 transition-colors group shadow-sm dark:shadow-none">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Email directly</p>
                  <p className="text-slate-900 dark:text-white font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">aigenxlab@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/919920042608" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl p-4 hover:border-green-500/40 transition-colors group shadow-sm dark:shadow-none">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">WhatsApp (India / Quick chat)</p>
                  <p className="text-slate-900 dark:text-white font-semibold group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors text-sm">+91 99200 42608</p>
                </div>
              </a>
            </div>

            {/* Reply promise */}
            <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-xl p-4 text-center">
              <p className="text-blue-700 dark:text-blue-300 font-semibold text-sm">⚡ I reply within 24 hours</p>
              <p className="text-slate-500 text-xs mt-1">Based in India (IST) · Available for clients worldwide</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
