// src/pages/PedidosEmPreparo.jsx
import React from 'react';
import styles from './PedidosEmPreparo.module.css';

function PedidosEmPreparo() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>Pedidos em Preparo</h1>
      </header>
      <main className={styles.mainContent}>
        {/* Aqui você pode adicionar uma lista de pedidos em preparo ou outros componentes */}
        <p>Lista de pedidos em preparo aparecerá aqui.</p>
      </main>
    </div>
  );
}

export default PedidosEmPreparo;
