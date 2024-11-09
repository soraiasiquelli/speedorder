import styles from "./SecaoItens.module.css"
import CardItem from "./CardItem"
import { Link } from "react-router-dom"
function SecaoItens(){
    return(
        <div className={styles.secaocompleta}>


<CardItem 
  src="./imagescomidas/hamburguer1.jpeg" 
  label_title="Cheeseburger" 
  p_descricao="Hambúrguer com queijo, alface, tomate e maionese." 
  p_preco="R$25,00"
  time_info = "12 mins"
  calorias_info = "121.9" 
/>

<CardItem 
  src="./imagescomidas/hamburguer2.jpeg" 
  label_title="Bacon Burger" 
  p_descricao="Hambúrguer com bacon crocante, queijo cheddar e cebola caramelizada." 
  p_preco="R$30,00" 
/>

<CardItem 
  src="./imagescomidas/hamburguer3.jpeg" 
  label_title="Double Cheeseburger" 
  p_descricao="Dois hambúrgueres com queijo, alface, tomate e molho especial." 
  p_preco="R$35,00" 
/>q

<CardItem 
  src="hamburguer4.jpg" 
  label_title="Veggie Burger" 
  p_descricao="Hambúrguer vegetariano com grão-de-bico, alface, tomate e molho de iogurte." 
  p_preco="R$28,00" 
/>

<CardItem 
  src="hamburguer5.jpg" 
  label_title="BBQ Burger" 
  p_descricao="Hambúrguer com molho barbecue, queijo cheddar e cebola roxa." 
  p_preco="R$32,00" 
/>

<CardItem 
  src="hamburguer6.jpg" 
  label_title="Spicy Burger" 
  p_descricao="Hambúrguer com molho picante, jalapeños e queijo pepper jack." 
  p_preco="R$30,00" 
/>






        </div>
    )
}

export default SecaoItens