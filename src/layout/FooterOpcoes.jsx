import styles from './FooterOpcoes.module.css'
import { Link } from 'react-router-dom'
import PersonalizacaoLoja from '../administrador/PersonalizacaoLoja'
import home_icone from "../icones/home_icone.png"
import notificacao_icone from "../icones/notificacao_icone.png"
import cadastro_icone from "../icones/cadastro_icone.png"
import personalizacaoloja_icone from "../icones/personalizacaoloja_icone.png"
import sinos_icone from "../icones/sinos_icone.png"
import { GoHome } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { BsPencil } from "react-icons/bs";




function FooterOpcoes(){
    return(
        <footer className={styles.footermenu}>


        <div className={styles.topicomenu}>
        <Link to="/homeprincipal">
        <GoHome className={styles.iconeFooter}/>
        </Link></div>


        <div className={styles.topicomenu}>
        <IoIosNotificationsOutline className={styles.iconeFooter} />
        </div>
                
        <div className={styles.topicomenu}>

        <Link to="/mesaparapedido">
        <button className={styles.btnnovopedido}> 
             + 
             
             </button>
        </Link>


        </div>
        <div className={styles.topicomenu}> <Link to="/gestaoestabelecimento"><HiOutlineChartSquareBar className={styles.iconeFooter}/>

        </Link></div>

        <div className={styles.topicomenu}>
            <Link to="/personalizacaoloja"><BsPencil className={styles.iconeFooter}/>

            </Link>
        </div>

        </footer>
    )
}

export default FooterOpcoes