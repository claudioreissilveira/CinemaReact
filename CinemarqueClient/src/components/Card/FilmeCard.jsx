import React from "react";
import styles from "./Card.module.css";

const FilmeCard = ({ filme }) => {
  return (
    <div className={styles.card}>
      <img
        src={filme.capa}
        alt={`Capa do filme ${filme.titulo}`}
        className={styles.card_img}
      />
      <div className={styles.card_content}>
        <h2>{filme.titulo}</h2>
        <p>Ano: {filme.ano}</p>
        <p>Gênero: {filme.genero}</p>
        <p>Diretor: {filme.diretor}</p>
        <p>Classificação: {filme.classificacao}</p>
        <p>Duração: {filme.duracao} minutos</p>
      </div>
    </div>
  );
};

export default FilmeCard;
