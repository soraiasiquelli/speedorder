import styles from './NovoPedido.module.css'
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import Banner from '../layout/Banner';
import Nav from '../layout/Nav';
import Search from '../layout/Search';
import SecaoItens from '../layout/SecaoItens';
import Categorias from '../layout/Categorias'
import ButtonVoltar from '../layout/ButtonVoltar';
import { useState } from 'react';

function NovoPedido() {
  const nomeEstabelecimento = localStorage.getItem("nomeEstabelecimento");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null)
  const [filtroTexto, setFiltroTexto] = useState(null)

  return (
    <div>
      <Nav nome_estabelecimento={nomeEstabelecimento} />

      {/* Botão voltar no canto esquerdo */}
      <ButtonVoltar to="/tipoentrega" className={styles.btnVoltarNovoPedido} />

      {/* Ícone de carrinho no canto direito */}
      <Link to="/carrinhodeitens" className={styles.iconCarrinho}>
        <FiShoppingCart className={styles.btnCarrinho}/>
      </Link>

      <Search onSetFiltroTexto={setFiltroTexto} />
      <Categorias onSelectCategoria={setCategoriaSelecionada} />
      <SecaoItens categoriaSelecionada={categoriaSelecionada} textoFiltrado={filtroTexto} />
    </div>
  );
}

export default NovoPedido;
