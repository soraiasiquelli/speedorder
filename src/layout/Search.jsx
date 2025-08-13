import { useState } from "react";
import styles from "./Search.module.css";

function Search({ onSetFiltroTexto }) {
  const [filtroTexto, setFiltroTexto] = useState(""); // Corrigido o nome e inicializado como string vazia

  const handleChange = (e) => {
    const valor = e.target.value;
    setFiltroTexto(valor); // Atualiza localmente
    if (onSetFiltroTexto) {
      onSetFiltroTexto(valor); // Passa para o pai
    }
  };

  return (
    <div className={styles.divpesquisa}>
      <input
        type="text"
        id="search_input"
        placeholder="Digite aqui o que procura..."
        className={styles.search_input}
        value={filtroTexto}
        onChange={handleChange} // usa a função correta
      />
    </div>
  );
}

export default Search;
