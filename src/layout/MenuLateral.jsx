import styles from './MenuLateral.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GoHome } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoHistory } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";





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
              <Link to="/">
              <GoHome className={styles.iconeLateral}/>
              Início
              </Link>
              <Link to="/notificacoes">
              <IoMdNotificationsOutline className={styles.iconeLateral}/>
              Notificações
              </Link>
              <Link to="/historico">
              <GoHistory className={styles.iconeLateral}/>
              Histórico
              </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuLateral;
