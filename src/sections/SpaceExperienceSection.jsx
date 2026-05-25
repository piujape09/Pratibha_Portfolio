import { motion } from 'framer-motion'

export default function SpaceExperienceSection({ experienceItems }) {
  return (
    <section id="experience" className="section-space">
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="font-mono text-neon-cyan/60 text-sm tracking-[0.3em]">&gt; WORK_HISTORY</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
        </motion.div>

        <div className="relative pl-14">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="space-y-12">
            {experienceItems.map((item, i) => (
              <motion.div
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-8 top-5 h-4 w-4 rounded-full border-2 border-neon-cyan bg-space-void shadow-neon-cyan" />
                <div className="absolute -left-7 top-5 h-2 w-2 rounded-full bg-neon-cyan animate-pulse" />

                <div className="holo-card glass-cyan rounded-2xl p-8 border border-neon-cyan/15 space-y-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">{item.role}</h3>
                      <p className="text-neon-cyan font-medium mt-1">{item.company}</p>
                    </div>
                    <span className="rounded-full px-4 py-1.5 text-xs font-mono border border-neon-cyan/25 text-neon-cyan/70 bg-neon-cyan/5 whitespace-nowrap">
                      {item.duration}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {item.achievements.map((a, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-400 leading-7">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neon-cyan/60" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  {item.techStack && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.techStack.map(t => (
                        <span key={t} className="rounded-full border border-neon-purple/25 bg-neon-purple/5 px-3 py-1 text-xs font-mono text-neon-purple/80">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
