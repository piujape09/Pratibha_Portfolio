function CertificationCard({ certification }) {
  return (
    <article className="section-card h-full">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-500 dark:text-sky-300">
        {certification.year || certification.issuer}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-slate-50">
        {certification.title}
      </h3>
      {certification.year ? (
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {certification.issuer}
        </p>
      ) : null}
    </article>
  )
}

export default CertificationCard