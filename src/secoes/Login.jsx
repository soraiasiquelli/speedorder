import Input from "../form/Input";
import styles from "./Login.module.css";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const efetuarLogin = (e) => {
        e.preventDefault();

        // Salva o nome do usuário no localStorage
        localStorage.setItem("nome_usuario", nome);
        localStorage.setItem("senha_usuario", senha)
        
        // Se as credenciais forem válidas, redireciona para a página inicial
        navigate("/homeprincipal");
    };

    return (
        <main>
            <div className={styles.secaoform}>
                <form className={styles.form} onSubmit={efetuarLogin}>

                    <img src="logospeedorder.png" alt="" />

                    <Input
                        type="text"
                        text="Digite seu usuário: "
                        name="nome"
                        placeholder="Usuário:"
                        handleOnChange={(e) => setNome(e.target.value)}
                    />
                    <Input
                        type="password"
                        text="Digite sua senha: "
                        name="senha"
                        placeholder="Senha:"
                        handleOnChange={(e) => setSenha(e.target.value)}
                    />
                    <button className={styles.btn} type="submit">ENTRAR</button>
                    <p className={styles.esqueceuasenhap}>
                        Esqueceu sua senha? <Link>Clique aqui</Link>
                    </p>
                    
                </form>
            </div>
        </main>
    );
}

export default Login;
