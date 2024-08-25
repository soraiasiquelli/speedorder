import styles from "./Input.module.css"
function Input({type, text, name, placeholder, handleOnChange}){

    return(
        <div className={styles.itensform}>
            <br />
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} />
            
        </div>
    )

}

export default Input