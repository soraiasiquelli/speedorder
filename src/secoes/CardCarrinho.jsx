import styles from './CardCarrinho.module.css';
import { MdDeleteOutline } from 'react-icons/md';

function CardCarrinho({ id, src, label_title, preco, excluirItem, observacao, quantidade }) {
  const subtotal = (parseFloat(preco) * (quantidade || 1)).toFixed(2);

  return (
    <div className={styles.itemdocarrinho}>

      <header className={styles.itemActions}>
        <MdDeleteOutline 
          className={styles.buttonExcluirItem} 
          onClick={() => excluirItem(id)} 
          title="Remover item"
        />
      </header>

      <img src={src} alt={label_title} className={styles.imagemItem} />

      <div className={styles.itemInfo}>
        <p className={styles.nomeDoItem}>{label_title}</p>
        <p className={styles.precoDoItem}>
          <span>R$</span> <span>{subtotal}</span>
        </p>
      </div>

      <div className={styles.blocoObservacao}>
        {observacao && <p className={styles.observacaoItem}>Observação: {observacao}</p>}
      </div>

    </div>
  );
}

export default CardCarrinho;
