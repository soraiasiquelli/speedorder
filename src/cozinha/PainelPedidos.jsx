import React, { useState, useEffect } from 'react';
import styles from './PainelPedidos.module.css';
import CardPedidosAtivos from './CardPedidosAtivos';

function PainelPedidos() {
    const [pedidos, setPedidos] = useState([]);
    const nomeEstabelecimento = localStorage.getItem("nomeEstabelecimento");

    const buscarPedidos = async () => {
        try {
            const responsePedidos = await fetch("http://localhost:5001/buscapedidos");
            if (!responsePedidos.ok) throw new Error(`Erro do servidor: ${responsePedidos.statusText}`);
            const dataPedidos = await responsePedidos.json();
            console.log("Pedidos:", dataPedidos);
            
            const responseItens = await fetch("http://localhost:5001/buscaitenspedido");
            if (!responseItens.ok) throw new Error(`Erro ao buscar itens: ${responseItens.statusText}`);
            const dataItens = await responseItens.json();
            console.log("Itens:", dataItens);

            // Verifique se os detalhes estão sendo passados corretamente
            const pedidosComItens = await Promise.all(dataPedidos.map(async (pedido) => {
                // Filtra os itens relacionados ao pedido
                const itensRelacionados = dataItens.filter(item => String(item.id_pedido) === String(pedido.id_pedido));
                console.log("Itens relacionados ao pedido:", itensRelacionados);
            
                // Verifica se os detalhes dos itens estão sendo carregados corretamente
                const itensComDetalhes = await Promise.all(itensRelacionados.map(async (item) => {
                    const responseCadaItem = await fetch(`http://localhost:5001/busca_cada_item?id_item=${item.id_item}`);
                    if (!responseCadaItem.ok) throw new Error(`Erro ao buscar cada item: ${responseCadaItem.statusText}`);
                    const dadosCadaItem = await responseCadaItem.json();
                    console.log("Detalhes de cada item:", dadosCadaItem);
            
                    // Retorna o item com seus detalhes
                    return { ...item, detalhes: dadosCadaItem };
                }));
            
                // Retorna o pedido com seus itens, sem duplicação
                return { ...pedido, itens: itensComDetalhes };
            }));
            
            setPedidos(pedidosComItens);
            
        } catch (error) {
            console.log("Erro ao buscar pedidos", error.message);
        }
    };

    useEffect(() => {
        buscarPedidos();
    }, []);

    return (
        <div className={styles.painelPedidos}>
            <header className={styles.header}>
                <h1> Painel de Controle de Pedidos - {nomeEstabelecimento} </h1>
            </header>

            <main className={styles.main}>
                <div className={styles.colunas}>
                    <div className={styles.pedidosAtivos}>
                   
{pedidos.length > 0 ? (
    pedidos.map((pedido) => {
        if (pedido.status === "pendente") {
            return (
                <CardPedidosAtivos
                    key={pedido.id_pedido}
                    classe= "cardAtivo"
                    horario={pedido.data_pedido}
                    mesa={pedido.id_mesa}
                    codigo={pedido.id_pedido}
                    itens={pedido.itens || []} // Passando todos os itens dentro do pedido
                />
            );
        }
    })
) : (
    <p>Carregando pedidos...</p>
)}

                    </div>

                    <div className={styles.pedidosPreparacao}>
                        {pedidos.length > 0 ? (
                            pedidos.map((pedido) => {
                                if (pedido.status === "em andamento") {
                                    return (
                                        <CardPedidosAtivos
                                            key={pedido.id_pedido}
                                            classe= "cardPreparacao"
                                            horario={pedido.data_pedido}
                                            mesa={pedido.id_mesa}
                                            codigo={pedido.id_pedido}
                                            itens={pedido.itens || []} // Passando todos os itens com detalhes
                                        />
                                    );
                                }
                            })
                        ) : (
                            <p>Carregando pedidos...</p>
                        )}
                    </div>

                    <div className={styles.pedidosProntos}>
                        {pedidos.length > 0 ? (
                            pedidos.map((pedido) => {
                                if (pedido.status === "pronto") {
                                    return (
                                        <CardPedidosAtivos
                                            key={pedido.id_pedido}
                                            classe = "cardPronto"
                                            horario={pedido.data_pedido}
                                            mesa={pedido.id_mesa}
                                            codigo={pedido.id_pedido}
                                            itens={pedido.itens || []} // Passando todos os itens com detalhes
                                        />
                                    );
                                }
                            })
                        ) : (
                            <p>Carregando pedidos...</p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default PainelPedidos;
