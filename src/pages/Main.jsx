
import styles from "./Main.module.css"
import { Link } from "react-router-dom"
import logo from '../images/logo.png';  // Caminho relativo a partir do arquivo onde você está usando a imagem
import logospeed from '../images/logospeed.png';  // Caminho relativo a partir do arquivo onde você está usando a imagem
import logonova from '../images/logonova_speedorder.png'
import logooficial from '../images/logo_speed_order_oficial__img.png'


function Main(){

    return(
//          <img src={logonova} alt=""  className={styles.imagemLogo}/>
//<Link to="/home">
//<button className={styles.botaoiniciar}> Começar Agora</button>
//</Link>
/*<footer>

        Desenvolvido com ❤️ por Soraia Siquelli

        </footer>*/
      <main>



        <div className={styles.welcomesession}>
          
          <img src={logooficial} alt=""  className={styles.imagemLogo}/>
          <Link to="/home">
        <button className={styles.botaoiniciar}> Começar Agora</button>
      </Link>

        </div>


      </main>

      


    )


}

export default Main