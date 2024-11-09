import styles from './FooterOpcoes.module.css'
import { Link } from 'react-router-dom'
import PersonalizacaoLoja from '../pages/PersonalizacaoLoja'
import home_icone from "../icones/home_icone.png"
import notificacao_icone from "../icones/notificacao_icone.png"
import cadastro_icone from "../icones/cadastro_icone.png"
import personalizacaoloja_icone from "../icones/personalizacaoloja_icone.png"
function FooterOpcoes(){
    return(
        <footer className={styles.footermenu}>


        <div className={styles.topicomenu}> <Link to="/homeprincipal">
    
        <img src={home_icone} alt="" />
        </Link></div>


        <div className={styles.topicomenu}><img src={notificacao_icone} alt="" /></div>
        <div className={styles.topicomenu}>

        <Link to="/numerodamesa">
        <button className={styles.btnnovopedido}>  + </button>
        </Link>

        </div>
        <div className={styles.topicomenu}> <Link to="/gestaoestabelecimento"> <img src={cadastro_icone} alt="" />
        </Link></div>

        <div className={styles.topicomenu}>
            <Link to="/personalizacaoloja"> <img src={personalizacaoloja_icone} alt="" />
            </Link>
        </div>

        </footer>
    )
}

export default FooterOpcoes