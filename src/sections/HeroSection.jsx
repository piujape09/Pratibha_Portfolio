import { motion } from 'framer-motion'
import { FaArrowRightLong } from 'react-icons/fa6'
import SocialLinks from '../components/SocialLinks'
import TypingText from '../components/TypingText'
import { fadeInScale, fadeInUp, staggerContainer } from '../utils/motion'

function HeroSection({ siteConfig, socialLinks, onOpenResume }) {
  return (
    <section id="home" className="section-shell pt-28 sm:pt-32 lg:pt-36">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="grid items-center gap-10 lg:grid-cols-[1.2fr,0.8fr]"
      >
        <div>
          <motion.span variants={fadeInUp} className="section-label">
            {siteConfig.availability}
          </motion.span>
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400"
          >
            {siteConfig.primaryRole} + {siteConfig.secondaryRole}
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl"
          >
            {siteConfig.name}
            <span className="mt-4 block text-2xl font-medium sm:text-3xl lg:text-4xl">
              <TypingText words={siteConfig.typingRoles} />
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg"
          >
            {siteConfig.headline}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
            <button type="button" className="button-primary" onClick={onOpenResume}>
              View Resume
              <FaArrowRightLong className="ml-2" />
            </button>
            <a href="#contact" className="button-secondary">
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8">
            <SocialLinks links={socialLinks} />
          </motion.div>
        </div>

        <motion.div variants={fadeInScale} className="section-card relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-grid opacity-90" />
          <div className="relative">
            <div className="rounded-[2rem] border border-white/15 bg-slate-950 p-6 text-slate-50 shadow-glow">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
                What I bring
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                {siteConfig.intro}
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {siteConfig.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-slate-200/70 bg-white/85 p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <p className="text-2xl font-semibold text-slate-950 dark:text-slate-50">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection