import styles from './HeaderAdmin.module.css'
import foto_soraia from "../images/sosofotinha.png"; // Caminho relativo a partir do arquivo onde você está usando a imagem


function HeaderAdmin (){

    const nomeAdmin = localStorage.getItem("nome_usuario")


   return (
     <header className={styles.header_admin}>
        <h1>Bem vindo(a), {nomeAdmin}</h1>
        <img src={foto_soraia} alt="" />

    </header>
   )
}


export default HeaderAdmin;