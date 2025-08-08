import styles from './NovoPedido.module.css'
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';  // ícone carrinho
import Banner from '../layout/Banner';
import Nav from '../layout/Nav';
import Search from '../layout/Search';
import SecaoItens from '../layout/SecaoItens';


function NovoPedido() {
  const nomeEstabelecimento = localStorage.getItem("nomeEstabelecimento");

  return (
    <div>
      <Nav nome_hotel={nomeEstabelecimento} />

      {/* Ícone de carrinho fixo no canto superior direito */}
      <Link to="/carrinhodeitens" className={styles.iconCarrinho}>
        <FiShoppingCart />
      </Link>

      <Search />
      <SecaoItens />
    </div>
  );
}

export default NovoPedido;
