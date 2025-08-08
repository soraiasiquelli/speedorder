import styles from './CardCarrinho.module.css';
import { BsTrash3 } from "react-icons/bs";

function CardCarrinho({ id, src, label_title, preco, excluirItem }) {
  return (
    <div className={styles.itemdocarrinho}>
      <img src={src} alt={label_title} className={styles.imagemItem} />
      
      <div className={styles.itemDetails}>
        <p className={styles.nomeDoItem}>{label_title}</p>
        <p className={styles.precoDoItem}>R$ {preco}</p>
      </div>
      
      <input 
        type="number" 
        name={`quant_${id}`} 
        min="1" 
        defaultValue="1" 
        className={styles.quantItemCarrinho} 
        aria-label={`Quantidade de ${label_title}`}
      />
      
      <BsTrash3 
        className={styles.buttonExcluirItem} 
        onClick={() => excluirItem(id)} 
        title="Remover item"
        aria-label={`Remover ${label_title} do carrinho`}
      />
    </div>
  );
}

export default CardCarrinho;
