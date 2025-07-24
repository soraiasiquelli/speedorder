import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './GerenciamentoPedidos.module.css';
import HeaderGestaoAdmin from '../layout/HeaderGestaoAdmin';
import SideBarGestaoAdmin from '../layout/SideBarGestaoAdmin';
import HeaderAdmin from '../layout_admin/HeaderAdmin';
import CadastroMesas from './CadastroMesas';
import CadastroGarcons from './CadastroGarcons';
import CadastroProdutos from './CadastroProdutos';
import FooterOpcoes from '../layout/FooterOpcoes';
import CardPedidosAdmin from './CardPedidosAdmin';
import PedidoTabelaAdmin from '../layout_admin/PedidoTabelaAdmin';
import { FaKitchenSet } from "react-icons/fa6";
import { BiCheckCircle } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";






function GerenciamentoPedidos() {
    const [activeTab, setActiveTab] = useState('mesas');
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
       <div className={styles.pageGestao}>

    <div className={styles.wrapperDashboard}>
    <SideBarGestaoAdmin />
    
    <div className={styles.containerDashboard}>
      <HeaderAdmin />

       


      
      <div className={styles.contentDashboard}>

         <div className={styles.tabelaPedidos}>
            {pedidos.length > 0 && (
        <table className={styles.tabelaPedidos}>
            <thead>
                <tr>
                    <th>Pedido / Mesa</th>
                    <th>Total</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <PedidoTabelaAdmin pedidos={pedidos} />
            </tbody>
        </table>
        )}
        </div>


        <div className={styles.cardsPedidos}>
            {pedidos.length > 0 ? (
              pedidos.map((pedido) => (
                <CardPedidosAdmin
                  key={pedido.id_pedido}
                  status={pedido.status}
                  itens={pedido.itens || []}
                  nomeGarcom="Soraia Siquelli"
                  numeroPedido={pedido.id_pedido}
                  mesa={pedido.id_mesa}
                  total={pedido.total}
                />
              ))
            ) : (
              <p>Carregando pedidos...</p>
            )}
        </div>
      </div>

   


    </div>
  </div>

     

</div>

    );
}

export default GerenciamentoPedidos;
