import React, { useState, useEffect } from "react";
import styles from "./SecaoItens.module.css"; 
import CardItem from "./CardItem"; // Bloco que mostra cada item individualmente

function SecaoItens({ categoriaSelecionada, textoFiltrado }) {
  const [produtos, setProdutos] = useState([]);
  const id_estabelecimento = localStorage.getItem('id_estabelecimento');

  const adicionarAoCarrinho = (item) => {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const itemComIdUnico = { ...item, uuid: Date.now() + Math.random() };
    carrinho.push(itemComIdUnico);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${item.label_title} foi adicionado ao carrinho!`);
  };

  const fetchProdutos = async () => {
    try {
      const response = await fetch("http://localhost:5001/cadastroprodutos");
      if (!response.ok) throw new Error(`Erro do servidor: ${response.statusText}`);
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error.message);
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  // Filtro de produtos: por estabelecimento e categoria (se houver)
  const produtosFiltrados = produtos
      .filter(produto => produto.id_estabelecimento === Number(id_estabelecimento))
      .filter(produto => categoriaSelecionada ? produto.categoria === categoriaSelecionada : true)
      .filter(produto => 
        textoFiltrado 
          ? produto.nome_item.toLowerCase().includes(textoFiltrado.toLowerCase())
          : true
  );

  return (
    <div className={styles.secaocompleta}>
      {produtosFiltrados.length > 0 ? (
        produtosFiltrados.map(produto => (
          <CardItem
            key={produto.id_item}
            id_item={produto.id_item}
            src={produto.imagem}
            label_title={produto.nome_item}
            p_descricao={produto.descricao}
            p_preco={`${produto.preco}`}
            time_info="12 mins"
            calorias_info="121.9"
            id_estabelecimento={produto.id_estabelecimento}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        ))
      ) : (
        <p>Carregando produtos...</p>
      )}
    </div>
  );
}

export default SecaoItens;
