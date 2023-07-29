import React from "react";
import styles from "../styles/Header.module.css";
import MainButton from "./MainButton";

function Header() {
  return (
    <header className={styles.header}>
      <img
        src="../../public/images/bg-tablet-pattern.svg"
        alt=""
        className={styles.backgroundImage}
      />
      <a href="#">
        <img src="../../public/images/logo.svg" alt="logo" height={24} />
      </a>
      <nav className={styles.navigation}>
        <a href="#">Pricing</a>
        <a href="#">Product</a>
        <a href="#">About us</a>
        <a href="#">Careers</a>
        <a href="#">Community</a>
      </nav>
      <MainButton />
    </header>
  );
}

export default Header;
