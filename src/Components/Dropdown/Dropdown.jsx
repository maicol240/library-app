import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import menu from "/menu.svg";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.dropbtn}>
        <img src={menu} alt="Menu" />
      </button>
      <div className={`${styles.dropdownContent} ${isOpen ? styles.show : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
