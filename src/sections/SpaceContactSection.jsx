import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineEnvelope, HiOutlinePhone, HiMapPin, HiPaperAirplane } from 'react-icons/hi2'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

function Field({ label, name, value, onChange, type = 'text', required }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-mono text-neon-cyan/70 tracking-widest">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-neon-cyan/20 bg-white/3 px-4 py-3 text-sm text-neon-cyan placeholder-slate-600 outline-none transition focus:border-neon-cyan/50 focus:shadow-neon-cyan/10 focus:ring-1 focus:ring-neon-cyan/30 backdrop-blur-sm"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  )
}

export default function SpaceContactSection({ siteConfig }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent]   = useState(false)
  const [error, setError] = useState('')

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError('Please enter a valid email.')
      return
    }
    // Open mailto as a simple fallback
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body    = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`)
    setSent(true)
    setError('')
  }

  return (
    <section id="contact" className="section-space">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="font-mono text-neon-cyan/60 text-sm tracking-[0.3em]">&gt; ESTABLISH_CONNECTION</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-cyan rounded-2xl p-8 border-glow-cyan space-y-6">
              <p className="font-mono text-xs text-neon-cyan/60 tracking-widest">CONTACT_INFO</p>
              {[
                { icon: HiOutlineEnvelope, label: 'Email',    value: siteConfig.email,    href: `mailto:${siteConfig.email}` },
                { icon: HiOutlinePhone,    label: 'Phone',    value: siteConfig.phone,    href: `tel:${siteConfig.phone?.replace(/\s+/g,'')}` },
                { icon: HiMapPin,          label: 'Location', value: siteConfig.location, href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-neon-cyan/10 border border-neon-cyan/25 flex items-center justify-center shrink-0">
                    <Icon className="text-neon-cyan" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">{label}</p>
                    {href ? (
                      <a href={href} className="text-slate-200 hover:text-neon-cyan transition text-sm cursor-none">{value}</a>
                    ) : (
                      <p className="text-slate-200 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-6 border border-white/5 space-y-4">
              <p className="font-mono text-xs text-neon-purple/60 tracking-widest">SOCIAL_LINKS</p>
              <div className="flex gap-4">
                {[
                  { icon: FaGithub,     href: siteConfig.githubUrl,   label: 'GitHub' },
                  { icon: FaLinkedinIn, href: siteConfig.linkedinUrl, label: 'LinkedIn' },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 hover:border-neon-cyan/40 hover:text-neon-cyan transition cursor-none">
                    <Icon size={16} /> {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {sent ? (
              <div className="glass-cyan rounded-2xl border-glow-cyan p-12 flex flex-col items-center justify-center text-center space-y-4 h-full">
                <div className="h-16 w-16 rounded-full bg-neon-cyan/20 border border-neon-cyan/40 flex items-center justify-center">
                  <HiPaperAirplane className="text-neon-cyan" size={28} />
                </div>
                <h3 className="font-display font-bold text-xl text-white">Message sent!</h3>
                <p className="text-slate-400 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                <button onClick={() => setSent(false)} className="btn-neon text-sm mt-2 cursor-none">Send Another</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="glass rounded-2xl border border-neon-cyan/15 p-8 space-y-6 scan-effect">
                <p className="font-mono text-xs text-neon-cyan/60 tracking-widest">SEND_MESSAGE</p>
                <Field label="NAME" name="name"    value={form.name}    onChange={onChange} required />
                <Field label="EMAIL" name="email"  value={form.email}   onChange={onChange} type="email" required />
                <div className="space-y-2">
                  <label className="text-xs font-mono text-neon-cyan/70 tracking-widest">MESSAGE</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    required
                    placeholder="Enter your message"
                    className="w-full rounded-xl border border-neon-cyan/20 bg-white/3 px-4 py-3 text-sm text-neon-cyan placeholder-slate-600 outline-none transition focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 resize-none backdrop-blur-sm"
                  />
                </div>
                {error && <p className="text-neon-pink text-xs font-mono">{error}</p>}
                <button type="submit" className="btn-neon-solid w-full justify-center cursor-none">
                  <HiPaperAirplane size={16} /> Launch Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
