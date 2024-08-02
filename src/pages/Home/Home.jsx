import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="div_deg">
      <h1 className="text-fk">Seja bem vindo ao CineMarque</h1>
      <h2 className="text-fk">
        Venha ver nosso catálogo de filmes completo para você.
      </h2>
      <Link to="/filmes" className="a-button">
        Saiba Mais
      </Link>
    </div>
  );
}

export default Home;
