import React, { useEffect, useRef } from "react";
import ImageCard from "./ImageCard";
import styles from "./styles.module.css";

const imageData = [
  {
    src: "assets/home/success/img1.png",
    alt: "Meta success visualization",
  },
  {
    src: "assets/home/success/img1.png",
    alt: "Meta success metrics",
  },
  {
    src: "assets/home/success/img3.png",
    alt: "Meta success analytics",
  },
];

const MetaSuccess = () => {
  const imageGridRef = useRef(null);

  useEffect(() => {
    const centerSecondImage = () => {
      const container = imageGridRef.current;
      const images = container.querySelectorAll("img");

      if (images.length >= 2) {
        const secondImage = images[1]; // Get the second image

        // Scroll the container to the second image
        const containerWidth = container.offsetWidth;
        const secondImageOffset = secondImage.offsetLeft;
        const imageWidth = secondImage.offsetWidth;

        // Calculate the center position for the second image
        const scrollPosition =
          secondImageOffset - (containerWidth - imageWidth) / 2;

        const adjustedScrollPosition = scrollPosition + -100;

        // Scroll the container to the calculated position
        container.scrollLeft = adjustedScrollPosition;
      }
    };

    // Run the function once the component is mounted
    setTimeout(centerSecondImage, 0); // Ensuring images are rendered before the calculation
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        <span className={styles.headingLight}>Realtime</span>
        <span className={styles.headingBold}>Meta Success</span>
      </h1>

      <div className={styles.imageGrid} ref={imageGridRef}>
        <div className={styles.imageContainer}>
          {imageData.map((image, index) => (
            <div key={index} className={styles.imageColumn}>
              <ImageCard src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>

      <button
        className={styles.button}
        tabIndex="0"
        aria-label="Visit KR Institute"
      >
        KR Institute
      </button>
    </div>
  );
};

export default MetaSuccess;
