function ExperienceTimeline({ items }) {
  return (
    <div className="relative space-y-8 before:absolute before:left-[1.1rem] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-slate-300/70 dark:before:bg-slate-700 sm:before:left-1/2">
      {items.map((item, index) => (
        <article
          key={`${item.company}-${item.role}`}
          className="relative grid gap-4 sm:grid-cols-2 sm:gap-10"
        >
          <div className={index % 2 === 0 ? 'sm:pr-10' : 'sm:order-2 sm:pl-10'}>
            <div className="ml-10 rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900/60 sm:ml-0">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-500 dark:text-sky-300">
                {item.duration}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-slate-50">
                {item.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                {item.company}
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              {item.techStack && item.techStack.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-sky-300/50 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 dark:border-sky-400/30 dark:bg-sky-500/10 dark:text-sky-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          <div className={index % 2 === 0 ? 'hidden sm:block' : 'hidden sm:order-1 sm:block'} />
          <span className="absolute left-[1.1rem] top-8 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-sky-200 bg-sky-500 dark:border-slate-900 sm:left-1/2" />
        </article>
      ))}
    </div>
  )
}

export default ExperienceTimeline