import { motion } from 'framer-motion'
import CertificationCard from '../components/CertificationCard'
import SectionHeading from '../components/SectionHeading'
import { fadeInUp, staggerContainer } from '../utils/motion'

function CertificationsSection({ certifications, education = [], leadership = [] }) {
  return (
    <section id="certifications" className="section-shell py-24 sm:py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={fadeInUp}>
          <SectionHeading
            eyebrow="Education & Certifications"
            title="Academic foundation paired with industry-recognized credentials."
            description="Computer Engineering education backed by certifications across DevOps, cloud, Java, Python, and databases."
          />
        </motion.div>

        {education.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {education.map((item) => (
              <motion.article
                key={item.degree + item.institution}
                variants={fadeInUp}
                className="section-card h-full"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-500 dark:text-sky-300">
                  {item.duration}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-950 dark:text-slate-50">
                  {item.degree}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.institution}
                </p>
                {item.score ? (
                  <p className="mt-3 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-500/15 dark:text-sky-200">
                    {item.score}
                  </p>
                ) : null}
              </motion.article>
            ))}
          </div>
        ) : null}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {certifications.map((certification) => (
            <motion.div key={certification.title} variants={fadeInUp}>
              <CertificationCard certification={certification} />
            </motion.div>
          ))}
        </div>

        {leadership.length > 0 ? (
          <motion.div variants={fadeInUp} className="section-card mt-10">
            <h3 className="text-xl font-semibold text-slate-950 dark:text-slate-50">
              Leadership & Achievements
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {leadership.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </motion.div>
    </section>
  )
}

export default CertificationsSection