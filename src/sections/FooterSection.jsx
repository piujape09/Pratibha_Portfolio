import SocialLinks from '../components/SocialLinks'

function FooterSection({ siteConfig, links, socialLinks }) {
  return (
    <footer className="section-shell pb-10 pt-6">
      <div className="section-card flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <a href="#home" className="font-display text-xl font-semibold text-slate-950 dark:text-slate-50">
            {siteConfig.name}
          </a>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            Modern portfolio crafted with React, Vite, Tailwind CSS, and Framer Motion for strong recruiter readability and polished presentation.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex flex-wrap gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
            {links.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="hover:text-sky-500 dark:hover:text-sky-300">
                {link.label}
              </a>
            ))}
          </div>
          <SocialLinks links={socialLinks} compact />
        </div>
      </div>
    </footer>
  )
}

export default FooterSection