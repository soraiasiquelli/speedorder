import React from 'react';
import styles from "./CardItem.module.css";
import { Link } from "react-router-dom";

/*O pedido clique sabe qual item foi clicado por conta do Link que esta usando o state para receber os parametros e colocar no link*/
/*Quando um usuário clica em um CardItem, ele é redirecionado para uma rota específica, que inclui um identificador (id) no caminho da URL e um objeto state que contém informações adicionais sobre o item clicado.*/


function CardItem({ id, src, label_title, p_descricao, p_preco }) {
  return (
    <div className={styles.card_item}>
      <img src={src} alt={label_title} className={styles.card_image} />
      <div className={styles.card_content}>
        <Link to={`/pedidoclique/${id}`} state={{ src, label_title, p_descricao, p_preco }}> 
        
          <label>{label_title}</label>
          <p className={styles.p_descricao}>{p_descricao}</p>
          <p className={styles.p_preco}>{p_preco}</p>
        </Link>
      </div>
    </div>
  );
}

export default CardItem;
