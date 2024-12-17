import React from "react";
import styles from "./styles.module.css";

 const ImageCard = ({ src, alt }) => {
  return (
    <div className={styles.imageColumn}>
      <img loading="lazy" src={src} alt={alt} className={styles.imageCard} />
    </div>
  );
};

export default ImageCard;