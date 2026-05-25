import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { fadeInUp, staggerContainer } from '../utils/motion'

function ProjectsSection({ featuredProjects, repositories, repoLoading, repoError, githubUrl }) {
  return (
    <section id="projects" className="section-shell py-24 sm:py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={fadeInUp}>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work that blends user-facing quality with engineering reliability."
            description="Featured builds showcase interface polish, technical breadth, and measurable delivery thinking."
          />
        </motion.div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="mt-16 section-card">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-500 dark:text-sky-300">
                GitHub Integration
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-slate-50">
                Latest repositories
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                This section fetches recent repositories dynamically from the GitHub API using the configured username.
              </p>
            </div>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="button-secondary">
              View GitHub Profile
            </a>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {repoLoading ? (
              <div className="rounded-3xl border border-dashed border-slate-300/80 p-6 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400 lg:col-span-2">
                Loading repositories from GitHub...
              </div>
            ) : null}

            {!repoLoading
              ? repositories.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              : null}

            {!repoLoading && repoError ? (
              <div className="rounded-3xl bg-amber-500/10 p-6 text-sm text-amber-700 dark:text-amber-300 lg:col-span-2">
                {repoError} Showing fallback repository cards instead.
              </div>
            ) : null}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ProjectsSection