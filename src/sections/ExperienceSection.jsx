import { motion } from 'framer-motion'
import ExperienceTimeline from '../components/ExperienceTimeline'
import SectionHeading from '../components/SectionHeading'
import { fadeInUp } from '../utils/motion'

function ExperienceSection({ experienceItems }) {
  return (
    <section id="experience" className="section-shell py-24 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeInUp}
      >
        <SectionHeading
          eyebrow="Experience"
          title="A timeline of practical delivery across software and infrastructure work."
          description="Experience is presented in a clear recruiter-friendly timeline with outcomes, ownership, and cross-functional range."
        />
      </motion.div>

      <div className="mt-10">
        <ExperienceTimeline items={experienceItems} />
      </div>
    </section>
  )
}

export default ExperienceSection