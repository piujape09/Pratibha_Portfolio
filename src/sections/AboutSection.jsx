import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa6'
import SectionHeading from '../components/SectionHeading'
import { fadeInUp, staggerContainer } from '../utils/motion'

function AboutSection({ aboutContent, resumeUrl, onOpenResume }) {
  return (
    <section id="about" className="section-shell py-24 sm:py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-10"
      >
        <motion.div variants={fadeInUp}>
          <SectionHeading
            eyebrow="About"
            title="Engineering with product focus and platform discipline."
            description="A concise snapshot of how I work, what I care about, and where I want to grow next."
          />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <motion.article variants={fadeInUp} className="section-card">
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">
              Professional summary
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              {aboutContent.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" className="button-primary" onClick={onOpenResume}>
                Preview Resume
              </button>
              <a href={resumeUrl} className="button-secondary" target="_blank" rel="noreferrer">
                <FaDownload className="mr-2" />
                Download Resume
              </a>
            </div>
          </motion.article>

          <motion.article variants={fadeInUp} className="section-card">
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">
              Career goals
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              {aboutContent.careerGoals}
            </p>
            <div className="mt-6 space-y-4">
              {aboutContent.highlights.map((highlight) => (
                <div key={highlight} className="flex gap-3 rounded-2xl bg-slate-100/80 p-4 dark:bg-slate-900/80">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection