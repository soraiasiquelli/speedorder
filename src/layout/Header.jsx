import styles from './Header.module.css'
function Header({nomepage}){


    
    return(
        <header className={styles.cabecalho}>

            <h2>{nomepage}</h2>

        </header>
        
    )
}

export default Header