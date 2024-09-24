import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/logo.png";
import Logout from "../Logout/Logout";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={Logo} alt="Logo cinemarque" />
      </Link>

      <nav className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/filmes">Filmes</Link>
        <Link to="/cartaz">Cartaz</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Cadastro</Link>
        <Logout />
      </nav>
    </header>
  );
}

export default Header;
