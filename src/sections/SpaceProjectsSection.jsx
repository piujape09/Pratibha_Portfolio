import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa6'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

function ProjectCard({ project, index }) {
  const colors = ['border-neon-cyan/30', 'border-neon-purple/30', 'border-neon-pink/30']
  const accents = ['text-neon-cyan', 'text-neon-purple', 'text-neon-pink']
  const glows = ['shadow-neon-cyan', 'shadow-neon-purple', 'shadow-neon-pink']
  const color  = colors[index  % 3]
  const accent = accents[index % 3]
  const glow   = glows[index   % 3]

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className={`holo-card glass rounded-2xl border ${color} overflow-hidden flex flex-col h-full`}
    >
      {/* Header band */}
      <div className="relative h-40 overflow-hidden bg-space-mid flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5" />
        <div className={`absolute top-4 left-4 text-xs font-mono ${accent} tracking-widest opacity-60`}>
          {project.eyebrow}
        </div>
        {/* Abstract tech icon */}
        <div className={`relative h-20 w-20 rounded-2xl border ${color} bg-white/5 flex items-center justify-center`}>
          <span className={`font-display font-bold text-2xl ${accent}`}>
            {project.title.charAt(0)}
          </span>
          <div className={`absolute -inset-1 rounded-2xl blur-sm opacity-20 ${glow}`} />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        <h3 className="font-display font-semibold text-lg text-white leading-snug">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-7 flex-1">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <span key={tech} className={`rounded-full px-3 py-1 text-xs font-mono border ${color} ${accent}/80 bg-white/3`}>
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer"
              className={`flex items-center gap-2 text-xs font-medium ${accent} hover:opacity-80 transition cursor-none`}>
              <FaGithub size={14} /> Code
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition cursor-none">
              <HiArrowTopRightOnSquare size={14} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function SpaceProjectsSection({ featuredProjects, githubUrl }) {
  return (
    <section id="projects" className="section-space">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="font-mono text-neon-cyan/60 text-sm tracking-[0.3em]">&gt; PROJECTS.list</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-neon-pink to-transparent" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href={githubUrl} target="_blank" rel="noreferrer" className="btn-neon cursor-none">
            <FaGithub size={16} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
