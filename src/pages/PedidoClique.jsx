import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from "./PedidoClique.module.css";

function PedidoClique() {
    const location = useLocation(); /*contem o obejto location da rota atual*/
    const { src, label_title, p_descricao, p_preco, time_info, calorias_info } = location.state || {}; /*o location vai receber os parametros do link*/

    return (
        <div className={styles.secaopedidoclique}>
            <div className={styles.imagempedidoescolhido}>
                <img src={src} alt={label_title} />
            </div>
            <div className={styles.detalhespedidoescolhido}>
                <h1>{label_title}</h1>
                <p className={styles.p_prato_descricao}>{p_descricao}</p>

                <nav className={styles.infos}>

                <ul>
                    <li> ⏱️ {time_info}</li>
                    <li> 🎚️  {calorias_info}</li>
                </ul>

                </nav>






                <textarea
                    className={styles.textareadesc}
                    name="comentario"
                    placeholder="Gostaria de adicionar algo ou retirar algo? Ex: Cebola, tomate..."
                ></textarea>
                <button>Próximo</button>
            </div>
        </div>
    );
}

export default PedidoClique;
