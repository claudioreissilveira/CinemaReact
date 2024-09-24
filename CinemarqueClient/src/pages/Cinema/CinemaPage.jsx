import React from "react";
import Cinema from "../../components/Card/Cinema";
import "./Cinema.css";

function CinemaPage() {
  return (
    <div className="container-cartaz">
      <h1>Filmes</h1>
      <Cinema />
    </div>
  );
}

export default CinemaPage;
