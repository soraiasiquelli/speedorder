import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePrincipal from './pages/HomePrincipal';
import Home from './pages/Home';
import MesaParaPedido from './garcom/MesaParaPedido';
import NovoPedido from './garcom/NovoPedido';
import CriarEstabelecimento from './administrador/CriarEstabelecimento';
import PedidoClique from './pages/PedidoClique';
import PersonalizacaoLoja from './administrador/PersonalizacaoLoja';
import Main from './pages/Main';
import ChamadoCozinha from './garcom/ChamadoCozinha';
import CadastroAdmin from './administrador/CadastroAdmin';
import GestaoEstabelecimento from './administrador/GestaoEstabelecimento';
import CadastroMesas from './administrador/CadastroMesas';
import CadastroGarcons from './administrador/CadastroGarcons';
import CadastroProdutos from './administrador/CadastroProdutos';
import Dashboard from './telacozinha/Dashboard';
import HistoricoPedidos from './pages/HistoricoPedidos';
import UltimosPedidos from './pages/pagesgerencia/UltimosPedidos'
import PedidosProntos from './pages/pagesgerencia/PedidosProntos'
import PedidosEmPreparo from './pages/pagesgerencia/PedidosEmPreparo'
import TelaCozinha from './telacozinha/TelaCozinha';
import CarrinhoDeItens from './secoes/Carrinho'
import ConfirmacaoPedido from '../src/pages/ConfirmacaoPedido'
//import Pagamento from './pages/Pagamento';
import PainelPedidos from './cozinha/PainelPedidos'
import PainelDeControle from './cozinha/PainelControle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/cadastroestabelecimento" element={<CriarEstabelecimento/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/homeprincipal" element={<HomePrincipal />} />
        <Route path="/mesaparapedido" element={<MesaParaPedido />} />
        <Route path="/novopedido" element={<NovoPedido />} />
        <Route path="/pedidoclique/:id" element={<PedidoClique />} />
        <Route path="/personalizacaoloja" element={<PersonalizacaoLoja />} />
        <Route path="/chamadocozinha" element={<ChamadoCozinha />} />
        <Route path="/pagesforms/cadastroadmin" element={<CadastroAdmin />} />
        <Route path="/gestaoestabelecimento" element={<GestaoEstabelecimento />} />
        <Route path="/cadastromesas" element={<CadastroMesas/>} />
        <Route path="/cadastrogarcons" element={<CadastroGarcons/>} />
        <Route path="/cadastroprodutos" element={<CadastroProdutos/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/historicopedido" element={<HistoricoPedidos/>} />
        <Route path="/ultimos-pedidos" element={<UltimosPedidos/>} />
        <Route path="/pedidos-prontos" element={<PedidosProntos/>} />
        <Route path="/pedidos-em-preparo" element={<PedidosEmPreparo />} />
        <Route path="/historico-pedidos" element={<HistoricoPedidos />} />
        <Route path="/carrinhodeitens" element={<CarrinhoDeItens />} />
        <Route path="/pedidoconfirmado" element={<ConfirmacaoPedido />} />
        <Route path="/pagamento" element={<ConfirmacaoPedido />} />
        <Route path="/painelpedidos" element={<PainelPedidos />} />
        <Route path="/paineldecontrole" element={<PainelDeControle />} />










        </Routes>
    </Router>
  );
}

export default App;
