import React from "react";
import styles from "./style.module.css";

export default function PageBanner({
  title,
  description,
  buttonTitle,
  imagePath,
}) {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <div className={styles.contentContainer}>
          <div className={styles.flexContainer}>
            <div className={styles.textColumn}>
              <div className={styles.textContent}>
                <h1 className={styles.mainHeading}>
                  <span className={styles.headingBold}>Supercharge</span>
                  <br />
                  Your <span className={styles.headingBold}>Business </span>
                  <br />
                  with{" "}
                  <span className={styles.headingHighlight}>Meta Ads </span>
                </h1>
                <p className={styles.description}>{description}</p>
                <button
                  className={styles.ctaButton}
                  onClick={() => {}}
                  tabIndex="0"
                  aria-label="Start Your Free Consultation Today"
                >
                  {buttonTitle}
                </button>
              </div>
            </div>
            <div className={styles.imageColumn}>
              <img
                loading="lazy"
                src={imagePath}
                className={styles.heroImage}
                alt="Meta Ads Business Growth Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
