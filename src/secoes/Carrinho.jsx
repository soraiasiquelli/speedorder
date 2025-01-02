import React, { useState, useEffect } from 'react';
import styles from './Carrinho.module.css';

function Carrinho() {
  // Estado para armazenar os itens do carrinho
  const [itensCarrinho, setItensCarrinho] = useState([]);

  // Função para carregar os itens do carrinho do localStorage
  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    //Passa pro useState o que esta no localstorage
    setItensCarrinho(carrinho);

  }, []); // Carrega os itens assim que o componente é montado

  // Função para limpar o carrinho
  const limparCarrinho = () => {
    localStorage.removeItem('carrinho'); // Remove os itens do localStorage
    setItensCarrinho([]); // Limpa o estado do carrinho
  };

  // Função para voltar à página anterior
  const voltar = () => {
    window.history.back(); // Volta para a página anterior
  };

  return (
    <div>
      <header className={styles.headercarrinho}>
        <input type="button" value="Voltar" onClick={voltar} />
        <input type="button" value="Limpar" onClick={limparCarrinho} />
      </header>

      <div>
        <h2>Carrinho de Itens</h2>

        {itensCarrinho.length > 0 ? (
          itensCarrinho.map((item, index) => (
            <div key={index} className={styles.itemdocarrinho}>
              <img src={item.src} alt={item.label_title} className={styles.imagemItem} />
              <p>{item.label_title}</p>
              <p>{item.p_preco}</p>
            </div>
          ))
        ) : (
          <p>Seu carrinho está vazio.</p>
        )}
      </div>
    </div>
  );
}

export default Carrinho;
