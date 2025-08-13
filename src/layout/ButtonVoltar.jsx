// ButtonVoltar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import styles from "./ButtonVoltar.module.css";

function ButtonVoltar({ to }) {
  const navigate = useNavigate();

  const handleVoltar = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <button className={styles.btnVoltar} onClick={handleVoltar}>
      <BsArrowLeft className={styles.icon} /> 
    </button>
  );
}

export default ButtonVoltar;
