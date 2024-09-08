
import styles from "./Main.module.css"
import { Link } from "react-router-dom"
import logo from '../images/logo.png';  // Caminho relativo a partir do arquivo onde você está usando a imagem

function Main(){

    return(

      <main>



        <img src={logo} alt="" />


        <Link to="/cadastroestabelecimento">
        <button className={styles.botaoiniciar}> 
    
            Iniciar Agora
        </button>
        </Link>
      </main>




    )


}

export default Main