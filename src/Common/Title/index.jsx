import React from "react";
import styles from "./styles.module.css";

export const Title = ({ title, isWhite, description, width, desWidth }) => {
  return (
    <div className={styles.titleWrapper}>
      <h1
        className={styles.title}
        style={isWhite ? { color: "#fff" } : width ? { maxWidth: width } : {}}
      >
        {title}
      </h1>
      {description && (
        <p
          className={styles.titleDescription}
          style={desWidth ? { width: desWidth } : {}}
        >
          {description}
        </p>
      )}
    </div>
  );
};
