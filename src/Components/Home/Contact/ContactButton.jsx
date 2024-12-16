import React from "react";
import styles from "./style.module.css";

function ContactButton({ icon, text, variant = "primary" }) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      tabIndex="0"
      role="button"
    >
      <img loading="lazy" src={icon} alt="" className={styles.icon} />
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
}
export default ContactButton;
