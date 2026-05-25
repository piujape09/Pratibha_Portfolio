import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}
const stagger = { visible: { transition: { staggerChildren: 0.15 } } }

export default function SpaceAboutSection({ aboutContent, siteConfig }) {
  return (
    <section id="about" className="section-space">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="text-center space-y-4">
            <p className="font-mono text-neon-cyan/60 text-sm tracking-[0.3em]">&gt; SYSTEM_INFO</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: bio */}
            <motion.div variants={fadeUp} className="space-y-6">
              <div className="glass border-glow-cyan rounded-2xl p-8 scan-effect">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-2 w-2 rounded-full bg-neon-cyan animate-pulse" />
                  <span className="font-mono text-xs text-neon-cyan/60 tracking-widest">PROFILE.md</span>
                </div>
                <p className="text-slate-300 leading-8">{aboutContent.summary}</p>
                <p className="text-slate-400 leading-8 mt-4">{aboutContent.careerGoals}</p>
              </div>

              <div className="glass rounded-2xl p-6 space-y-4">
                {[
                  { label: 'Location',     value: siteConfig.location },
                  { label: 'Email',        value: siteConfig.email },
                  { label: 'Availability', value: siteConfig.availability },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-4 text-sm">
                    <span className="w-28 font-mono text-neon-cyan/60 shrink-0">{label}:</span>
                    <span className="text-slate-300 break-all">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: highlights + metrics */}
            <motion.div variants={fadeUp} className="space-y-6">
              <div className="glass border-glow-purple rounded-2xl p-8 space-y-4">
                <p className="font-mono text-xs text-neon-purple/60 tracking-widest mb-6">HIGHLIGHTS[]</p>
                {aboutContent.highlights.map((item, i) => (
                  <div key={i} className="flex gap-4 text-sm text-slate-300 leading-7">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-purple" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {siteConfig.metrics.map(m => (
                  <div key={m.value} className="glass-cyan rounded-2xl p-5 text-center border-glow-cyan">
                    <p className="font-display font-bold text-2xl text-neon-cyan">{m.value}</p>
                    <p className="text-xs text-slate-400 mt-1 leading-4">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
