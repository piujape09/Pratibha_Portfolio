import { motion } from 'framer-motion'

const CATEGORY_COLORS = {
  Languages:       'neon-cyan',
  Frontend:        'neon-blue',
  Backend:         'neon-purple',
  Databases:       'neon-pink',
  'DevOps & Tools':'neon-green',
  Concepts:        'neon-cyan',
}

const COLOR_MAP = {
  'neon-cyan':   { bar: 'from-neon-cyan to-neon-blue',    border: 'border-neon-cyan/30',   text: 'text-neon-cyan',   glow: 'shadow-neon-cyan' },
  'neon-blue':   { bar: 'from-neon-blue to-neon-purple',  border: 'border-neon-blue/30',   text: 'text-neon-blue',   glow: 'shadow-neon-blue' },
  'neon-purple': { bar: 'from-neon-purple to-neon-pink',  border: 'border-neon-purple/30', text: 'text-neon-purple', glow: 'shadow-neon-purple' },
  'neon-pink':   { bar: 'from-neon-pink to-neon-purple',  border: 'border-neon-pink/30',   text: 'text-neon-pink',   glow: 'shadow-neon-pink' },
  'neon-green':  { bar: 'from-neon-green to-neon-cyan',   border: 'border-neon-green/30',  text: 'text-neon-green',  glow: '' },
}

function SkillCard({ category }) {
  const col = COLOR_MAP[CATEGORY_COLORS[category.title]] || COLOR_MAP['neon-cyan']

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`holo-card glass rounded-2xl p-6 border ${col.border} space-y-5`}
    >
      <div className="flex items-center gap-3">
        <div className={`h-2 w-2 rounded-full bg-current ${col.text} animate-pulse`} />
        <h3 className={`font-display font-semibold text-lg ${col.text}`}>{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map(skill => (
          <span
            key={skill.name}
            className={`rounded-full border ${col.border} bg-white/3 px-3 py-1.5 text-xs font-medium text-slate-200`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function SpaceSkillsSection({ skillCategories }) {
  return (
    <section id="skills" className="section-space">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="font-mono text-neon-cyan/60 text-sm tracking-[0.3em]">&gt; TECH_STACK</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map(cat => <SkillCard key={cat.title} category={cat} />)}
        </div>
      </div>
    </section>
  )
}
