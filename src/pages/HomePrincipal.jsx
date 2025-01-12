// src/pages/HomePrincipal.jsx
import Header from "../layout/Header";
import MenuLateral from "../layout/MenuLateral";
import styles from "./HomePrincipal.module.css";
import { Link } from 'react-router-dom';
import FooterOpcoes from "../layout/FooterOpcoes";
import { useEffect, useState } from 'react';
import logooficial from '../images/logo_speed_order_oficial__img.png'



/*************  ✨ Codeium Command ⭐  *************/
/**
 * HomePrincipal component that serves as the main page of the application.
 * It retrieves the user's name from local storage and displays a personalized greeting.
 * The page contains links to different sections of the application: Últimos Pedidos, Pedidos Prontos, Pedidos em Preparo, and Histórico de Pedidos.
 * The FooterOpcoes component is also included at the bottom of the page.
 */
/******  9eaca89b-fe7f-4be8-9654-43949466877b  *******/

function HomePrincipal() {

  const nomeEstabelecimento = localStorage.getItem("nomeEstabelecimento")






  const [nome, setNome] = useState('');

  useEffect(() => {
    const nomeUsuario = localStorage.getItem("nome_usuario");
    if (nomeUsuario) {
      setNome(nomeUsuario);
    }
  }, []); // Adicionei [] para que o efeito só rode uma vez

  return (
    <div className={styles.mainpage}>
      <header className={styles.headerPrincipal}>
      <MenuLateral/>

        <p className={styles.nomeusuario}>Olá nomeDoGarcom</p>
        <p className={styles.nomeEstabelecimento}>Você está no <br/>{nomeEstabelecimento}</p>
        
      </header>
      <main className={styles.mainContent}>
        <header className={styles.headerWelcome}>
          <p>Vamos agilizar os seus pedidos</p>
        </header>

        <section className={styles.sectionBlocos}>
          <div className={styles.opcaoBloco}>
            <Link to="/ultimos-pedidos" className={styles.link}>Últimos Pedidos</Link>
          </div>
          <div className={styles.opcaoBloco}>
            <Link to="/pedidos-prontos" className={styles.link}>Pedidos Prontos</Link>
          </div>
          <div className={styles.opcaoBloco}>
            <Link to="/pedidos-em-preparo" className={styles.link}>Pedidos em Preparo</Link>
          </div>
          <div className={styles.opcaoBloco}>
            <Link to="/historico-pedidos" className={styles.link}>Histórico de Pedidos</Link>
          </div>
        </section>



        <Link to="/mesaparapedido">
        <button className={styles.btnnovopedido}>Novo Pedido</button>
        </Link>
      </main>
    </div>
  );
}

export default HomePrincipal;
