import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  const links = {
    Navigation: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
    Services: [
      { label: "Professional Websites", href: "#services" },
      { label: "Business Utility Apps", href: "#services" },
      { label: "Enterprise Dashboards", href: "#services" },
      { label: "SEO & Global Hosting", href: "#services" },
    ],
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a1020] relative z-10">
      {/* CTA Banner */}
      <div className="bg-blue-600 dark:bg-blue-700 py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-black text-xl">Ready to build something great?</p>
            <p className="text-blue-100 text-sm mt-1">Let&apos;s talk about your project — no commitment required.</p>
          </div>
          <a href="#contact"
            className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-full text-sm hover:bg-blue-50 transition-colors shadow-lg">
            Enquire Now →
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-xl font-black text-slate-900 dark:text-white">
              Pixel<span className="text-blue-500 dark:text-blue-400">Craft</span> Studio
            </span>
            <p className="text-slate-500 text-sm mt-2 mb-4 leading-relaxed max-w-xs">
              Custom websites and business apps built for professionals, businesses & enterprises across India and worldwide.
            </p>
            <div className="space-y-2">
              <a href="mailto:aigenxlab@gmail.com"
                className="flex items-center gap-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                aigenxlab@gmail.com
              </a>
              <a href="https://wa.me/919920042608" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
                +91 99200 42608
              </a>
              <p className="text-xs text-slate-400 dark:text-slate-600 mt-1">Based in India (IST) · Available worldwide</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-white mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {links.Navigation.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-white mb-4">Services</p>
            <ul className="space-y-2.5">
              {links.Services.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-xs">© {new Date().getFullYear()} Sandeep Singsarva · PixelCraft Studio. All rights reserved.</p>
          <p className="text-slate-400 text-xs">Built with React + Vite · Hosted on Cloudflare Pages</p>
        </div>
      </div>
    </footer>
  );
}
