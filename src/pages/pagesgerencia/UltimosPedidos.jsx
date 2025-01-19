import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import styles from './UltimosPedidos.module.css';

function UltimosPedidos() {
  const [pedidos, setPedidos] = useState([]);
  
  useEffect(() => {
    // Conectar ao servidor Socket.IO
    const socket = io("http://localhost:5001");

    // Escutar evento de atualização de pedidos
    socket.on("atualizarpedidos", (novosPedidos) => {
      setPedidos(novosPedidos);
    });

    // Limpeza ao desmontar o componente
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>Últimos Pedidos</h1>
      </header>
      <main className={styles.mainContent}>
        {pedidos.length > 0 ? (
          <ul>
            {pedidos.map((pedido) => (
              <li key={pedido.id_pedido}>
                <p>Pedido {pedido.id_pedido}</p>
                <p>Status: {pedido.status}</p>
                <p>Total: {pedido.total}</p>
                {/* Adicione mais detalhes conforme necessário */}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum pedido encontrado.</p>
        )}
      </main>
    </div>
  );
}

export default UltimosPedidos;
