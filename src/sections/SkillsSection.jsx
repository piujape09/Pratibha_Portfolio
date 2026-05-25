import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SkillCategoryCard from '../components/SkillCategoryCard'
import { fadeInUp, staggerContainer } from '../utils/motion'

function SkillsSection({ skillCategories }) {
  return (
    <section id="skills" className="section-shell py-24 sm:py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={fadeInUp}>
          <SectionHeading
            eyebrow="Skills"
            title="A balanced stack across product engineering and DevOps delivery."
            description="Organized by capability so recruiters and hiring teams can quickly scan the depth of my toolkit."
          />
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={fadeInUp}>
              <SkillCategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default SkillsSection