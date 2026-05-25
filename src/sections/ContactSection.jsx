import { motion } from 'framer-motion'
import { HiMapPin, HiOutlineEnvelope, HiOutlinePhone } from 'react-icons/hi2'
import ContactForm from '../components/ContactForm'
import SectionHeading from '../components/SectionHeading'
import SocialLinks from '../components/SocialLinks'
import { fadeInUp, staggerContainer } from '../utils/motion'

function ContactSection({ siteConfig, socialLinks }) {
  return (
    <section id="contact" className="section-shell py-24 sm:py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={fadeInUp}>
          <SectionHeading
            eyebrow="Contact"
            title="Ready for internships, full-time roles, and meaningful engineering conversations."
            description="Reach out for opportunities, collaborations, or technical discussions. The form works as a placeholder email integration and is easy to replace with your preferred provider."
          />
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="section-card">
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">
                Contact details
              </h3>
              <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-500 dark:text-sky-300">
                    <HiOutlineEnvelope size={20} />
                  </span>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </div>
                {siteConfig.phone ? (
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-500 dark:text-sky-300">
                      <HiOutlinePhone size={20} />
                    </span>
                    <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>
                      {siteConfig.phone}
                    </a>
                  </div>
                ) : null}
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-500 dark:text-sky-300">
                    <HiMapPin size={20} />
                  </span>
                  <span>{siteConfig.location}</span>
                </div>
              </div>
            </div>

            <div className="section-card">
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">
                Social links
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Keep the links in your environment variables so they are easy to update without touching component code.
              </p>
              <SocialLinks links={socialLinks} className="mt-6" compact />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ContactForm
              recipientEmail={siteConfig.email}
              recipientName={siteConfig.name}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactSection