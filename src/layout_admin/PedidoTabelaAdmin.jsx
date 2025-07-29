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
            pedido.status === "pendente"
            ? styles.statusPendente
            : pedido.status === "pronto"
            ? styles.statusPronto
            ? styles.status === "em andamento"
            : styles.statusAndamento : ''
            }>{pedido.status}</td>
        <td>
          {new Date(pedido.data_pedido).toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </td>
        </tr>
      ))}
    </>
  );
}

export default PedidoTabelaAdmin;
