import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowDown, Mail, Github, Globe, Linkedin } from 'lucide-react'

const roles = [
  'Junior Web Developer',
  'Junior Full-Stack Developer',
  'AI‑Assisted Web Developer',
]

const skills = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite',
  'Node.js', 'Express', 'MongoDB', 'REST API', 'Git', 'Tailwind CSS', 'Framer Motion',
  'Python (basics)', 'AI tools', 'Prompt Engineering'
]

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 text-white/80 px-3 py-1 text-xs border border-white/10 backdrop-blur-sm">
      {children}
    </span>
  )
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative scroll-mt-24 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          {subtitle && (
            <p className="text-white/60 mt-2 max-w-2xl">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-white relative overflow-hidden">
      {/* Subtle gradient + grid background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{background: 'radial-gradient(1000px 600px at 20% -10%, rgba(59,130,246,0.25), transparent), radial-gradient(900px 500px at 80% 10%, rgba(168,85,247,0.25), transparent)'}} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
          <a href="#" className="font-semibold tracking-wide text-white hover:text-white/90">Fauzan — Profile</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-8 md:pt-12 lg:pt-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Active Student · Informatics Engineering (D4)
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-400">an Informatics Engineering student</span>
            </h1>
            <p className="text-white/70 mt-5 max-w-xl">
              I’m studying at Jember State Polytechnic, passionate about building elegant, modern web experiences and sharpening my skills in software and engineering.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {roles.map((r) => (
                <Badge key={r}>{r}</Badge>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-8">
              <a href="#skills" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-medium shadow-lg shadow-sky-500/20 hover:brightness-110">
                Explore Skills
                <ArrowDown size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10">
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-4 mt-8 text-white/70">
              <a className="hover:text-white" href="mailto:contact@example.com" aria-label="Email"><Mail size={18} /></a>
              <a className="hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a className="hover:text-white" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a className="hover:text-white" href="https://your-portfolio.example" target="_blank" rel="noreferrer" aria-label="Website"><Globe size={18} /></a>
            </div>
          </div>

          <div className="relative min-h-[360px] md:min-h-[520px] lg:min-h-[640px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              {/* Soft glow overlays */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About Me" subtitle="A quick snapshot of who I am and what drives me.">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4 text-white/80 leading-relaxed">
            <p>
              I am an active student at Jember State Polytechnic (Politeknik Negeri Jember) in the Informatics Engineering study program (D4). I love turning ideas into interactive web interfaces, optimizing user experience, and learning modern tools that blend software and engineering.
            </p>
            <p>
              My focus right now is strengthening full‑stack fundamentals, building real projects, and exploring AI assistance to accelerate development while keeping high code quality.
            </p>
          </div>
          <div className="space-y-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-white/60 text-sm">Interests</p>
              <p className="mt-1 text-sm">Software Development, Web Engineering, Product Design, AI‑assisted workflows</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-white/60 text-sm">Goals</p>
              <p className="mt-1 text-sm">Develop my interests, talents, and abilities in software and engineering through practical, impactful projects.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" subtitle="Core tools and technologies I work with.">
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education" subtitle="Where I’ve learned and grown.">
        <div className="relative">
          <div className="absolute left-3 md:left-1.5 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-6">
            <EduItem school="Jember State Polytechnic" program="Informatics Engineering (D4)" period="— Active"/>
            <EduItem school="Jenggawah State High School" program="— Science" period="— Graduate"/>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Let’s Connect" subtitle="Open to collaborations, internships, and exciting projects.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Send a message</h3>
            <p className="text-white/70 text-sm mt-1">Email is the fastest way to reach me.</p>
            <a href="mailto:contact@example.com" className="inline-flex mt-4 items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-medium shadow-lg shadow-sky-500/20 hover:brightness-110">
              <Mail size={16} /> Write an email
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Find me online</h3>
            <div className="flex items-center gap-3 mt-4 text-white/80">
              <a className="hover:text-white inline-flex items-center gap-2" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
              <a className="hover:text-white inline-flex items-center gap-2" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
              <a className="hover:text-white inline-flex items-center gap-2" href="https://your-portfolio.example" target="_blank" rel="noreferrer"><Globe size={16}/> Website</a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Personal Profile — Crafted with passion.
      </footer>
    </div>
  )
}

function EduItem({ school, program, period }) {
  return (
    <div className="relative pl-10">
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400 shadow-[0_0_0_4px_rgba(255,255,255,0.05)]" />
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <p className="text-white font-medium">{school}</p>
        {program && <p className="text-white/70 text-sm mt-1">{program}</p>}
        {period && <p className="text-white/50 text-xs mt-2">{period}</p>}
      </div>
    </div>
  )
}
