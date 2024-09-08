// src/pages/UltimosPedidos.jsx
import React from 'react';
import styles from './UltimosPedidos.module.css';

function UltimosPedidos() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>Últimos Pedidos</h1>
      </header>
      <main className={styles.mainContent}>
        {/* Aqui você pode adicionar uma lista de pedidos ou outros componentes */}
        <p>Lista de últimos pedidos aparecerá aqui.</p>
      </main>
    </div>
  );
}

export default UltimosPedidos;
