import React from "react";
import styles from "../styles/HeroSection.module.css";
import MainButton from "./MainButton";

function HeroSection() {
  return (
    <div className={`${styles.heroSection} maxedWidth`}>
      <div className={styles.heroText}>
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <MainButton />
      </div>
      <div className={styles.heroImage}>
        <img
          src="../../public/images/illustration-intro.svg"
          alt="images of graphs"
        />
      </div>
    </div>
  );
}

export default HeroSection;
