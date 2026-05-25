import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'

function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="section-card group overflow-hidden p-0"
    >
      <div className="overflow-hidden border-b border-slate-200/70 dark:border-slate-800">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <div className="p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-500 dark:text-sky-300">
          {project.eyebrow}
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-slate-50">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-300/70 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              <FaArrowUpRightFromSquare className="mr-2" />
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard