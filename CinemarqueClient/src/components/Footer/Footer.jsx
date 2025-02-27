import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footer_col}>
            <h4>CineMarque</h4>
            <ul>
              <li>
                <Link to="/">Saiba Mais</Link>
              </li>
              <li>
                <Link to="/">Serviços</Link>
              </li>
              <li>
                <Link to="/">Termos e condições</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_col}>
            <h4>Precisa de ajuda ?</h4>
            <ul>
              <li>
                <Link to="/">Atendimento</Link>
              </li>
              <li>
                <Link to="/">Contato</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_col}>
            <h4>Programação Cinema</h4>
            <ul>
              <li>
                <Link to="/filmes">Veja Mais</Link>
              </li>
              <li>
                <Link to="/filmes">Cinema</Link>
              </li>
              <li>
                <Link to="/cartaz">Cartaz</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
