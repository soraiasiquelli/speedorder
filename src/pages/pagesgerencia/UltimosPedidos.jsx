import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import styles from './UltimosPedidos.module.css';

function UltimosPedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    // Conectar ao servidor Socket.IO
    const socket = io("http://localhost:3000");

    // Escutar evento de atualização de pedidos
    socket.on("atualizar_pedidos", (pedido) => {
      console.log("Pedido atualizado recebido:", pedido);
      // Atualizar os pedidos com a nova lista ou o pedido individual
      setPedidos(prevPedidos => [...prevPedidos, pedido]);
    });

    // Limpeza da conexão quando o componente for desmontado
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className={styles.pedidosContainer}>
      <h2>Últimos Pedidos</h2>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id_pedido}>
            <p>ID do Pedido: {pedido.id_pedido}</p>
            <p>Forma de Pagamento: {pedido.forma_de_pagamento}</p>
            <p>Total: {pedido.total}</p>
            {/* Exiba outros detalhes do pedido conforme necessário */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UltimosPedidos;
