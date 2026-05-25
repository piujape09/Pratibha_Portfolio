import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

export default function SpaceFooter({ siteConfig }) {
  return (
    <footer className="relative z-10 border-t border-white/5 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl border border-neon-cyan/40 bg-neon-cyan/10 flex items-center justify-center">
            <span className="font-mono text-sm font-bold text-neon-cyan">PJ</span>
          </div>
          <div>
            <p className="font-display font-semibold text-white text-sm">{siteConfig.name}</p>
            <p className="text-slate-500 text-xs">{siteConfig.availability}</p>
          </div>
        </div>

        <p className="text-slate-600 text-xs font-mono order-3 md:order-2">
          © {new Date().getFullYear()} {siteConfig.name} — Built with React + Three.js
        </p>

        <div className="flex gap-3 order-2 md:order-3">
          <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer"
            className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/40 transition cursor-none">
            <FaGithub size={16} />
          </a>
          <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer"
            className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/40 transition cursor-none">
            <FaLinkedinIn size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
