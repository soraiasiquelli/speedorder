import styles from './SideBarGestaoAdmin.module.css'
import logospeedorder from '../images/novalogo_speedorder.svg'
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
            <li><VscLayoutMenubar className={styles.icone}/> Pedidos</li>
            <li><MdOutlineFastfood className={styles.icone}/>Cardápio</li>
            <li><MdPeopleOutline className={styles.icone} /> Equipe</li>
        </ul>
    </div>
    )
}

export default SideBarGestaoAdmin