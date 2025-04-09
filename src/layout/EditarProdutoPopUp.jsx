import styles from './EditarProdutoPopUp.module.css'
import Input from '../form/Input'

function EditarProdutoPopUp({ isOpen, setPopUpOpen }) {
  if (!isOpen) return null; 

  return (
    <div className={styles.background_style}>
      <div className={styles.secaoEdicaoProduto}>
        <button 
          className={styles.btnFecharPopUp} 
          onClick={() => setPopUpOpen(false)}
        >
          FECHAR X
        </button>
        <form>
          <Input type="text" placeholder="Nome do Produto" />
        </form>
      </div>
    </div>
  );
}

export default EditarProdutoPopUp;
