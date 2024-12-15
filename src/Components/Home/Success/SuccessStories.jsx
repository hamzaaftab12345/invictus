import React from "react";
import styles from "./style.module.css";

// SuccessStories component that accepts stories via props
const SuccessStories = ({ stories }) => {
  return (
    <div className={`text-center container ${styles.successStories}`}>
      <h2 className={styles.title}>
        Client <span className={styles.highlight}>Success Stories</span>
      </h2>
      <div className="row justify-content-center mt-4">
        {stories.map((story, index) => (
          <div
            className="col-12 col-md-4 d-flex justify-content-center"
            key={index}
          >
            <div className={styles.card}>
              <p style={{ fontSize: "24px" }}>{story.title}</p>
              <h3
                style={{
                  fontSize: index === 2 ? "61px" : "61px", // Reduce gap for third item
                }}
              >
                {story.subtitle.includes("just") ? (
                  <>
                    <span style={{ fontSize: "32px" }}>{story.subtitle}</span>
                    <br />
                    {story.percentage}
                  </>
                ) : (
                  <>
                    {story.percentage}
                    <br />
                    <span style={{ fontSize: "32px" }}>{story.subtitle}</span>
                  </>
                )}
              </h3>
              <div className={styles.arrow}>
                <img
                  style={{ width: "76px" }}
                  src={story.imageUrl}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
