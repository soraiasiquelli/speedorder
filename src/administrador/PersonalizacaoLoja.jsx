// src/pages/PersonalizacaoLoja.jsx
import React from 'react';
import styles from './PersonalizacaoLoja.module.css';
import FooterOpcoes from '../layout/FooterOpcoes';

function PersonalizacaoLoja() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Personalização da Loja</h1>
            </header>
            <section className={styles.aparencia}>
                <img src="" alt="Imagem da Loja" className={styles.logo} />
                <div className={styles.info}>
                    <h2>Nome da Loja</h2>
                    <p>Endereço da Loja</p>
                </div>
            </section>
            <section className={styles.configuracoes}>
                <div className={styles.configItem}>
                    <h3>Telefone</h3>
                    <p>11944007513</p>
                </div>
                <div className={styles.configItem}>
                    <h3>Site</h3>
                    <p>siquelliweb.com.br</p>
                </div>
            </section>
            <FooterOpcoes />
        </div>
    );
}

export default PersonalizacaoLoja;
