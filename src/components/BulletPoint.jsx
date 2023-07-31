import React from "react";
import styles from "../styles/BulletPoint.module.css";

function BulletPoint({ number, title, text }) {
  return (
    <div>
      <div className={styles.title}>
        <p className={styles.bulletPoint}>{number}</p>
        <h3>{title}</h3>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default BulletPoint;
