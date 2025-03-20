import styles from './CardProdutoAdmin.module.css'
import { Link } from 'react-router-dom'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md"; // Ícone de lixeira



function CardProdutoAdmin({ src, label_title, card_image, item_title, p_preco, id_item }) {
  return (
    <div className={styles.card_item}>
      <img src={src} alt={label_title} className={styles.card_image} />
      <div className={styles.card_content}>
        <Link to={`/pedidoclique/${id_item}`} state={{ id_item, src, label_title, p_preco }}>
          <h3 className={styles.item_title}>{label_title}</h3>
        </Link>
        <p className={styles.p_preco}>{p_preco}</p>

        {/* Seção de botões movida para dentro do card_content */}
        <div className={styles.acoesAdminProduto}>
        <button className={styles.btn_editar}>
            <CiEdit />
          </button>
          <button className={styles.btn_excluir}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}



export default CardProdutoAdmin