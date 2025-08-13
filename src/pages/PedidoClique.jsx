import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useNavigate } from 'react-router-dom'; // adiciona useNavigate
import ButtonVoltar from '../layout/ButtonVoltar';
import styles from "./PedidoClique.module.css";

function PedidoClique() {
    const location = useLocation();
    const navigate = useNavigate(); // hook para navegação
    const { id_item, id_estabelecimento, src, label_title, p_descricao, p_preco, time_info, calorias_info } = location.state || {};

    const [observacao, setObservacao] = useState("");

    const adicionarAoCarrinho = (item) => {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.push(item);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        alert(`${item.label_title} foi adicionado ao carrinho!`);
    };

    const addCart = () => {
        const item = {
            uuid: uuidv4(), // Gera um UUID único para cada item
            id_item,
            id_estabelecimento,
            src,
            label_title,
            p_descricao,
            p_preco,
            observacao
        };

        adicionarAoCarrinho(item);
        console.log("Item adicionado ao carrinho", item);
    };

    const voltar = () => {
        navigate('/novopedido'); // redireciona para a página de novo pedido
    };

    return (
        <div className={styles.secaopedidoclique}>
            <ButtonVoltar to={"/novopedido"}/>

            <div className={styles.imagempedidoescolhido}>
                <img src={src} alt={label_title} />
            </div>

            <div className={styles.detalhespedidoescolhido}>
                <h1 className={styles.titulo}>{label_title}</h1>
                <p className={styles.p_prato_descricao}>{p_descricao}</p>

                <textarea
                    className={styles.textareadesc}
                    name="comentario"
                    placeholder="Gostaria de adicionar ou retirar algo? Ex: Cebola, tomate..."
                    value={observacao}
                    onChange={(e) => setObservacao(e.target.value)}
                ></textarea>

                <button className={styles.btnProximo} onClick={addCart}>
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    );
}

export default PedidoClique;
