import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePrincipal from './pages/HomePrincipal';
import Home from './pages/Home';
import NumeroDaMesa from './pages/NumeroDaMesa'
import NovoPedido from './pages/NovoPedido'
import CriarLoja from './pages/CriarLoja';
import PedidoClique from './pages/PedidoClique';
import PersonalizacaoLoja from './pages/PersonalizacaoLoja';
import Main from './pages/Main'

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Main />} />
        <Route path="/criarloja" element={<CriarLoja />} />
        <Route path="/home" element={<Home />} />
        <Route path="/homeprincipal" element={<HomePrincipal />} />
        <Route path="/numerodamesa" element={<NumeroDaMesa />} />
        <Route path="/novopedido" element={<NovoPedido />} />
        <Route path="/pedidoclique/:id" element={<PedidoClique />} />
        <Route path="/personalizacaoloja" element={<PersonalizacaoLoja/>} />



      </Routes>
    </Router>
  );
}

export default App;
