import styles from './CardPedidosAtivos.module.css';

function CardPedidosAtivos({ classe, horario, mesa, codigo, itens }) {
    return (
        <div className={styles[classe]}>
            <ul>
                <div className={styles.infosPrincipais}>
                    <li>Código: {codigo}</li>
                    <li>Mesa: {mesa}</li>
                    <li>Hora do pedido: {horario}</li>
                </div>
                <li className={styles.tempoDePreparo}>Tempo de preparo: 20 minutos</li>
                <li className={styles.garcomResponsavel}>Garçom Responsável: Soraia Siquelli</li>
                <li>
                {itens && itens.length > 0 ? (
    itens.map((item) => (
        <div key={item.id_item} className={styles.cadaItem}>
            <span className={styles.idItem}>ID do Item: {item.id_item}</span>

            {/* Procurando o detalhe específico do id_item dentro do array de detalhes */}
            {item.detalhes && item.detalhes.length > 0 ? (
                item.detalhes
                    .filter((detalhe) => detalhe.id_item === item.id_produto) // Filtra pelo id_item que esta na tabela Itens para mostrar apenas o detalhe do item que esta mostrando - o detalhes é a tabela Itens
                    .map((detalhe, index) => (
                        <div key={index}  className={styles.itemDoPedido}>
                            <p className={styles.nomeItem}>{detalhe.nome_item || 'Não disponível'}</p>
            
                           
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




                </li>
            </ul>
        </div>
    );
}

export default CardPedidosAtivos;