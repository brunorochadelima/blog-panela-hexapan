import React from "react";
import styles from "components/Cards/Card.module.scss";
import cards from "./cards.json";

type Props = typeof cards[0];

export default function Card(props: Props) {
  const { photo, date, title, description } = props;

  return (
    <div className={styles.card}>
      <img src={photo} alt={title} />
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
