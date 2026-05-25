import { useState } from 'react'

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function ContactForm({ recipientEmail, recipientName }) {
  const [formValues, setFormValues] = useState(initialFormState)
  const [status, setStatus] = useState({ type: '', message: '' })

  function handleChange(event) {
    const { name, value } = event.target

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!formValues.name || !formValues.email || !formValues.message) {
      setStatus({
        type: 'error',
        message: 'Please fill out your name, email, and message before sending.',
      })
      return
    }

    const emailSubject = encodeURIComponent(
      formValues.subject || `Portfolio inquiry from ${formValues.name}`,
    )
    const emailBody = encodeURIComponent(
      `Hi ${recipientName},\n\n${formValues.message}\n\nFrom,\n${formValues.name}\n${formValues.email}`,
    )

    window.location.href = `mailto:${recipientEmail}?subject=${emailSubject}&body=${emailBody}`

    setStatus({
      type: 'success',
      message:
        'Your default email client has been opened. Replace this mailto flow with EmailJS, Formspree, or your backend endpoint when ready.',
    })
    setFormValues(initialFormState)
  }

  return (
    <form onSubmit={handleSubmit} className="section-card space-y-5">
      <div>
        <h3 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">
          Let&apos;s build something useful.
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          This form currently uses a mailto placeholder so you can customize it with your preferred email service later.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
            Name
          </span>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-300/70 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100"
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
            Email
          </span>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-300/70 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
          Subject
        </span>
        <input
          type="text"
          name="subject"
          value={formValues.subject}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300/70 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100"
          placeholder="How can I help?"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
          Message
        </span>
        <textarea
          name="message"
          value={formValues.message}
          onChange={handleChange}
          rows="6"
          className="w-full rounded-2xl border border-slate-300/70 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100"
          placeholder="Tell me about your project, team, or opportunity."
        />
      </label>

      {status.message ? (
        <p
          className={`rounded-2xl px-4 py-3 text-sm ${
            status.type === 'error'
              ? 'bg-rose-500/10 text-rose-600 dark:text-rose-300'
              : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
          }`}
        >
          {status.message}
        </p>
      ) : null}

      <button type="submit" className="button-primary">
        Send Message
      </button>
    </form>
  )
}

export default ContactForm