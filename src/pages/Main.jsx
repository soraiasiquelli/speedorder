
import styles from "./Main.module.css"
import { Link } from "react-router-dom"

function Main(){

    return(

      <main>



        <img src="logospeedorder.png" alt="" />


        <Link to="/criarloja">
        <button className={styles.botaoiniciar}> 
    
            Iniciar Agora
        </button>
        </Link>
      </main>




    )


}

export default Main