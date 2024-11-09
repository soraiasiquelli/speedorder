import { useState } from 'react';
import styles from './CadastroGarcons.module.css';
import { useNavigate } from 'react-router-dom';
import Input from "../form/Input";

function CadastroGarcons() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [dataContratacao, setDataContratacao] = useState('');
    const [error, setError] = useState(''); // Estado para armazenar a mensagem de erro

    const navigate = useNavigate();

    const cadastroGarcom = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/cadastrogarcons", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome,
                    telefone,
                    email,
                    dataContratacao
                })
            });

            if (response.ok) {
                console.log("Garçom cadastrado com sucesso!");
                navigate("/pagina-de-sucesso"); // Redireciona para a página de sucesso ou outra rota
            } else {
                const errorMessage = await response.text();
                console.error("Erro ao cadastrar o garçom:", errorMessage);
                setError(errorMessage); // Define a mensagem de erro para exibição
            }
        } catch (err) {
            console.error("Erro na requisição:", err);
            setError("Erro ao cadastrar o garçom. Tente novamente."); // Define uma mensagem de erro genérica
        }
    };

    return (
        <main className={styles.secaoprincipal}>
            <h2>Cadastro de Garçom</h2>
            <p>Preencha o formulário abaixo para cadastrar um novo garçom</p>

            <form onSubmit={cadastroGarcom}>
                <Input 
                    type="text"
                    text="Nome do Garçom"
                    name="nome"
                    placeholder="Nome completo do garçom"
                    value={nome}
                    handleOnChange={(e) => setNome(e.target.value)}            
                />

                <Input 
                    type="text"
                    text="Telefone"
                    name="telefone"
                    placeholder="Telefone com DDD"
                    value={telefone}
                    handleOnChange={(e) => setTelefone(e.target.value)}            
                />

                <Input 
                    type="email"
                    text="Email"
                    name="email"
                    placeholder="Email do Garçom"
                    value={email}
                    handleOnChange={(e) => setEmail(e.target.value)}            
                />

                <Input 
                    type="date"
                    text="Data de Contratação"
                    name="dataContratacao"
                    placeholder="Data de contratação"
                    value={dataContratacao}
                    handleOnChange={(e) => setDataContratacao(e.target.value)}            
                />

                {error && <p className={styles.error}>{error}</p>} {/* Exibe a mensagem de erro, se houver */}

                <button className={styles.btn} type="submit">Cadastrar Garçom</button>
            </form>
        </main>
    );
}

export default CadastroGarcons;
