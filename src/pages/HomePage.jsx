import Navbar from '../components/Navbar'
import ParticleBackground from '../components/ParticleBackground'
import ScrollToTopButton from '../components/ScrollToTopButton'
import { useGithubRepos } from '../hooks/useGithubRepos'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useTheme } from '../hooks/useTheme'
import {
  aboutContent,
  certifications,
  educationItems,
  experienceItems,
  featuredProjects,
  githubRepoFallback,
  leadershipItems,
  sectionLinks,
  siteConfig,
  skillCategories,
  socialLinks,
} from '../data/portfolio'
import AboutSection from '../sections/AboutSection'
import CertificationsSection from '../sections/CertificationsSection'
import ContactSection from '../sections/ContactSection'
import ExperienceSection from '../sections/ExperienceSection'
import FooterSection from '../sections/FooterSection'
import HeroSection from '../sections/HeroSection'
import ProjectsSection from '../sections/ProjectsSection'
import SkillsSection from '../sections/SkillsSection'

function HomePage({ onOpenResume }) {
  const { theme, toggleTheme } = useTheme()
  const activeSection = useScrollSpy(sectionLinks.map((link) => link.id))
  const { repos, isLoading, error } = useGithubRepos(siteConfig.githubUsername, 4)
  const displayedRepositories = repos.length ? repos : githubRepoFallback

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <ParticleBackground />
      <Navbar
        links={sectionLinks}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResume={onOpenResume}
      />

      <main className="relative z-10 pb-8">
        <HeroSection
          siteConfig={siteConfig}
          socialLinks={socialLinks}
          onOpenResume={onOpenResume}
        />
        <AboutSection
          aboutContent={aboutContent}
          resumeUrl={siteConfig.resumeUrl}
          onOpenResume={onOpenResume}
        />
        <SkillsSection skillCategories={skillCategories} />
        <ProjectsSection
          featuredProjects={featuredProjects}
          repositories={displayedRepositories}
          repoLoading={isLoading}
          repoError={error}
          githubUrl={siteConfig.githubUrl}
        />
        <ExperienceSection experienceItems={experienceItems} />
        <CertificationsSection
          certifications={certifications}
          education={educationItems}
          leadership={leadershipItems}
        />
        <ContactSection siteConfig={siteConfig} socialLinks={socialLinks} />
      </main>

      <FooterSection
        siteConfig={siteConfig}
        links={sectionLinks}
        socialLinks={socialLinks}
      />
      <ScrollToTopButton />
    </div>
  )
}

export default HomePage