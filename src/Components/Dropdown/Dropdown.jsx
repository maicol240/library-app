import React, { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.css";
import menu from "/menu.svg";

export default function Dropdown({ filters, handleFilterChange, status }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (filter) => {
    handleFilterChange(filter);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button onClick={toggleDropdown} className={styles.dropbtn}>
        <img src={menu} alt="Menu" />
      </button>
      <div className={`${styles.dropdownContent} ${isOpen ? styles.show : ""}`}>
        {filters.map((filter) => (
          <h2
            className={`status ${status === filter ? "active" : " "}`}
            onClick={() => handleOptionClick(filter)}
            key={filter}
          >
            {filter}
          </h2>
        ))}
      </div>
    </div>
  );
}
