// src/pages/HomePrincipal.jsx
import Header from "../layout/Header";
import styles from "./HomePrincipal.module.css";
import { Link } from 'react-router-dom';
import FooterOpcoes from "../layout/FooterOpcoes";
import { useEffect, useState } from 'react';

function HomePrincipal() {
  const [nome, setNome] = useState('');

  useEffect(() => {
    const nomeUsuario = localStorage.getItem("nome_usuario");
    if (nomeUsuario) {
      setNome(nomeUsuario);
    }
  }, []); // Adicionei [] para que o efeito só rode uma vez

  return (
    <div className={styles.mainpage}>

      <main className={styles.mainContent}>
        <header className={styles.headerWelcome}>
          <h2>Bom dia, {nome}</h2>
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

        <FooterOpcoes />
      </main>
    </div>
  );
}

export default HomePrincipal;
