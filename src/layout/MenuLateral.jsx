import styles from './MenuLateral.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function MenuLateral() {
  const [menuAberto, setMenuAberto] = useState(false); // Começa fechado

  const toggleMenu = () => {
    setMenuAberto(!menuAberto); // Alterna entre aberto e fechado
  };

  return (
    <div className={styles.container}>
      {/* Botão fixo para abrir/fechar o menu */}
      <button className={styles.btnFecharMenu} onClick={toggleMenu}>
        {menuAberto ? '|||' : '|||'} 
      </button>

      {/* Menu lateral, mostrado apenas se estiver aberto */}
      {menuAberto && (
        <div className={styles.menuLateral}>
          <div className={styles.linksdomenu}>
              <Link to="/">Início</Link>
              <Link to="/notificacoes">Notificações</Link>
              <Link to="/historico">Histórico</Link>
              <Link to="/ajuda">Ajuda</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuLateral;
