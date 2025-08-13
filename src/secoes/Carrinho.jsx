import React, { useState, useEffect } from 'react';
import styles from './Carrinho.module.css';
import FecharPedido from './FecharPedido';
import CardCarrinho from './CardCarrinho';
import ButtonVoltar from '../layout/ButtonVoltar';
import { FaCreditCard, FaMoneyBillWave, FaQrcode } from 'react-icons/fa';

function Carrinho() {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [formaPagamento, setFormaPagamento] = useState('');

  // Carregar itens do localStorage
  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    setItensCarrinho(carrinho);
  }, []);

  // Limpar carrinho
  const limparCarrinho = () => {
    localStorage.removeItem('carrinho');
    setItensCarrinho([]);
  };

  // Excluir item do carrinho pelo UUID
  const excluirItem = (uuid) => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const novoCarrinho = carrinho.filter(item => item.uuid !== uuid);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
    setItensCarrinho(novoCarrinho);
  };

  // Atualiza forma de pagamento
  const handleFormaPagamento = (e) => {
    setFormaPagamento(e.target.value);
  };

  // Calcula valor total
  const valorTotal = itensCarrinho.reduce((total, item) => {
    const preco = parseFloat(item.p_preco);
    const qtd = item.quantidade || 1;
    return total + (isNaN(preco) ? 0 : preco * qtd);
  }, 0);

  return (
    <div className={styles.paginaCarrinho}>
      <ButtonVoltar to="/novopedido" />

      <header className={styles.headercarrinho}>
        <h2>Carrinho de Itens</h2>
      </header>

      <div className={styles.mainContent}>
        <div className={styles.carrinhoItens}>
          {itensCarrinho.length > 0 ? (
            itensCarrinho.map((item) => (
              <CardCarrinho
                key={item.uuid}
                id={item.uuid}
                src={item.src}
                label_title={item.label_title}
                preco={item.p_preco}
                observacao={item.observacao || ''}
                quantidade={item.quantidade || 1}
                excluirItem={excluirItem}
              />
            ))
          ) : (
            <p>Seu carrinho está vazio.</p>
          )}
        </div>

        <aside className={styles.infoPagamento}>
          <div className={styles.formaPagamento}>
            <p>Forma de Pagamento:</p>
            <div>
              <input type="radio" id="pag-cartao" name="pagamento" value="cartao" onChange={handleFormaPagamento} />
              <label htmlFor="pag-cartao">
                <FaCreditCard /> Cartão de Crédito
              </label>

              <input type="radio" id="pag-dinheiro" name="pagamento" value="dinheiro" onChange={handleFormaPagamento} />
              <label htmlFor="pag-dinheiro">
                <FaMoneyBillWave /> Dinheiro
              </label>

              <input type="radio" id="pag-pix" name="pagamento" value="pix" onChange={handleFormaPagamento} />
              <label htmlFor="pag-pix">
                <FaQrcode /> PIX
              </label>
            </div>
          </div>

          <div className={styles.separator}></div>

          <p className={`${styles.valorTotal} valorTotal`}>
            Valor Total do Pedido: <span>R$ {valorTotal.toFixed(2)}</span>
          </p>

          <FecharPedido forma_de_pagamento={formaPagamento} total={valorTotal} />
        </aside>
      </div>
    </div>
  );
}

export default Carrinho;
