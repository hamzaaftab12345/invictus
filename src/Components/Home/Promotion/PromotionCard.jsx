import * as React from "react";
import Image from "next/image";
import styles from "./style.module.css";

export default function PromotionCard({
  title,
  subtitle,
  logos,
  backgroundImage,
  discountText,
  promotionDescription,
}) {
  const handleClaimOffer = () => {
    // Implement your claim offer logic here
    console.log("Claiming the offer!");
  };

  return (
    <div className={styles.promotionContainer}>
      <h2 className="text-center mb-4">
        <span className="fw-normal">{title}</span>{" "}
        <span className="fst-italic">{subtitle}</span>
      </h2>
      <div className={styles.promotionWrapper}>
        <Image
          src={backgroundImage}
          className={styles.backgroundImage}
          alt="Promotional background"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.contentBox}>
          <div className={styles.logoContainer}>
            {logos.map((logo, index) => (
              <Image
                style={{ width: "50px", height: "50px" }}
                key={index}
                loading="lazy"
                src={logo.src}
                className={logo.className}
                alt={logo.alt}
                width={100} // Adjust dimensions as needed
                height={100}
              />
            ))}
          </div>
          <div className={styles.headingIntro}>Enjoy a</div>
          <div className={styles.discountText}>{discountText}</div>
          <div className={styles.promotionDescription}>
            {promotionDescription}
          </div>
          <button
            className={styles.ctaButton}
            onClick={handleClaimOffer}
            tabIndex={0}
            aria-label="Claim your 30% discount offer"
          >
            Claim Your Offer Now!
          </button>
        </div>
      </div>
    </div>
  );
}
