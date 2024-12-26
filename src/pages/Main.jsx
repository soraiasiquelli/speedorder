
import styles from "./Main.module.css"
import { Link } from "react-router-dom"
import logo from '../images/logo.png';  // Caminho relativo a partir do arquivo onde você está usando a imagem
import logospeed from '../images/logospeed.png';  // Caminho relativo a partir do arquivo onde você está usando a imagem
import logonova from '../images/logonova_speedorder.png'


function Main(){

    return(

      <main>



        <div className={styles.welcomesession}>
          <img src={logonova} alt=""  className={styles.imagemLogo}/>
          <Link to="/home">
          <button className={styles.botaoiniciar}> Começar Agora</button>
          </Link>
        </div>


        <footer>

        Desenvolvido com ❤️ por Soraia Siquelli

        </footer>

      </main>

      


    )


}

export default Main