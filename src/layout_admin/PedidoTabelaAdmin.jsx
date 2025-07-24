import styles from './PedidoTabelaAdmin.module.css'

function PedidoTabelaAdmin({ pedidos }) {
  return (
    <>
      {pedidos.map((pedido) => (
        <tr key={pedido.id_pedido}>
          <td>#{pedido.id_pedido} - Mesa {pedido.id_mesa}</td>
          <td>
            {pedido.itens.map((item, index) => (
              <div key={index}>
             R$ {Number(pedido.total || 0).toFixed(2)}
              </div>
            ))}
          </td>
          <td className={
            pedido.status.toUpperCase() === "PENDENTE"
            ? styles.statusPendente
            : pedido.status.toUpperCase() === "PRONTO"
            ? styles.statusPronto
            ? styles.status.toUpperCase() === "EM ANDAMENTO"
            : styles.statusAndamento : ''
            }>{pedido.status.toUpperCase()}</td>
        </tr>
      ))}
    </>
  );
}

export default PedidoTabelaAdmin;
