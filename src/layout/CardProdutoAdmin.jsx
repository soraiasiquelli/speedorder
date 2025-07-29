import styles from './CardProdutoAdmin.module.css'
import { Link } from 'react-router-dom'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md"; 
import { useState } from 'react';

function CardProdutoAdmin({ src, label_title, p_preco, id_item, onDelete }) {
  const [openPopUpEdit, setPopUpEdit] = useState(false);
  

  return (
    <div className={styles.card_item}>
      <img src={src} alt={label_title} className={styles.card_image} />
      <div className={styles.card_content}>
        <Link to={`/pedidoclique/${id_item}`} state={{ id_item, src, label_title, p_preco }}>
          <h3 className={styles.item_title}>{label_title}</h3>
        </Link>
        <p className={styles.p_preco}>{p_preco}</p>

        <div className={styles.acoesAdminProduto}>
          <button className={styles.btn_editar}>
            <CiEdit className={styles.icone} />
          </button>
          <button className={styles.btn_excluir} onClick={onDelete} >
            <MdDelete className={styles.icone} />
          </button>
        </div>
      </div>
       
    </div>
    
  );
}

export default CardProdutoAdmin;
