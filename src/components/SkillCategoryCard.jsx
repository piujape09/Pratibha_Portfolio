import {
  HiCodeBracket,
  HiCommandLine,
  HiCpuChip,
  HiCircleStack,
  HiCloud,
  HiServerStack,
} from 'react-icons/hi2'

const iconMap = {
  frontend: HiCodeBracket,
  backend: HiServerStack,
  devops: HiCommandLine,
  cloud: HiCloud,
  database: HiCircleStack,
  tools: HiCpuChip,
}

function SkillCategoryCard({ category }) {
  const Icon = iconMap[category.icon] || HiCodeBracket

  return (
    <article className="section-card h-full">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-500 dark:text-sky-300">
            <Icon size={22} />
          </div>
          <h3 className="text-xl font-semibold text-slate-950 dark:text-slate-50">
            {category.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {category.summary}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-200">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-200/80 dark:bg-slate-800">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default SkillCategoryCard