import styles from './SideBarGestaoAdmin.module.css'
import logospeedorder from '../images/novalogo_speedorder.svg'
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { VscLayoutMenubar } from "react-icons/vsc";
import { MdOutlineFastfood } from "react-icons/md";
import { MdPeopleOutline } from "react-icons/md";






function SideBarGestaoAdmin(){
    return(
        <div className={styles.sidebar}>
            <header className={styles.headerSideBar}>
            <img src={logospeedorder} alt=""  className={styles.imagemLogo}/>

            </header>
        <ul>
            <Link to="/gestaoestabelecimento">
                <li><MdOutlineDashboard className={styles.icone}/> Visão Geral</li>
            </Link>
            <Link to="/gerenciamentopedidos">
                <li><VscLayoutMenubar className={styles.icone}/> Pedidos</li>
            </Link>
            <Link to="/cadastroprodutos">
                <li><MdOutlineFastfood className={styles.icone}/>Cardápio</li>
            </Link>
            <li><MdPeopleOutline className={styles.icone} /> Equipe</li>
        </ul>
    </div>
    )
}

export default SideBarGestaoAdmin