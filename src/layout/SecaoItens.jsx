import React, { useState, useEffect } from "react";
import styles from "./SecaoItens.module.css"; 
import CardItem from "./CardItem"; //Importacao do bloco que vai mostrar cada item individualmente

function SecaoItens() {
  const [produtos, setProdutos] = useState([]);

  // Função para adicionar item ao carrinho

  //A funcão adicionarAoCarrinho vai receber item como parametro, passar para json e coloca-lo no array criado chamado carrinho e adicionar no LocalStorage
  const adicionarAoCarrinho = (item) => {

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(item); // Adiciona o item ao carrinho
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage
    alert(`${item.label_title} foi adicionado ao carrinho!`); // Notificação opcional
  };

  // Função para buscar os produtos
  const fetchProdutos = async () => {
    try {
      const response = await fetch("http://localhost:5001/cadastroprodutos");
      if (!response.ok) {
        throw new Error(`Erro do servidor: ${response.statusText}`);
      }
      const data = await response.json();
      setProdutos(data); // Atualiza os produtos
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
            key={produto.id_item} // Usar a chave única para cada item
            id_item={produto.id_item}
            src={produto.imagem} // Imagem do produto
            label_title={produto.nome_item} // Nome do produto
            p_descricao={produto.descricao} // Descrição do produto
            p_preco={`${produto.preco}`} // Preço do produto
            time_info="12 mins" // Exemplo de tempo de preparo
            calorias_info="121.9" // Exemplo de calorias
            id_estabelecimento={produto.id_estabelecimento}  // Passando id_estabelecimento como prop

            adicionarAoCarrinho={adicionarAoCarrinho} // Passa a função para o CardItem
          />
        ))
      ) : (
        <p>Carregando produtos...</p> // Exibe enquanto os produtos não são carregados
      )}
    </div>
  );
}

export default SecaoItens;
