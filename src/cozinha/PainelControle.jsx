import styles from "./PainelControle.module.css"
import React, { useState } from 'react';

function PainelControle() {
    const [statusPedido, setStatusPedido] = useState('');
    const[numPedido, setNumPedido] = useState('')

   

    // Função para mudar o status do pedido
    const mudarStatusPedido = async (novoStatus) => {
        try {
            const response = await fetch("http://localhost:5001/atualizar-item", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    numPedido,
                    novoStatus
                })
            });
    
            // Verificar se a resposta é JSON
            if (!response.ok) {
                const text = await response.text(); // Lê como texto
                console.error('Erro no servidor:', text);
                return;
            }
    
            const data = await response.json();
    
            if (data.success) {
                console.log('Status atualizado com sucesso');
                setStatusPedido(novoStatus); // Atualiza o status após a resposta da API
                alert(`Status do pedido ${numPedido} atualizado para ${novoStatus}`);
            } else {
                console.log('Erro ao atualizar status');
            }
        } catch (error) {
            console.error('Erro de comunicação com o backend:', error);
        }
    };
    
    

    const mudarNumeroDoPedido = (e) =>{
        setNumPedido(e.target.value)
        console.log('Número do pedido: ', e.target.value); // Mostra o número do pedido no console

    }

    return (
        <div className={styles.painel_controle}>
            <div className={styles.botao_container}>
                {/* Botões para alterar o status */}
                <input type="number" name="" id="numPedido"  onChange={mudarNumeroDoPedido}/>
                <button onClick={() => mudarStatusPedido('em andamento')}>Em andamento</button>
                <button onClick={() => mudarStatusPedido('pronto')}>Pronto</button>
            </div>
        </div>
    );
}

export default PainelControle;
