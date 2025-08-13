import styles from './Categorias.module.css';
import { useState } from 'react';

function Categorias({ onSelectCategoria }) { // Recebe prop do pai
  const categorias = ["Prato Feito", "Lanches", "Refrigerantes", "Sucos", "Doces"];
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  // onSelectCategoria dentro do filho é exatamente a função setCategoriaSelecionada do pai
  const selecionarCategoria = (categoria) => {
  if (categoriaSelecionada === categoria) {
    // Se clicar no mesmo botão, desseleciona
    setCategoriaSelecionada(null);
    if (onSelectCategoria) onSelectCategoria(null);
  } else {
    // Caso contrário, seleciona a categoria clicada
    setCategoriaSelecionada(categoria);
    if (onSelectCategoria) onSelectCategoria(categoria);
  }
};


  return (
    <div className={styles.divCategorias}>
      {categorias.map((categoria, index) => (
       <button
        key={index}
        className={`${styles.btnCategoria} ${categoria === categoriaSelecionada ? styles.selecionada : ''}`}
        onClick={() => selecionarCategoria(categoria)}
        >
  {categoria}
</button>

      ))}
    </div>
  );
}

export default Categorias;
