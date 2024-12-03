import styles from "./SecaoItens.module.css"; 
import CardItem from "./CardItem";
import React, { useState, useEffect } from "react";

function SecaoItens() {
  const [produtos, setProdutos] = useState([]);

  const fetchProdutos = async () => {
    try {
        const response = await fetch("http://localhost:5001/cadastroprodutos"); // Corrigido para a URL certa
        if (!response.ok) {
            throw new Error(`Erro do servidor: ${response.statusText}`);
        }
        const data = await response.json(); // Converte apenas se a resposta for válida
        console.log(data);
        setProdutos(data);
    } catch (error) {
        console.error("Erro ao buscar os produtos:", error.message);
    }
};

  useEffect(() => {
    fetchProdutos(); // Chama a função ao carregar o componente
  }, []);

  return (
    <div className={styles.secaocompleta}>
      {produtos.length > 0 ? (
        produtos.map((produto) => (
          <CardItem
            key={produto.id} // Usar a chave única para cada item
            src={produto.imagem} // Imagem do produto
            label_title={produto.nome_item} // Nome do produto
            p_descricao={produto.descricao} // Descrição do produto
            p_preco={`R$ ${produto.preco}`} // Preço do produto
            time_info="12 mins" // Exemplo de tempo de preparo
            calorias_info="121.9" // Exemplo de calorias (você pode adaptar conforme necessário)
          />
        ))
      ) : (
        <p>Carregando produtos...</p>
      )}
    </div>
  );
}

export default SecaoItens;
