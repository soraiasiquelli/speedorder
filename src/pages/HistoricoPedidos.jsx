// src/pages/HistoricoPedidos.jsx
import React, { useState, useEffect } from 'react';
import styles from './HistoricoPedido.module.css';

function HistoricoPedidos() {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    // Simular dados de histórico (substitua com chamada à API ou WebSocket)
    const fetchHistorico = () => {
      setHistorico([
        { id: 1, mesa: 8, itens: 'Pizza de Calabresa', status: 'Entregue', horario: '18:35' },
        { id: 2, mesa: 3, itens: 'Hamburguer duplo', status: 'Cancelado', horario: '19:00' },
        { id: 3, mesa: 5, itens: 'Cerveja artesanal', status: 'Entregue', horario: '19:20' },
      ]);
    };

    fetchHistorico();
    const interval = setInterval(fetchHistorico, 60000); // Atualizar a cada minuto
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.historicoContainer}>
      <header className={styles.header}>
        <h1>Histórico de Pedidos</h1>
      </header>
      <main className={styles.historicoList}>
        {historico.map((pedido) => (
          <div key={pedido.id} className={styles.pedidoCard}>
            <div className={styles.pedidoInfo}>
              <span className={styles.pedidoNumber}>Pedido #{pedido.id}</span>
              <span className={styles.pedidoMesa}>Mesa: {pedido.mesa}</span>
              <span className={styles.pedidoItens}>Itens: {pedido.itens}</span>
              <span className={styles.pedidoHorario}>Horário: {pedido.horario}</span>
              <span className={styles.pedidoStatus}>Status: {pedido.status}</span>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default HistoricoPedidos;
