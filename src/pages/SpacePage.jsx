import { useEffect, useState } from 'react'
import SpaceBackground from '../components/SpaceBackground'
import SpaceNavbar from '../components/SpaceNavbar'
import CursorGlow from '../components/CursorGlow'
import ScrollProgress from '../components/ScrollProgress'
import RocketBackToTop from '../components/RocketBackToTop'
import SpaceHeroSection from '../sections/SpaceHeroSection'
import SpaceAboutSection from '../sections/SpaceAboutSection'
import SpaceSkillsSection from '../sections/SpaceSkillsSection'
import SpaceProjectsSection from '../sections/SpaceProjectsSection'
import SpaceExperienceSection from '../sections/SpaceExperienceSection'
import SpaceCertificationsSection from '../sections/SpaceCertificationsSection'
import SpaceContactSection from '../sections/SpaceContactSection'
import SpaceFooter from '../sections/SpaceFooter'
import {
  siteConfig,
  aboutContent,
  skillCategories,
  featuredProjects,
  experienceItems,
  certifications,
  educationItems,
  leadershipItems,
} from '../data/portfolio'

const SECTIONS = ['home','about','skills','projects','experience','certifications','contact']

export default function SpacePage({ onOpenResume }) {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )
    SECTIONS.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      {/* Persistent space backdrop */}
      <SpaceBackground />

      {/* Overlay utilities */}
      <CursorGlow />
      <ScrollProgress />

      {/* Navigation */}
      <SpaceNavbar activeSection={activeSection} onOpenResume={onOpenResume} />

      {/* Main content — above the background */}
      <main className="relative z-10">
        <SpaceHeroSection siteConfig={siteConfig} onOpenResume={onOpenResume} />
        <SpaceAboutSection aboutContent={aboutContent} siteConfig={siteConfig} />
        <SpaceSkillsSection skillCategories={skillCategories} />
        <SpaceProjectsSection featuredProjects={featuredProjects} githubUrl={siteConfig.githubUrl} />
        <SpaceExperienceSection experienceItems={experienceItems} />
        <SpaceCertificationsSection
          certifications={certifications}
          educationItems={educationItems}
          leadershipItems={leadershipItems}
        />
        <SpaceContactSection siteConfig={siteConfig} />
      </main>

      <SpaceFooter siteConfig={siteConfig} />
      <RocketBackToTop />
    </div>
  )
}
