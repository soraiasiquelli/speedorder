import React, { createContext, useState, useEffect } from 'react';

export const ItensPedidosContext = createContext();

export function ItensPedidosProvider({ children }) {
  const [itenspedidos, setItensPedidos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/buscaitenspedido")
      .then(res => res.json())
      .then(data => {
        setItensPedidos(data); // nome correto do state
      })
      .catch(error => {
        console.error("Erro ao buscar itens pedidos:", error);
      });
  }, []);

  return (
    <ItensPedidosContext.Provider value={{ itenspedidos }}>
      {children}
    </ItensPedidosContext.Provider>
  );
}
