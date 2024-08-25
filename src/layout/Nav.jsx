import styles from "./Nav.module.css"

function Nav({nome_hotel}){

    return(
        <nav>
            <h1>{nome_hotel}</h1>
        </nav>
    )

}

export default Nav