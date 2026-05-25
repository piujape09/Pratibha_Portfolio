import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import { cn } from '../utils/classNames'

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  email: HiOutlineMail,
}

function SocialLinks({ links, className = '', compact = false }) {
  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {links.map((link) => {
        const Icon = iconMap[link.type] || HiOutlineMail

        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
            aria-label={link.label}
            className={cn(
              'inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/75 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900/65 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:text-sky-300',
              compact && 'h-11 w-11 justify-center px-0',
            )}
          >
            <Icon size={compact ? 16 : 14} />
            {!compact ? <span>{link.label}</span> : null}
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks