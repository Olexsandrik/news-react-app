import React from "react";
import styles from "./styles.module.css";

export const Search = ({ keywords, setKeyWords }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeyWords(e.target.value)}
        className={styles.input}
        placeholder="Js"
      />
    </div>
  );
};
