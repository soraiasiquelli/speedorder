import React, { createContext, useState, useEffect } from 'react';

export const PedidosContext = createContext();

export function PedidosProvider({ children }) {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/buscapedidos")
      .then(res => res.json())
      .then(data => {
        setPedidos(data);
      })
      .catch(error => {
        console.error("Erro ao buscar pedidos:", error);
      });
  }, []);

  return (
    <PedidosContext.Provider value={{ pedidos }}>
      {children}
    </PedidosContext.Provider>
  );
}
