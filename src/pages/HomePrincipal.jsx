// src/pages/HomePrincipal.jsx
import Header from "../layout/Header";
import MenuLateral from "../layout/MenuLateral";
import styles from "./HomePrincipal.module.css";
import { Link } from 'react-router-dom';
import FooterOpcoes from "../layout/FooterOpcoes";
import { useEffect, useState } from 'react';
import logooficial from '../images/logo_speed_order_oficial__img.png'
import { BsArrowRightSquare } from "react-icons/bs";




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
 // localStorage.setItem("nome_usuario", "Soraia" )

  useEffect(() => {
    const nomeUsuario = localStorage.getItem("nome_usuario");
    if (nomeUsuario) {
      setNome(nomeUsuario);
    }
  }, []); // Adicionei [] para que o efeito só rode uma vez

  return (
    <div className={styles.mainpage}>
      <header className={styles.headerPrincipal}>
   

        <p className={styles.nomeusuario}>Olá {nome}!</p>
        <p className={styles.nomeEstabelecimento}>Você está no <br/>{nomeEstabelecimento}</p>
        
      </header>
      
      <main className={styles.mainContent}>
        <header className={styles.headerWelcome}>
        </header>

        <section className={styles.sectionBlocos}>
       
          <ul className={styles.listaOpcoes}>
            <li className={styles.blocoDecorado}>
                <Link to="/ultimos-pedidos" className={styles.link}>Últimos Pedidos

                </Link>
            </li>
            <li>
                <Link to="/ultimos-pedidos" className={styles.link}>Últimos Pedidos</Link>
            </li>
      
          </ul>

        </section>


        <section className={styles.moreOptions}>

          <h2>Pedidos Em Andamento</h2>
          <div className={styles.cardUltimosPedidos}>

          <p>Pedido #003 </p>
          <p>Mesa 01 </p>
          <p>X-Bacon </p>

          </div>

        </section>

      <FooterOpcoes/>
       
      </main>
    </div>
  );
}

export default HomePrincipal;
