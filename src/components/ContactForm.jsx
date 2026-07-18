import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_ksfdoe4";
const TEMPLATE_ID = "template_25e4u2e";
const PUBLIC_KEY = "tG6JeYFsYcfPTurOt";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.title.trim() ||
      !form.message.trim()
    ) {
      setStatus("error");
      setMessage("Please complete all fields.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const templateParams = {
      name: form.name.trim(),
      email: form.email.trim(),
      title: form.title.trim(),
      message: form.message.trim(),
    };

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        {
          publicKey: PUBLIC_KEY,
        },
      );

      console.log("EmailJS success:", response);

      setStatus("success");
      setMessage("Message sent successfully.");

      setForm({
        name: "",
        email: "",
        title: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS failed:", error);
      console.error("Status:", error?.status);
      console.error("Message:", error?.text);

      setStatus("error");

      setMessage(
        error?.text
          ? `Unable to send message: ${error.text}`
          : "Unable to send message. Check the browser console.",
      );
    }
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <label>
        <span>Your Name</span>

        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
          required
        />
      </label>

      <label>
        <span>Your Email</span>

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />
      </label>

      <label>
        <span>Subject</span>

        <input
          name="title"
          type="text"
          value={form.title}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        <span>Message</span>

        <textarea
          name="message"
          rows="7"
          value={form.message}
          onChange={handleChange}
          required
        />
      </label>

      {message && (
        <p
          className={`contact-form__message contact-form__message--${status}`}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      )}

      <button
        className="btn btn--primary contact-form__submit"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading"
          ? "Sending..."
          : "Send Message"}
      </button>
    </form>
  );
}