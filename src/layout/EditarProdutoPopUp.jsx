import styles from './EditarProdutoPopUp.module.css'
import Input from '../form/Input'
import { useState, useEffect } from 'react';

function EditarProdutoPopUp({ isOpen, setPopUpOpen}) {

  const [nomeProduto, setNomeProduto] = useState('')

  useEffect(() => {
    if (isOpen) {
      setNomeProduto(nomeProduto); // Quando o popup abre, preenche o campo
    }
  }, [isOpen, nomeProduto]);

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
            <Input
            type="text"
            value={nomeProduto}
            onChange={(e) => setNomeProduto(e.target.value)}
            placeholder={nomeProduto}          />
        </form>
      </div>
    </div>
  );
}

export default EditarProdutoPopUp;
