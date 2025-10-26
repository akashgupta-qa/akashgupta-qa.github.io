import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Linkedin } from "lucide-react";
import ResumeSection from "./sections/ResumeSection";
import Contact from "./sections/Contact";


export default function App() {
const [showNavbar, setShowNavbar] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);
const [showTop, setShowTop] = useState(false);


useEffect(() => {
const handleScroll = () => {
const currentY = window.scrollY;
setShowNavbar(currentY < lastScrollY || currentY < 50);
setLastScrollY(currentY);
setShowTop(currentY > 400);
};
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);


return (
<>
<Navbar visible={showNavbar} />
<Hero />
<About />
<Experience />
<Projects />
<Skills />
<ResumeSection />
<Contact />


{showTop && (
<button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-lg bg-indigo-600 text-white flex items-center justify-center text-xl z-50">
↑
</button>
)}
</>
);
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* NAV */}
      <nav className="fixed top-4 left-0 right-0 z-40 flex justify-center">
        <div className="w-full max-w-5xl px-6 py-3 rounded-2xl bg-white/70 backdrop-blur-md shadow-md flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">AG</div>
            <div className="hidden sm:block">
              <div className="text-sm font-medium">Akash Gupta</div>
              <div className="text-xs text-gray-500">Engineering Manager — Quality Assurance</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#resume" className="hover:underline">Resume</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="pt-28 pb-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="rounded-3xl p-8 bg-gradient-to-br from-gray-50 to-white shadow-lg">
              <div className="flex items-center gap-6">
                <img src="/avatar.png" alt="avatar" className="w-36 h-36 rounded-full shadow-lg object-cover" />
                <div>
                  <h1 className="text-3xl font-extrabold">Akash Gupta</h1>
                  <p className="text-indigo-600 font-semibold mt-1">Engineering Manager — Quality Assurance</p>
                  <p className="mt-3 text-gray-600">Results-driven QA leader specializing in automation, API quality, and system validation across microservices platforms. I build teams, frameworks, and processes that reduce cycle time and improve product stability.</p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a href="mailto:aakashgupta1992@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border">
                      <Mail size={16} /> <span className="text-sm">aakashgupta1992@gmail.com</span>
                    </a>
                    <a href="tel:+918376934143" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border">
                      <Phone size={16} /> <span className="text-sm">+91-8376934143</span>
                    </a>
                    <a href="/Akash_Gupta_EM_QA_Resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white">
                      <Download size={16} /> <span className="text-sm">Download Resume</span>
                    </a>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <a href="https://github.com/akashgupta-qa" aria-label="GitHub" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border">
                       GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/akash-gupta-39812367/" aria-label="LinkedIn" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border">
                      <Linkedin size={16} /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="rounded-3xl p-6 bg-gradient-to-br from-indigo-50/60 to-pink-50/50 border border-gray-100 shadow-xl">
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm text-gray-500">Years in QA leadership</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-gray-500">Automation test cases contributed</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold">60%</div>
                  <div className="text-sm text-gray-500">Regression time reduction</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold">Large-scale</div>
                  <div className="text-sm text-gray-500">Rollouts & pilot experience</div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm text-gray-500">Location</h4>
                <div className="inline-flex items-center gap-2 mt-2">
                  <MapPin size={16} /> Gurugram, India
                </div>

                <h4 className="text-sm text-gray-500 mt-4">Availability</h4>
                <div className="mt-2">Open to leadership roles and consulting engagements.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold mb-4">About</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-gray-700">I am an engineering manager focused on quality — building automation frameworks (UI + API), embedding Shift-Left testing, and aligning QA roadmaps with product goals. I mentor engineers, introduce test automation best practices, and measure quality using meaningful metrics to reduce production incidents and speed up releases.</motion.p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            <article className="p-6 bg-white rounded-2xl shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Engineering Manager - Quality Assurance</h3>
                  <div className="text-sm text-gray-500">GreyOrange — Gurgaon (Remote) · Apr 2024 - Present</div>
                </div>
                <div className="text-sm text-gray-500">Lead: 5 QA engineers</div>
              </div>

              <ul className="mt-3 list-disc list-inside text-gray-700">
                <li>Spearheaded automation frameworks cutting regression cycles by ~60%.</li>
                <li>Owned release validation & acted as P&E point for production issues.</li>
                <li>Aligned cross-functional stakeholders to freeze acceptance criteria.</li>
              </ul>
            </article>

            <article className="p-6 bg-white rounded-2xl shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Senior QA Engineer - II</h3>
                  <div className="text-sm text-gray-500">GreyOrange — Jul 2022 - Mar 2024</div>
                </div>
                <div className="text-sm text-gray-500">Lead: 4 QA engineers</div>
              </div>
              <ul className="mt-3 list-disc list-inside text-gray-700">
                <li>Designed Appium + TestNG frameworks and integrated with BrowserStack.</li>
                <li>Introduced GitHub Actions for stable regression pipelines.</li>
              </ul>
            </article>

            <article className="p-6 bg-white rounded-2xl shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Sub System Architect / Senior Software Engineer</h3>
                  <div className="text-sm text-gray-500">Ericsson & Amazon — 2014 - 2022</div>
                </div>
                <div className="text-sm text-gray-500">Various roles</div>
              </div>
              <ul className="mt-3 list-disc list-inside text-gray-700">
                <li>Built tools for network dimensioning and contributed to SDP product stability.</li>
                <li>Conducted TTCN based testing and POCs for product customization.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card - replicate as needed */}
            <div className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-sm text-gray-500">Inventory Automation Suite</div>
              <h3 className="font-semibold mt-2">Inventory-controlled automation framework</h3>
              <p className="mt-2 text-gray-700 text-sm">Built from scratch to validate end-to-end inventory flows and reduced manual test overhead for large releases.</p>
              <div className="mt-4 flex items-center gap-3">
                <a href="#" className="text-indigo-600 text-sm">View</a>
                <a href="#" className="text-gray-500 text-sm">Code</a>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-sm text-gray-500">Mobile Automation</div>
              <h3 className="font-semibold mt-2">Appium + BrowserStack integration</h3>
              <p className="mt-2 text-gray-700 text-sm">Cross-device test execution with CI integration and flaky test reduction strategies.</p>
            </div>

            <div className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-sm text-gray-500">CI / Regression</div>
              <h3 className="font-semibold mt-2">GitHub Actions for regression</h3>
              <p className="mt-2 text-gray-700 text-sm">Stable regression pipeline that runs nightly and posts results to Slack for visibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Skills & Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold mb-3">Languages & Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python (basic)', 'TTCN'].map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full border text-sm">{s}</span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold mb-3">Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['Selenium', 'Appium', 'TestNG', 'REST Assured', 'BrowserStack', 'JMeter', 'JIRA', 'Linear', 'MongoDB', 'MySQL'].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full border text-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Resume</h2>
          <p className="text-gray-600 mb-4">Embedded resume preview — click the button to download the PDF.</p>

          <div className="mb-6">
            <a href="/Akash_Gupta_EM_QA_Resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white">
              <Download size={16} /> Download Resume
            </a>
          </div>

          <div style={{ minHeight: 480 }} className="rounded-2xl overflow-hidden border">
            <iframe src="/Akash_Gupta_EM_QA_Resume.pdf#toolbar=0" title="resume" style={{ width: '100%', height: '600px', border: 'none' }} />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">Get in touch</h4>
              <p className="text-gray-600 mt-2">I’m open to leadership roles, contract work and mentoring.</p>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={16} />
                  <a href="mailto:aakashgupta1992@gmail.com" className="text-sm">aakashgupta1992@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} />
                  <a href="tel:+918376934143" className="text-sm">+91-8376934143</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} /> Gurugram, India
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin size={16} /> <a href="https://www.linkedin.com/in/akash-gupta-39812367/" className="text-sm">linkedin.com/in/akash-gupta-39812367</a>
                </div>
                <div className="flex items-center gap-3">
                   <a href="https://github.com/akashgupta-qa" className="text-sm">github.com/akashgupta-qa</a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold mb-3">Message me</h4>
              <form action="mailto:aakashgupta1992@gmail.com" method="post" encType="text/plain" className="space-y-3">
                <input name="Name" placeholder="Your name" className="w-full border rounded-lg px-3 py-2" />
                <input name="Email" placeholder="Your email" className="w-full border rounded-lg px-3 py-2" />
                <textarea name="Message" placeholder="Message" rows={5} className="w-full border rounded-lg px-3 py-2" />
                <div className="flex justify-end">
                  <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Akash Gupta — Engineering Manager | Built with React + Tailwind + Framer Motion</div>
      </footer>
    </div>
  );
}