"use client";

import React from "react";
import styles from "../styles/Modal.module.css";

export default function Modal({ children }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
}
