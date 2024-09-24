import React from "react";
import styles from "./Card.module.css";

const FilmeFilter = ({ filterText, setFilterText }) => {
  return (
    <div className={styles.div_input}>
      <input
        className={styles.input}
        type="text"
        placeholder="Nome do filme"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    </div>
  );
};

export default FilmeFilter;
