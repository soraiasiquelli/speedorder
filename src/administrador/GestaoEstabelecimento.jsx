import HeaderGestaoAdmin from '../layout/HeaderGestaoAdmin';
import HeaderAdmin from '../layout_admin/HeaderAdmin';
import SideBarGestaoAdmin from '../layout/SideBarGestaoAdmin';
import styles from './GestaoEstabelecimento.module.css'
import { MdOutlineAttachMoney, MdTableRestaurant, MdPendingActions } from "react-icons/md";
import { useEffect, useState } from 'react';

function GestaoEstabelecimento(){

    const [mesasEstabelecimento, setMesasEstabelecimento]   = useState([])
    const [pedidosEstabelecimento, setPedidosEstabelecimento] = useState([])
    
    const buscarMesas = async () => {

        try {
            const response = await fetch("http://localhost:5001/cadastromesas")
            if(!response.ok){
                console.log("Erro")
            }
            const data = await response.json()
            setMesasEstabelecimento(data)
        } catch (error) {
            console.log("Erro ao buscar as mesas", error.message)
        }

    }

    const buscarProdutos = async () => {
        try {
            const response = await fetch("http://localhost:5001/cadastroprodutos")
            if(!response.ok){
                console.log("Erro no servidor")
            }
            const data = await response.json()
            setPedidosEstabelecimento(data)
        } catch (error) {
            console.log("Erro ao buscar pedidos do estabelecimento", error.message)
        }
    }


    useEffect(() => {
        buscarMesas();
        buscarProdutos();
    }, []);




 
  const pedidos = [
    { id: 101, mesa: 2, itens: ['Pizza', 'Coca-Cola'], status: 'Em preparo' },
    { id: 102, mesa: 3, itens: ['Hambúrguer'], status: 'Novo' },
  ];

  return(
    <div className={styles.secaoPrincipal}>

      <SideBarGestaoAdmin/>

      <div className={styles.containerDashboard}>

        <HeaderAdmin/>

        <div className={styles.contentDashboard}>

          {/* Resumo Geral */}
          <section className={styles.resumoDashboard}>
            <ul className={styles.listaBlocos}>

              <li className={styles.blocoResumo}>
                <MdOutlineAttachMoney className={styles.iconeCard}/>
                <div className={styles.textoBloco}>
                  <h3>Faturamento</h3>
                  <p>R$ 3.500,00</p>
                </div>
              </li>

              <li className={styles.blocoResumo}>
                <MdTableRestaurant className={styles.iconeCard}/>
                <div className={styles.textoBloco}>
                  <h3>Mesas Ativas</h3>
                  <p> {
                  mesasEstabelecimento.filter(mesaAtual => mesaAtual.status === "ocupada").length} mesa(s) ocupada(s)</p>
                </div>
              </li>

              <li className={styles.blocoResumo}>
                <MdPendingActions className={styles.iconeCard}/>
                <div className={styles.textoBloco}>
                  <h3>Pedidos em andamento</h3>
                  <p>{pedidos.length} pedidos</p>
                </div>
              </li>

             

            </ul>
          </section>

          {/* Status das Mesas */}
          <section className={styles.statusMesas}>
            <h2>Status das Mesas</h2>
            <br />
            <ul>
              {mesasEstabelecimento.map((mesa) => (
                <li key={mesa.id} className={`${styles.mesaItem} ${styles['status-'+mesa.status.replace(/\s+/g, '').toLowerCase()]}`}>
                  Mesa {mesa.numero} - <strong>{mesa.status}</strong>
                </li>
              ))}
            </ul>
          </section>

          {/* Pedidos em tempo real */}
         <section className={styles.pedidosEmAndamento}>
            <h2>ÚltimosPedidos Cadastrados</h2>
            <br />
            <ul>
                {pedidosEstabelecimento.map((produto) => (
                <li key={produto.id_item} className={styles.pedidoItem}>
                    <strong>{produto.nome_item}</strong> - {produto.descricao} <br />
                    Preço: R$ {Number(produto.preco).toFixed(2)} <br />
                    Categoria: {produto.categoria}
                </li>
                ))}
            </ul>
            </section>


          {/* Relatórios - só placeholder */}
          <section className={styles.relatorios}>
            <h2>Relatórios</h2>
            <p>Gráficos e dados importantes aqui</p>
          </section>

        </div>

      </div>

    </div>
  )
}

export default GestaoEstabelecimento;
