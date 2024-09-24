import React, { useEffect, useState } from "react";
import FilmeCard from "./FilmeCard";
import styles from "./Card.module.css";

const Cartaz = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetch("/filmes.json")
      .then((response) => response.json())
      .then((data) => setFilmes(data.filmes));
  }, []);

  return (
    <div className={styles.cartaz}>
      {filmes.map((filme) => (
        <FilmeCard key={filme.id} filme={filme} />
      ))}
    </div>
  );
};

export default Cartaz;
