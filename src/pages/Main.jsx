
import styles from "./Main.module.css"
import { Link } from "react-router-dom"
import logo from '../images/logo.png';  // Caminho relativo a partir do arquivo onde você está usando a imagem
import logospeed from '../images/logospeed.png';  // Caminho relativo a partir do arquivo onde você está usando a imagem


function Main(){

    return(

      <main>



        <img src={logospeed} alt=""  className={styles.imagemLogo}/>

        <Link to="/home">

        <button className={styles.botaoiniciar}> 
    
            Começar Agora
        </button>
        </Link>


        <footer>

        Desenvolvido com ❤️ por Soraia Siquelli

        </footer>

      </main>

      


    )


}

export default Main