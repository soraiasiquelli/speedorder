import styles from './CardPedidosAdmin.module.css'

function CardPedidosAdmin({nomeGarcom, numeroPedido, status, mesa, total, itens}){
    return(
       <div className={styles.cardPedidoAdmin}>
        
        <div className={styles.cabecalhoPedido}>
            <img src="" alt="fotoDoGarcom" className={styles.garcomIMG}/>
            <div className={styles.infoGarcom}>
                <p className={styles.nomeGarcom}>{nomeGarcom}</p>
                <p className={styles.numeroPedido}>Pedido - #{numeroPedido}</p>
            </div>
            <span>{status}</span>

        </div>


        <div className={styles.detailsPedido}>

            <div className={styles.numeroDaMesa}>Mesa {mesa}</div>
            <div className={styles.totalPedido}>Total: R${total}</div>

        </div>

        <div className={styles.viewItens}>
    {itens && itens.length > 0 ? (
        itens.map((item) => (
            <div key={item.id_item} className={styles.cadaItem}>
                {item.detalhes && item.detalhes.length > 0 ? (
                    item.detalhes
                        .filter((detalhe) => detalhe.id_item === item.id_produto)
                        .map((detalhe, index) => (
                            <div key={index} className={styles.cadaItem}>
                                <img
                                    src={detalhe.imagem || "/placeholder.jpg"}
                                    alt={detalhe.nome_item}
                                    className={styles.itemIMG}
                                />
                                <div className={styles.infoProduto}>
                                    <p className={styles.nomeProduto}>{detalhe.nome_item}</p>
                                    <p className={styles.precoProduto}>R$ {detalhe.preco}</p>
                                </div>
                            </div>
                        ))
                ) : (
                    <span>Detalhes não disponíveis</span>
                )}
            </div>
        ))
    ) : (
        <span>Sem itens</span>
    )}
</div>



       </div>
    )
}

export default CardPedidosAdmin