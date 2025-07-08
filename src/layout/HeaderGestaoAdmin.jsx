import styles from './HeaderGestaoAdmin.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { CiForkAndKnife } from "react-icons/ci";
import { FaKitchenSet } from "react-icons/fa6";
import { BiCheckCircle } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

function HeaderGestaoAdmin(){

    return(
        <header className={styles.headerGestao}>

        <div className={styles.headerTopo}>
            <ul>
                <li>
                    <Link to="/gestaoestabelecimento">Visão Geral</Link>
                </li>
                <li>
                <Link to="/gerenciamentopedidos"> Gerenciamento de Pedidos </Link>
                </li>
                <li><Link to="/cadastroprodutos">Cardápio</Link></li>
                <li>Controle de Funcionários</li>
            </ul>
        </div>


        <div className={styles.headerBase}>

            <div className={styles.blocoResumo}>

                <div className={styles.texto}>
                    <h2>Novos Pedidos</h2>
                    <p>3</p>
                </div>
                </div>
            <div className={styles.blocoResumo}>

            <div className={styles.texto}>
                    <h2>Em Progresso</h2>
                    <p>5</p>
                </div>
                <FaKitchenSet className={styles.icone}/>


            </div>
            <div className={styles.blocoResumo}>

            <div className={styles.texto}>
                    <h2>Prontos para Servir</h2>
                    <p>3</p>
                </div>
                <BiCheckCircle className={styles.icone}/>



            </div>
            <div className={styles.blocoResumo}>
            <div className={styles.texto}>
                    <h2>Pedidos Cancelados</h2>
                    <p>1</p>
                </div>
                <BiCaretDown className={styles.icone}/>

            </div>

        </div>
    </header>
    )

}


export default HeaderGestaoAdmin