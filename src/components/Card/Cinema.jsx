import React, { useEffect, useState } from "react";
import FilmeCard from "./FilmeCard";
import FilmeFilter from "./FilmFilter";
import styles from "./Card.module.css";

const Cinema = () => {
  const [filmes, setFilmes] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    fetch("/telecine.json")
      .then((response) => response.json())
      .then((data) => setFilmes(data.filmes));
  }, []);

  const filteredFilmes = filmes.filter((filme) =>
    filme.titulo.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <FilmeFilter filterText={filterText} setFilterText={setFilterText} />
      <div className={styles.cartaz}>
        {filteredFilmes.map((filme) => (
          <FilmeCard key={filme.id} filme={filme} />
        ))}
      </div>
    </div>
  );
};

export default Cinema;
