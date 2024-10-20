import styles from './FooterOpcoes.module.css'
import { Link } from 'react-router-dom'
import PersonalizacaoLoja from '../pages/PersonalizacaoLoja'
function FooterOpcoes(){
    return(
        <footer className={styles.footermenu}>


        <div className={styles.topicomenu}> <Link to="/homeprincipal">1
        </Link></div>
        <div className={styles.topicomenu}>2</div>
        <div className={styles.topicomenu}>

        <Link to="/numerodamesa">
        <button className={styles.btnnovopedido}>  + </button>
        </Link>

        </div>
        <div className={styles.topicomenu}> <Link to="/gestaoestabelecimento">4
        </Link></div>

        <div className={styles.topicomenu}>
            <Link to="/personalizacaoloja">5
            </Link>
        </div>

        </footer>
    )
}

export default FooterOpcoes