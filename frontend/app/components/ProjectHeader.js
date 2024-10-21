"use client";

import React, { useState } from "react";
import styles from "../styles/ProjectHeader.module.css";

export default function ProjectHeader() {
  const [filterStack, setFilterStack] = useState([]);

  const handleSetFilterStack = (value) => {};

  return (
    <div className={styles.technologyWrapper}>
      <span
        className={styles.technologyName}
        onClick={() => handleSetFilterStack("react-js")}
      >
        React js
      </span>
      <span
        className={styles.technologyName}
        onClick={() => handleSetFilterStack("next-js")}
      >
        Next js
      </span>
      <span
        className={`${styles.technologyName} activeTech`}
        onClick={() => handleSetFilterStack("tailwind-css")}
      >
        Tailwind
      </span>
      <span
        className={styles.technologyName}
        onClick={() => handleSetFilterStack("frontend")}
      >
        Frontend
      </span>
      <span
        className={styles.technologyName}
        onClick={() => handleSetFilterStack("backend")}
      >
        Backend
      </span>
      <span
        className={styles.technologyName}
        onClick={() => handleSetFilterStack("responsive")}
      >
        Responsive
      </span>
    </div>
  );
}
