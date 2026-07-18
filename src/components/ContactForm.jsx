import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('error');
      setMessage('Please complete all fields before sending your message.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (!response.ok) {
          throw new Error('Request failed');
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 900));
      }

      setStatus('success');
      setMessage('Your message has been sent successfully.');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
      setMessage('Unable to send your message right now. Please try again later.');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label>
        <span>Your Name</span>
        <input name="name" value={form.name} onChange={handleChange} type="text" autoComplete="name" />
      </label>
      <label>
        <span>Your Email</span>
        <input name="email" value={form.email} onChange={handleChange} type="email" autoComplete="email" />
      </label>
      <label>
        <span>Your Subject</span>
        <input name="subject" value={form.subject} onChange={handleChange} type="text" />
      </label>
      <label>
        <span>Your Message</span>
        <textarea name="message" value={form.message} onChange={handleChange} rows="7" />
      </label>

      {message ? (
        <p className={`contact-form__message contact-form__message--${status}`} role="status" aria-live="polite">
          {message}
        </p>
      ) : null}

      <button className="btn btn--primary contact-form__submit" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}