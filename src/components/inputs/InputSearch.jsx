import React from "react";
import styles from "./InputSearch.module.css";
export default function InputSearch() {
  return (
    <>
      <div className={styles.input_ctn}>
        <input
          placeholder="Buscar..."
          className={styles.input_search}
          type="text"
          required
        />
      </div>
    </>
  );
}
