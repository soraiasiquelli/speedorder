import styles from './CadastroAdmin.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Input from "../form/Input";
import { useState } from 'react';

function CadastroAdmin() {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [error, setError] = useState(''); // Estado para armazenar a mensagem de erro

    const navigate = useNavigate();

    const cadastroAdmin = async (e) => {
        e.preventDefault();
    
        if (senha !== confirmSenha) {
            setError("As senhas não coincidem. Por favor, verifique.");
            return;
        }
    
        try {
            const response = await fetch("http://localhost:5001/pagesforms/cadastroadmin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email, // Altere conforme o campo enviado no corpo da requisição
                    nome: nome, // Altere conforme o campo enviado no corpo da requisição
                    telefone: telefone, // Altere conforme o campo enviado no corpo da requisição
                    senha: senha // Altere conforme o campo enviado no corpo da requisição
                })
            });
    
            console.log(response);
            if (response.ok) {
                console.log("Administrador cadastrado com sucesso!");
                navigate("/cadastroestabelecimento"); // Redireciona para a próxima página
            } else {
                const errorMessage = await response.text();
                console.error("Erro ao cadastrar o administrador:", errorMessage);
                setError(errorMessage); // Define a mensagem de erro para exibição
            }
        } catch (err) {
            console.error("Erro na requisição:", err);
            setError("Erro ao cadastrar o administrador. Tente novamente."); // Define uma mensagem de erro genérica
        }
    };

    return (
        <main className={styles.secaoprincipal}>
            <h2>Cadastro do Administrador</h2>
            <p>Preencha o formulário abaixo para criar um novo administrador</p>

            <form onSubmit={cadastroAdmin} method="POST">
                <Input 
                    type="email"
                    text="Digite seu email: "
                    name="emailadmin"
                    placeholder="Email do Administrador:"
                    handleOnChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    type="text"
                    text="Nome do Admin"
                    name="nomeadmin"
                    placeholder="Nome completo do administrador: "
                    handleOnChange={(e) => setNome(e.target.value)}            
                />

                <Input
                    type="text"
                    text="Telefone do Admin"
                    name="telefoneadmin"
                    placeholder="Telefone com DDD"
                    handleOnChange={(e) => setTelefone(e.target.value)}            
                />

                <Input
                    type="password"
                    text="Senha"
                    name="senhaadmin"
                    placeholder="Senha:"
                    handleOnChange={(e) => setSenha(e.target.value)}            
                />

                <Input
                    type="password"
                    text="Confirme a Senha"
                    name="confirmsenhaadmin"
                    placeholder="Confirme a senha:"
                    handleOnChange={(e) => setConfirmSenha(e.target.value)}            
                />

                {error && <p className={styles.error}>{error}</p>} {/* Exibe a mensagem de erro, se houver */}

                <button className={styles.btn} type="submit">Cadastrar</button>
            </form>
        </main>
    );
}

export default CadastroAdmin;
