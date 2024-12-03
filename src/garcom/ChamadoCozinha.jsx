import styles from './ChamadoCozinha.module.css'
import FooterOpcoes from '../layout/FooterOpcoes'

function ChamadoCozinha(){

    return(

        <main className={styles.chamadomain}>

        <h2>Realize um chamado aqui</h2>

        <div className={styles.secaochat}>




            <div className={styles.campodigitacao}>
            Digite algo aqui
            </div>      
        </div>

       
        <FooterOpcoes/>

        </main>

    




    )






}


export default ChamadoCozinha