import React from 'react';
import styles from "./CardItem.module.css";
import Carrinho from '../secoes/Carrinho'
import { Link } from "react-router-dom";

/*O pedido clique sabe qual item foi clicado por conta do Link que esta usando o state para receber os parametros e colocar no link*/
/*Quando um usuário clica em um CardItem, ele é redirecionado para uma rota específica, que inclui um identificador (id) no caminho da URL e um objeto state que contém informações adicionais sobre o item clicado.*/


function CardItem({ id_item, src, label_title, p_descricao, p_preco, adicionarAoCarrinho, id_estabelecimento }) {

  //Cria a funcao que vai ser chamada no botão de adicionar ao caarinho
  //A funcao adicionarAoCarrinho vai receber os 4 parametros
  const addCart = () => {

    const item = {id_item, id_estabelecimento, src, label_title, p_descricao, p_preco}
    //console.log(id_item);  // Debugging para verificar se o id_item está correto
    adicionarAoCarrinho(item)
    console.log("Item adicionado ao carrinho", item)
  }




  return (
    <div className={styles.card_item}>
      <img src={src} alt={label_title} className={styles.card_image} />
      <div className={styles.card_content}>
        <Link to={`/pedidoclique/${id_item}`} state={{ id_item, src, label_title, p_preco }}>
          <h3 className={styles.item_title}>{label_title}</h3>
        </Link>
        <p className={styles.p_preco}>{p_preco}</p>
        <div className={styles.divAdd}>
          <input type="number" min="1" defaultValue="1" className={styles.quantItem} />
          <button className={styles.addBtnCard} onClick={addCart}>Adicionar</button>
        </div>
      </div>
    </div>
  );
}

export default CardItem;