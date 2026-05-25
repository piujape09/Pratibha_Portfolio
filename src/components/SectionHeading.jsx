function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <span className="section-label">{eyebrow}</span>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  )
}

export default SectionHeading