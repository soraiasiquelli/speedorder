import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePrincipal from './pages/HomePrincipal';
import Home from './pages/Home';
import NumeroDaMesa from './pages/NumeroDaMesa';
import NovoPedido from './pages/NovoPedido';
import CriarLoja from './pages/CriarLoja';
import PedidoClique from './pages/PedidoClique';
import PersonalizacaoLoja from './pages/PersonalizacaoLoja';
import Main from './pages/Main';
import ChamadoCozinha from './pages/ChamadoCozinha';
import CadastroAdmin from './pagesforms/CadastroAdmin';
import GestaoEstabelecimento from './pages/GestaoEstabelecimento';
import CadastroMesas from './pagesforms/CadastroMesas';
import CadastroGarcons from './pagesforms/CadastroGarcons';
import CadastroProdutos from './pagesforms/CadastroProdutos';
import Dashboard from './pages/Dashboard';
import HistoricoPedidos from './pages/HistoricoPedidos';
import UltimosPedidos from './pages/pagesgerencia/UltimosPedidos'
import PedidosProntos from './pages/pagesgerencia/PedidosProntos'
import PedidosEmPreparo from './pages/pagesgerencia/PedidosEmPreparo'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/speedorder" element={<Main />} />
        <Route path="/cadastroestabelecimento" element={<CriarLoja />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/homeprincipal" element={<HomePrincipal />} />
        <Route path="/numerodamesa" element={<NumeroDaMesa />} />
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





        </Routes>
    </Router>
  );
}

export default App;
