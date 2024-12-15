import React from "react";
import styles from "./style.module.css";

export function MetaFeatureCard({
  title,
  description,
  iconSrc,
  backgroundSrc,
}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.cardContent}>
        <div className={styles.iconWrapper}>
          <div className={styles.iconContainer}>
            <img
              loading="lazy"
              src={backgroundSrc}
              className={styles.backgroundImage}
              alt=""
            />
            <img
              loading="lazy"
              src={iconSrc}
              className={styles.featureIcon}
              alt={`${title} feature icon`}
            />
          </div>
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.textContent}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
