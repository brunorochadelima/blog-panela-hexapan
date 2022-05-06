import React from 'react';
import styles from 'components/Cards/Card.module.scss';
import { Card_Post } from 'types/Card';

export default function Card (props: Card_Post) {
  const { photo, date, title, resume} = props;

  return (
    <div className={styles.card}>
      <img src={photo} alt={title} />
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{resume}</p>
    </div>
  );
}
