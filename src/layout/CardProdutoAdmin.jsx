import styles from './CardProdutoAdmin.module.css'
import { Link } from 'react-router-dom'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md"; 
import EditarProdutoPopUp from './EditarProdutoPopUp';
import { useState } from 'react';

function CardProdutoAdmin({ src, label_title, p_preco, id_item }) {
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
          {/* Ao clicar no botão de editar, abre o pop-up */}
          <button className={styles.btn_editar} onClick={() => setPopUpEdit(true)}>
            <CiEdit className={styles.icone} />
          </button>
          <button className={styles.btn_excluir}>
            <MdDelete className={styles.icone} />
          </button>
        </div>
      </div>

      {/* Renderiza o pop-up quando openPopUpEdit for true */}
     
    </div>
  );
}

export default CardProdutoAdmin;
