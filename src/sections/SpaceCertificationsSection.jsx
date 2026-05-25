import { motion } from 'framer-motion'

const CERT_ICONS = ['OCI', 'SB', 'JV', 'CC', 'TCS', 'PY', 'DB']

export default function SpaceCertificationsSection({ certifications, educationItems, leadershipItems }) {
  return (
    <section id="certifications" className="section-space">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="font-mono text-neon-cyan/60 text-sm tracking-[0.3em]">&gt; CREDENTIALS</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
        </motion.div>

        {/* ── Education ── */}
        <div className="space-y-6">
          <p className="font-mono text-xs text-neon-purple/60 tracking-widest">EDUCATION[]</p>
          <div className="grid gap-6 md:grid-cols-3">
            {educationItems.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="holo-card glass rounded-2xl p-6 border border-neon-purple/20 space-y-3"
              >
                <span className="font-mono text-xs text-neon-purple/60">{edu.duration}</span>
                <h3 className="font-display font-semibold text-white text-base leading-snug">{edu.degree}</h3>
                <p className="text-slate-400 text-sm">{edu.institution}</p>
                {edu.score && (
                  <span className="inline-flex rounded-full bg-neon-purple/10 border border-neon-purple/25 px-3 py-1 text-xs font-mono text-neon-purple">
                    {edu.score}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Certifications ── */}
        <div className="space-y-6">
          <p className="font-mono text-xs text-neon-cyan/60 tracking-widest">CERTIFICATIONS[]</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="holo-card glass rounded-2xl p-5 border border-neon-cyan/15 flex flex-col items-start gap-3"
              >
                <div className="h-10 w-10 rounded-xl bg-neon-cyan/10 border border-neon-cyan/25 flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-neon-cyan">
                    {CERT_ICONS[i] || cert.title.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm leading-snug">{cert.title}</p>
                  <p className="text-neon-cyan/60 text-xs mt-1">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Leadership ── */}
        {leadershipItems?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-neon-pink/20 space-y-5"
          >
            <p className="font-mono text-xs text-neon-pink/60 tracking-widest">LEADERSHIP_AND_ACHIEVEMENTS[]</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {leadershipItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-pink" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
