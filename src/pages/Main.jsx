
import styles from "./Main.module.css"
import { Link } from "react-router-dom"
import logo from '../images/logo.png';  // Caminho relativo a partir do arquivo onde você está usando a imagem
import logospeed from '../images/logospeed.png';  // Caminho relativo a partir do arquivo onde você está usando a imagem
import logonova from '../images/logonova_speedorder.png'
import logooficial from '../images/logo_speed_order_oficial__img.png'
import imagemHamburguerHome from '../images/hamburguer_e_celular_home.png'


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

          <h1> Do Clique à Mesa, Simplificando Seu Atendimento!</h1>
          <Link to="/home">

        <button className={styles.botaoiniciar}> Começar</button>
      </Link>
        </div>
      </main>

      


    )


}

export default Main