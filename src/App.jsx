import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowDown, Mail, Github, Globe, Linkedin, Phone, Download } from 'lucide-react'

const roles = [
  'Pengembang Web Junior',
  'Pengembang Full‑Stack Junior',
  'Pengembang Web berbantuan AI',
]

const skills = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite',
  'Node.js', 'Express', 'MongoDB', 'REST API', 'Git', 'Tailwind CSS', 'Framer Motion',
  'Python (dasar)', 'AI tools', 'Prompt Engineering'
]

const projects = [
  {
    title: 'Proyek Placeholder 1',
    description: 'Deskripsi singkat proyek contoh. Fokus pada antarmuka modern dan performa yang baik.',
    tags: ['React', 'Tailwind', 'Vite'],
    demo: '#',
    repo: 'https://github.com/',
  },
  {
    title: 'Proyek Placeholder 2',
    description: 'Contoh aplikasi full‑stack sederhana dengan API dan basis data.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    demo: '#',
    repo: 'https://github.com/',
  },
  {
    title: 'Proyek Placeholder 3',
    description: 'Eksperimen animasi halus dan interaksi dengan Framer Motion.',
    tags: ['Framer Motion', 'UX'],
    demo: '#',
    repo: 'https://github.com/',
  },
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
  // Detail kontak
  const EMAIL = 'putrairwantofirdaus@gmail.com'
  const PHONE_DISPLAY = '085895945095'
  const PHONE_TEL = '+6285895945095' // format internasional
  const LINKEDIN = 'https://www.linkedin.com/in/firdaus-putra-irwanto'

  // URL foto yang diminta pengguna (akan tampil sebagai avatar di bagian perkenalan/hero)
  const PROFILE_PHOTO_URL = 'WhatsApp Image 2025-11-10 at 23.34.37_f7c4c933'

  return (
    <div className="min-h-screen bg-[#0b0f17] text-white relative overflow-hidden">
      {/* Latar gradien + grid halus */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{background: 'radial-gradient(1000px 600px at 20% -10%, rgba(59,130,246,0.25), transparent), radial-gradient(900px 500px at 80% 10%, rgba(168,85,247,0.25), transparent)'}} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
          <a href="#" className="font-semibold tracking-wide text-white hover:text-white/90">Firdaus Putra Irwanto — Profil</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#about" className="hover:text-white">Tentang</a>
            <a href="#skills" className="hover:text-white">Keahlian</a>
            <a href="#projects" className="hover:text-white">Proyek</a>
            <a href="#education" className="hover:text-white">Pendidikan</a>
            <a href="#contact" className="hover:text-white">Kontak</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-8 md:pt-12 lg:pt-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            {/* Avatar profil */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-14 w-14 rounded-full overflow-hidden border border-white/20 bg-white/5">
                <img
                  src={PROFILE_PHOTO_URL}
                  alt="Foto profil Firdaus Putra Irwanto"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-white/80 text-sm">
                <p className="font-medium text-white">Firdaus Putra Irwanto</p>
                <p>Mahasiswa · Teknik Informatika (D4)</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Mahasiswa Aktif · Teknik Informatika (D4)
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Halo, saya <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-400">mahasiswa Teknik Informatika</span>
            </h1>
            <p className="text-white/70 mt-5 max-w-xl">
              Saya menempuh studi di Politeknik Negeri Jember. Saya antusias membangun pengalaman web yang elegan dan modern, sekaligus mengasah kemampuan di bidang perangkat lunak dan rekayasa.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {roles.map((r) => (
                <Badge key={r}>{r}</Badge>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              <a href="#skills" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-medium shadow-lg shadow-sky-500/20 hover:brightness-110">
                Jelajahi Keahlian
                <ArrowDown size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10">
                Hubungi Saya
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10">
                <Download size={16} /> Unduh CV
              </a>
            </div>

            <div className="flex items-center gap-4 mt-8 text-white/70">
              <a className="hover:text-white" href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={18} /></a>
              <a className="hover:text-white" href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a className="hover:text-white" href={`tel:${PHONE_TEL}`} aria-label="Telepon"><Phone size={18} /></a>
              <a className="hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a className="hover:text-white" href="https://your-portfolio.example" target="_blank" rel="noreferrer" aria-label="Situs"><Globe size={18} /></a>
            </div>
          </div>

          <div className="relative min-h-[360px] md:min-h-[520px] lg:min-h-[640px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              {/* Glow halus */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Tentang */}
      <Section id="about" title="Tentang Saya" subtitle="Sekilas tentang siapa saya dan apa yang memotivasi saya.">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4 text-white/80 leading-relaxed">
            <p>
              Saya adalah mahasiswa aktif di Politeknik Negeri Jember pada program studi Teknik Informatika (D4). Saya senang mengubah ide menjadi antarmuka web interaktif, mengutamakan pengalaman pengguna, dan mempelajari tools modern yang memadukan perangkat lunak dan rekayasa.
            </p>
            <p>
              Fokus saya saat ini adalah memperkuat fundamental full‑stack, membangun proyek nyata, dan mengeksplorasi bantuan AI untuk mempercepat pengembangan dengan tetap menjaga kualitas kode.
            </p>
          </div>
          <div className="space-y-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-white/60 text-sm">Minat</p>
              <p className="mt-1 text-sm">Pengembangan Perangkat Lunak, Rekayasa Web, Desain Produk, Alur kerja berbantuan AI</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-white/60 text-sm">Tujuan</p>
              <p className="mt-1 text-sm">Mengembangkan minat, bakat, dan kemampuan di bidang perangkat lunak dan rekayasa melalui proyek yang praktis dan berdampak.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Keahlian */}
      <Section id="skills" title="Keahlian" subtitle="Perangkat dan teknologi inti yang saya gunakan.">
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </Section>

      {/* Proyek */}
      <Section id="projects" title="Proyek" subtitle="Beberapa karya dan eksperimen terbaru.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-5 flex flex-col">
              <div className="aspect-video rounded-lg bg-white/5 border border-white/10 mb-4 flex items-center justify-center text-white/40 text-xs">
                Thumbnail
              </div>
              <h3 className="font-semibold text-white">{p.title}</h3>
              <p className="text-white/70 text-sm mt-1 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-4">
                <a href={p.demo} className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium hover:bg-white/10">Lihat Demo</a>
                <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-3 py-1.5 text-xs font-medium shadow-lg shadow-sky-500/20 hover:brightness-110">Lihat Repo</a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Pendidikan */}
      <Section id="education" title="Pendidikan" subtitle="Tempat saya belajar dan berkembang.">
        <div className="relative">
          <div className="absolute left-3 md:left-1.5 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-6">
            <EduItem school="Politeknik Negeri Jember" program="Teknik Informatika (D4)" period="— Aktif"/>
            <EduItem school="SMA Negeri Jenggawah" program="— IPA" period="— Lulus"/>
          </div>
        </div>
      </Section>

      {/* Kontak */}
      <Section id="contact" title="Ayo Terhubung" subtitle="Terbuka untuk kolaborasi, magang, dan proyek menarik.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Kirim pesan</h3>
            <p className="text-white/70 text-sm mt-1">Email adalah cara tercepat untuk menghubungi saya.</p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-medium shadow-lg shadow-sky-500/20 hover:brightness-110">
                <Mail size={16} /> Tulis email
              </a>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10">
                <Phone size={16} /> Telepon {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Temukan saya online</h3>
            <div className="flex flex-wrap items-center gap-3 mt-4 text-white/80">
              <a className="hover:text-white inline-flex items-center gap-2" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
              <a className="hover:text-white inline-flex items-center gap-2" href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
              <a className="hover:text-white inline-flex items-center gap-2" href="https://your-portfolio.example" target="_blank" rel="noreferrer"><Globe size={16}/> Situs</a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Profil Pribadi — Dibuat dengan sepenuh hati.
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
