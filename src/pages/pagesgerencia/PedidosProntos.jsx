// src/pages/PedidosProntos.jsx
import React from 'react';
import styles from './PedidosProntos.module.css';

function PedidosProntos() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>Pedidos Prontos</h1>
      </header>
      <main className={styles.mainContent}>
        {/* Aqui você pode adicionar uma lista de pedidos prontos ou outros componentes */}
        <p>Lista de pedidos prontos aparecerá aqui.</p>
      </main>
    </div>
  );
}

export default PedidosProntos;
