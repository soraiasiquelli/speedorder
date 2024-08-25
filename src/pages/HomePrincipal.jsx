import Header from "../layout/Header"
import styles from "./HomePrincipal.module.css"
import { Link } from 'react-router-dom';
import Login from "../secoes/Login";
import { useEffect, useState } from 'react';
import FooterOpcoes from "../layout/FooterOpcoes";


function HomePrincipal({usuario}){


    const[nome, setNome] = useState('');


    useEffect(()=>{

        const nomeUsuario = localStorage.getItem("nome_usuario")

        if (nomeUsuario) {
            setNome(nomeUsuario);
        }
    })





    return(
        <div className={styles.mainpage}>

            <Header nomepage="Pedidos e Serviços Flex"/>
        


            <main>
                <div className={styles.sectionmain}>
                    <header className={styles.header_welcome}>
                        <h2>Bom dia <br></br> {nome} </h2>
                        <img src="chapeuchefprincipal.png" alt="" />
                    </header>

                <section className={styles.secaoblocos}>

                <div className={styles.opcaobloco}>
                
                <Link> <p>Últimos Pedidos</p></Link>
                </div>
                <div className={styles.opcaobloco}>
                <Link> <p>Pedidos Prontos</p></Link>
                </div>
                <div className={styles.opcaobloco}>
                <Link> <p>Pedidos Prontos</p></Link>

                </div>
                <div className={styles.opcaobloco}> 
                <Link> <p>Pedidos Prontos</p></Link>
                </div>

                </section>

             <FooterOpcoes/>

                 </div>
                
            </main>






        </div>
    )
}

export default HomePrincipal