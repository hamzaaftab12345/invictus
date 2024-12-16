import React from "react";
import ContactButton from "./ContactButton";
import styles from "./style.module.css";

function ContactSection({ contactButtons }) {
  return (
    <section
      className={`container d-flex flex-column align-items-center text-center ${styles.container}`}
    >
      <header className="mb-4">
        <h2 className={`${styles.title} mb-3`}>
          Have more questions? Let's talk
        </h2>
        <p className={`${styles.subtitle} mb-4`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          diam felis,{" "}
        </p>
      </header>
      <div className="w-100">
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          {contactButtons.map((button, index) => (
            <ContactButton
              key={index}
              icon={button.icon}
              text={button.text}
              variant={button.variant}
            />
          ))}
        </div>
        <p className={`${styles.availability} mt-3`}>
          We are available on all days
        </p>
      </div>
    </section>
  );
}

export default ContactSection;
