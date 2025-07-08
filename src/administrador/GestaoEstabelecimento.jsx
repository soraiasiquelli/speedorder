
import HeaderGestaoAdmin from '../layout/HeaderGestaoAdmin';
import SideBarGestaoAdmin from '../layout/SideBarGestaoAdmin';
import styles from './GestaoEstabelecimento.module.css'
import { useNavigate } from 'react-router-dom';


function GestaoEstabelecimento(){
    return(
        <div className={styles.secaoPrincipal}>
            <HeaderGestaoAdmin />

            <div className={styles.containerDashboard}>

                <SideBarGestaoAdmin/>

                <div className={styles.contentDashboard} >

                </div>

            </div>


        </div>
    )
}

export default GestaoEstabelecimento;