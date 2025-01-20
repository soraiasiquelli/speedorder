import styles from './CardCarrinho.module.css'
import { BsArchive } from "react-icons/bs";
import { BsTrash3 } from "react-icons/bs";



function CardCarrinho({id, src, label_title, preco, excluirItem}){

  


    return(

        <div key={id} className={styles.itemdocarrinho}>
        <img src={src} alt={label_title} className={styles.imagemItem} />
        <div className={styles.itemDetails}>
          <p className={styles.nomeDoItem}>{label_title}</p>
          <p className={styles.precoDoItem}>{preco}</p>
        </div>
        <input type="number" name="quant" id="quantItemCarrinho" className={styles.quantItemCarrinho} />
        <BsTrash3 className={styles.buttonExcluirItem} onClick={() => excluirItem(id)} />

      </div>

    )


}


export default CardCarrinho