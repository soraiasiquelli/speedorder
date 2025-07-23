import { useState } from 'react';
import styles from './CadastroMesas.module.css';
import Input from "../form/Input";
import { useNavigate } from 'react-router-dom';

function CadastroMesas() {
    const [numero_da_mesa, setNumero] = useState('');
    const [capacidade, setCapacidade] = useState('');
    const [status, setStatus] = useState('livre');
    const navigate = useNavigate();

    const cadastroMesa = async (e) => {
        e.preventDefault();


        if (!numero_da_mesa || !capacidade) {
            alert("Número e capacidade são obrigatórios!");
            return;
        }

        try {

             const estabelecimento_id = Number(localStorage.getItem("estabelecimento_id")) 
            const response = await fetch("http://localhost:5001/cadastromesas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ numero_da_mesa, capacidade, status, id_estabelecimento: estabelecimento_id })
            });

            if (response.ok) {
                alert("Mesa cadastrada com sucesso!");
                navigate("/homeprincipal");
            } else {
                const errorText = await response.text();
                alert(`Erro ao cadastrar a mesa: ${errorText}`);
            }
        } catch (err) {
            alert(`Erro na requisição: ${err.message}`);
        }
    };

    return (
        <main className={styles.secaoprincipal}>

            <form onSubmit={cadastroMesa} method='POST' className={styles.form}>
            <h2>Cadastro de Mesas</h2>

                <Input 
                    type="number"
                    text="Número da Mesa"
                    name="numero"
                    placeholder="Ex: 5"
                    value={numero_da_mesa}
                    handleOnChange={(e) => setNumero(e.target.value)}
                />

                <Input 
                    type="number"
                    text="Capacidade"
                    name="capacidade"
                    placeholder="Ex: 4 lugares"
                    value={capacidade}
                    handleOnChange={(e) => setCapacidade(e.target.value)}
                />
                 <br />
                <select 
                    name="status" 
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className={styles.select}
                >
                    <option value="livre">Livre</option>
                    <option value="ocupada">Ocupada</option>
                    <option value="reservada">Reservada</option>
                </select>

                <button className={styles.btn} type="submit">Cadastrar Mesa</button>
            </form>
        </main>
    );
}

export default CadastroMesas;
