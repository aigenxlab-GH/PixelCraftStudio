import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Solution from "./components/Solution";
import Problem from "./components/Problem";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import WhyMe from "./components/WhyMe";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>PixelCraft Studio — Custom Websites & Apps for Businesses | Sandeep Singsarva</title>
        <meta name="description" content="PixelCraft Studio builds custom websites and business apps for professionals, businesses & enterprises across India. Fixed pricing, direct developer access, post-launch support." />
        <meta name="keywords" content="freelance web developer India, custom website for business, billing app developer, React developer India, business utility app, SEO website India" />
        <meta property="og:title" content="PixelCraft Studio — Websites & Apps That Work For Your Business" />
        <meta property="og:description" content="Custom websites & apps built for your exact business needs. Not templates. Not off-the-shelf SaaS." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pixelcraftstudio.in" />
      </Helmet>

      <div className="relative min-h-screen bg-slate-50 dark:bg-[#0f172a] text-slate-900 dark:text-slate-200 transition-colors duration-300">

        {/* Global grid — light mode */}
        <div className="fixed inset-0 pointer-events-none z-0 dark:hidden"
          style={{
            backgroundImage: "linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Global grid — dark mode */}
        <div className="fixed inset-0 pointer-events-none z-0 hidden dark:block"
          style={{
            backgroundImage: "linear-gradient(rgba(59,130,246,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.09) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Problem />
          <Solution />
          <Process />
          <WhyMe />
          <Portfolio />
          <Testimonials />
          <FAQ />
          <Stats />
          <Contact />
          <About />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
}
