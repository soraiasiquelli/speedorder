import styles from './HomeCliente.module.css'
import FooterOpcoes from '../layout/FooterOpcoes';
import CardUltimosPedidos from '../layout/CardUltimosPedidos'
import { PedidosContext } from '../contextAPI/PedidosContext';
import { Link } from 'react-router-dom';
import { FaUtensils, FaClock, FaUser } from 'react-icons/fa';

function HomeCliente() {

    const nomeEstabelecimento = localStorage.getItem("nomeEstabelecimento")
    const nomeCliente = localStorage.getItem('nome_usuario')

  return (
    <div className={styles.container}>
      <header>
          <h1 className={styles.title}>Bem-vindo {nomeCliente}</h1>
      </header>

      <Link to="/tipoentrega" className={styles.novoPedidoBtn}>
        🍔 Fazer novo pedido
      </Link>

      <div className={styles.ultimosPedidos}>
        <h2>Último Pedidos</h2>
        <CardUltimosPedidos/>
        {/* Você pode colocar aqui o último pedido com status, se houver */}
      </div>

      <Link to="/pedidos" className={styles.linkHistorico}>
        Ver histórico de pedidos →
      </Link>

      <footer className={styles.footerMenu}>
        <Link to="/" className={styles.menuItem}>
          <FaUtensils />
          <span>Home</span>
        </Link>
        <Link to="/novopedido" className={styles.menuItem}>
          <FaClock />
          <span>Pedido</span>
        </Link>
        <Link to="/perfilcliente" className={styles.menuItem}>
          <FaUser />
          <span>Perfil</span>
        </Link>
      </footer>

      <FooterOpcoes typeView = "cliente"/>
    </div>
  );
}

export default HomeCliente;
