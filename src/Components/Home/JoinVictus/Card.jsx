import React from "react";
import styles from "./style.module.css";

const Card = ({ title, description, isSecondCard }) => {
  return (
    <div
      style={{ backgroundColor: "black", borderRadius: "58px" }}
      className={isSecondCard ? styles.secondColumn : styles.cardColumn}
    >
      <div
        className={isSecondCard ? styles.secondCardContent : styles.cardContent}
      >
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardDescription}>{description}</div>
      </div>
    </div>
  );
};

export default Card;
