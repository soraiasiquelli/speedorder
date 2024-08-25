import styles from "./Search.module.css"

function Search(){
    return(
        <div className={styles.divpesquisa}>

            <input type="text" name="" id="search_input" placeholder="Digite aqui o que procura..." className={styles.search_input} />
        </div>
    )
}
export default Search