import { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.content}>
        <span>READY?</span>

        <h2>
          Your Future
          <strong> Starts Now.</strong>
        </h2>

        <p>Take the next step toward becoming AI-ready.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Tell us about your goal..."
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit">Start My AI Journey →</button>
        </form>

        {submitted && (
          <p className={styles.success}>
            🎉 Thank you, {form.name || "there"}! We'll contact you soon.
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;
