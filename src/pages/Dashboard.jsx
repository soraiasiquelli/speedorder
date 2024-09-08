// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';

function Dashboard() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    // Simular dados de pedidos (substitua com chamada à API ou WebSocket)
    const fetchPedidos = () => {
      setPedidos([
        { id: 1, mesa: 8, itens: 'Pizza de Calabresa', status: 'Em Preparo', horario: '19:35' },
        { id: 2, mesa: 3, itens: 'Hamburguer duplo', status: 'Em Preparo', horario: '19:40' },
      ]);
    };

    fetchPedidos();
    const interval = setInterval(fetchPedidos, 5000);
    return () => clearInterval(interval);
  }, []);

  const marcarComoPronto = (id) => {
    // Implementar lógica para marcar o pedido como pronto
    console.log(`Pedido #${id} marcado como pronto.`);
  };

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <h1>Pedidos em Tempo Real</h1>
        <div className={styles.clock}>Horário Atual: {new Date().toLocaleTimeString()}</div>
      </header>
      <main className={styles.pedidoList}>
        {pedidos.map((pedido) => (
          <div key={pedido.id} className={styles.pedidoCard}>
            <div className={styles.pedidoInfo}>
              <span className={styles.pedidoNumber}>Pedido #{pedido.id}</span>
              <span className={styles.pedidoMesa}>Mesa: {pedido.mesa}</span>
              <span className={styles.pedidoItens}>Itens: {pedido.itens}</span>
              <span className={styles.pedidoHorario}>Horário: {pedido.horario}</span>
            </div>
            <button className={styles.btnPronto} onClick={() => marcarComoPronto(pedido.id)}>
              Marcar como Pronto
            </button>
          </div>
        ))}
      </main>
      <footer className={styles.footer}>
        <button className={styles.filterButton}>Todos os Pedidos</button>
        <button className={styles.filterButton}>Em Preparo</button>
        <button className={styles.filterButton}>Pronto para Entrega</button>
      </footer>
    </div>
  );
}

export default Dashboard;
