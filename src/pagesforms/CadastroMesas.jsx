import { useState } from 'react';
import styles from './CadastroMesas.module.css';
import Input from "../form/Input";
import { useNavigate } from 'react-router-dom';

function CadastroMesas() {
    const [numero, setNumero] = useState('');
    const [capacidade, setCapacidade] = useState('');
    const [idEstabelecimento, setIdEstabelecimento] = useState('');

    const navigate = useNavigate(); // Inicializa o hook useNavigate

    const cadastroMesa = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        // Verificação simples antes de enviar os dados
        if (!numero || !capacidade || !idEstabelecimento) {
            alert("Todos os campos são obrigatórios!");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/cadastromesas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id_estabelecimento: idEstabelecimento,
                    numero_mesa: numero,
                    capacidade
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
                    text="Número da Mesa"
                    name="numero_mesa"
                    placeholder="Número da Mesa"
                    value={numero}
                    handleOnChange={(e) => setNumero(e.target.value)}
                />
                <Input 
                    type="number"
                    text="Capacidade"
                    name="capacidade"
                    placeholder="Capacidade da Mesa"
                    value={capacidade}
                    handleOnChange={(e) => setCapacidade(e.target.value)}
                />
                <Input 
                    type="number"
                    text="ID do Estabelecimento"
                    name="id_estabelecimento"
                    placeholder="ID do Estabelecimento"
                    value={idEstabelecimento}
                    handleOnChange={(e) => setIdEstabelecimento(e.target.value)}
                />
                <button className={styles.btn} type="submit">Cadastrar Mesa</button>
            </form>
        </main>
    );
}

export default CadastroMesas;
