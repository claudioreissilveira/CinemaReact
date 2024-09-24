import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./Logout.module.css";

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <button className={styles.button} onClick={handleLogout}>
      Sair
    </button>
  );
};

export default LogoutButton;
