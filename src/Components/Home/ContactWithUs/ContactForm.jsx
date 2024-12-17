import * as React from "react";
import styles from "./styles.module.css";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`${styles.contactContainer} d-flex flex-column justify-content-center align-items-center`}
    >
      <h1 className="text-center mb-4">Connect with Us</h1>
      <p className="text-center mb-5">
        Reach out to us for something awesome together
      </p>

      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center w-100"
      >
        <label htmlFor="name" className={styles["visually-hidden"]}>
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className={`form-control ${styles.inputField} mb-3`}
          placeholder="Your Name"
          required
          aria-label="Your Name"
        />

        <label htmlFor="email" className={styles["visually-hidden"]}>
          Your E-Mail
        </label>
        <input
          type="email"
          id="email"
          className={`form-control ${styles.inputField} mb-3`}
          placeholder="Your E-Mail"
          required
          aria-label="Your E-Mail"
        />

        <label htmlFor="mobile" className={styles["visually-hidden"]}>
          Your Mobile No.
        </label>
        <input
          type="tel"
          id="mobile"
          className={`form-control ${styles.inputField} `}
          placeholder="Your Mobile No."
          required
          aria-label="Your Mobile No."
        />

        <label htmlFor="message" className={styles["visually-hidden"]}>
          Message
        </label>
        <textarea
          id="message"
          className={`form-control ${styles.messageField} mb-3`}
          placeholder="Message"
          required
          aria-label="Message"
        />

        <button type="submit" className={`btn ${styles.submitButton} mt-4`}>
          Request a Callback
        </button>
      </form>
    </div>
  );
}
