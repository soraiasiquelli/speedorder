import Header from "../layout/Header";
import styles from "./PersonalizacaoLoja.module.css";
import { Link } from 'react-router-dom';
import Login from "../secoes/Login";
import { useEffect, useState } from 'react';
import FooterOpcoes from "../layout/FooterOpcoes";

function PersonalizacaoLoja() {
    return (
        <div className={styles.secaoprincipalpersonalizacao}>
            <div className={styles.secaoaparecia}> 
                <img src="" alt="" />
                <p>Nome da Loja</p>
                <p>Endereco da Loja</p>
            </div>

            <div className={styles.secaoconfig}>


                <div className={styles.blococonfig}>
                  
                    <div className={styles.blococoluna}>
                <p>Telefone</p>                  
                  </div>

                    <div className={styles.blococoluna}>

                    <p>11944007513</p>
                    </div>
                </div>

                <div className={styles.blococonfig}>
                  
                    <div className={styles.blococoluna}>
                <p>Site</p>                  
                  </div>

                    <div className={styles.blococoluna}>

                    <p>siquelliweb.com.br</p>
                    </div>
                </div>

                

                <FooterOpcoes/>

            </div>
        </div> 
    ); // Fechamento da função PersonalizacaoLoja
}

export default PersonalizacaoLoja;
