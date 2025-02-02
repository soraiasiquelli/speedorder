import React, { useState, useEffect } from 'react';
import styles from './Carrinho.module.css';
import FecharPedido from './FecharPedido';
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsBan } from "react-icons/bs";
import { BsArchive } from "react-icons/bs";
import CardCarrinho from './CardCarrinho';

function Carrinho() {
  // Estado para armazenar a mesa que esta atendendo
  const mesaDeAtendimento = localStorage.getItem("id_mesa");
  
  // Estado para armazenar os itens do carrinho
  const [itensCarrinho, setItensCarrinho] = useState([]);
  
  // Estado para armazenar a forma de pagamento selecionada
  const [formaPagamento, setFormaPagamento] = useState('');


  // Função para carregar os itens do carrinho do localStorage
  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    console.log("Carrinho atual", carrinho);
    // Passa pro useState o que está no localStorage
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

  // Função para excluir um item do carrinho
  const excluirItem = (id) => {
    // Filtra o carrinho removendo o item com o id fornecido
    const novoItensCarrinho = itensCarrinho.filter(item => item.id !== id);
    
    // Atualiza o estado do carrinho
    setItensCarrinho(novoItensCarrinho);
    
    // Atualiza o localStorage
    localStorage.setItem("carrinho", JSON.stringify(novoItensCarrinho));
  };

  const valorTotal = itensCarrinho.reduce((total, item) => {
    const preco = parseFloat(item.p_preco); // Converte para número
    return total + (isNaN(preco) ? 0 : preco); // Soma apenas se o preço for válido
  }, 0);
  
  // Função para lidar com a seleção da forma de pagamento
  const handleFormaPagamento = (e) => {
    setFormaPagamento(e.target.value);
  };

  return (
    <div className={styles.paginaCarrinho}>
      <header className={styles.headercarrinho}>
        <BsArrowLeftCircle className={styles.buttonsCarrinho} onClick={voltar} />
        <h2>Carrinho de Itens - Mesa {mesaDeAtendimento}</h2>
        <BsBan className={styles.buttonsCarrinho} onClick={limparCarrinho} />
      </header>

      <div className={styles.carrinhoItens}>
        {itensCarrinho.length > 0 ? (
          itensCarrinho.map((item) => (
            <CardCarrinho
              key={item.id}
              src={item.src}
              alt={item.label_title}
              label_title={item.label_title}
              preco={item.p_preco}
              excluirItem={excluirItem}
            />
          ))
        ) : (
          <p>Seu carrinho está vazio.</p>
        )}

        <div className={styles.infoPagamento}>
         
       
          {/* Seção de forma de pagamento */}
          <div className={styles.formaPagamento}>
          <p>Forma de Pagamento: </p>

            <div>
          <label>
            <input type="radio" name="pagamento" value="cartao" onChange={handleFormaPagamento}/>
            Cartão de Crédito
          </label>
          <label>
            <input type="radio" name="pagamento" value="dinheiro"  onChange={handleFormaPagamento}/>
            Dinheiro 
          </label>
          <label>
            <input type="radio" name="pagamento" value="pix" onChange={handleFormaPagamento} />
            PIX
          </label>
        </div>
          </div>

          <p>----------------------------------------</p>
          <p>Valor Total do Pedido: <span>R$ {valorTotal.toFixed(2)}</span></p>

          <FecharPedido
           forma_de_pagamento={formaPagamento}
           total={valorTotal}
           
           
           />
        </div>
      </div>
    </div>
  );
}

export default Carrinho;
