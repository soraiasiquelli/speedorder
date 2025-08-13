import styles from './CardUltimosPedidos.module.css'
import { PedidosContext } from '../contextAPI/PedidosContext'
import { useContext } from 'react'
import { ItensPedidosContext } from '../contextAPI/ItensPedidosContext'
import { ProdutosContext } from '../contextAPI/ProdutosContext'

function CardUltimosPedidos() {
  const { pedidos } = useContext(PedidosContext)
  const { itens_do_pedido } = useContext(ItensPedidosContext)
  const { produtos } = useContext(ProdutosContext)

  const id_cliente = Number(localStorage.getItem("id_cliente"))
  const pedidosDoCliente = pedidos.filter(pedido => pedido.id_cliente === id_cliente)

  return (
    <div className={styles.container}>
      {pedidosDoCliente.map((pedido) => {
        const itensDoPedido = itens_do_pedido.filter(item => Number(item.id_pedido) === Number(pedido.id_pedido))

        return (
          <div key={pedido.id_pedido} className={styles.cardPedidoAdmin}>
            <div className={styles.cabecalhoPedido}>
              <p className={styles.numeroPedido}>Pedido #{pedido.id_pedido} - Tipo de Entrega: {pedido.tipo_entrega}</p>
              <span className={styles.status}>{pedido.status}</span>
            </div>

            {/*<div className={styles.detailsPedido}>
              <div>
                <p><strong>Total: R$ {pedido.total}</strong></p>
              </div>
            </div>*/}

            <div className={styles.viewItens}>
              {itensDoPedido.length > 0 ? (
                itensDoPedido.map((item) => {
                  const produto = produtos.find(prod => prod.id_item === item.id_produto)
                  return (
                    <div key={item.id_item} className={styles.cadaItem}>
                      {/* Se tiver imagem, pode colocar aqui com <img> */}
                      {/* <img src={produto?.imagemUrl} alt={produto?.nome_item} /> */}

                      <div className={styles.infoProduto}>
                        <p className={styles.nomeProduto}>{produto ? produto.nome_item : 'Produto não encontrado'}</p>
                        <p className={styles.precoProduto}>Quantidade: {item.quantidade}</p>
                      </div>
                    </div>
                  )
                })
              ) : (
                <p>Sem itens cadastrados para este pedido.</p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CardUltimosPedidos
