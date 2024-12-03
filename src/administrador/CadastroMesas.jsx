import { useState } from 'react';
import styles from './CadastroMesas.module.css';
import Input from "../form/Input";
import { useNavigate } from 'react-router-dom';

function CadastroMesas() {
    const [capacidade, setCapacidade] = useState(''); // Removido o estado para número da mesa
    const navigate = useNavigate(); // Inicializa o hook useNavigate

    const cadastroMesa = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        // Verificação simples antes de enviar os dados
        if (!capacidade) {
            alert("A capacidade é obrigatória!");
            return;
        }

        try {
            const response = await fetch("http://localhost:5001/cadastromesas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    capacidade, // Apenas a capacidade está sendo enviada
                    // O status pode ser definido aqui se necessário
                })
            });

            if (response.ok) {
                console.log("Mesa cadastrada com sucesso!");
                navigate("/gestaoestabelecimento"); // Redireciona para a próxima página
            } else {
                const errorText = await response.text();
                console.error("Erro ao cadastrar a mesa:", errorText);
                alert(`Erro ao cadastrar a mesa: ${errorText}`); // Mostra um alerta com a mensagem de erro
            }
        } catch (err) {
            console.error("Erro na requisição:", err);
            alert(`Erro na requisição: ${err.message}`); // Mostra um alerta com a mensagem de erro
        }
    };

    return (
        <main className={styles.secaoprincipal}>
            <h2>Cadastro de Mesas</h2>
            <form onSubmit={cadastroMesa} method='POST'>
                <Input 
                    type="number"
                    text="Capacidade"
                    name="capacidade"
                    placeholder="Capacidade da Mesa"
                    value={capacidade}
                    handleOnChange={(e) => setCapacidade(e.target.value)}
                />
                <button className={styles.btn} type="submit">Cadastrar Mesa</button>
            </form>
        </main>
    );
}

export default CadastroMesas;
