import React from "react";
import styles from "./style.module.css";
import Card from "./Card";

const JoinInvictus = ({ cardsData }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Join
        <br />
        Invictus
      </h1>
      <div className={styles.cardsContainer}>
        <div className={styles.cardsWrapper}>
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              isSecondCard={card.isSecondCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinInvictus;
