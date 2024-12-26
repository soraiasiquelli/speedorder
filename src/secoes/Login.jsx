import Input from "../form/Input";
import styles from "./Login.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logospeed from "../images/logospeed.png"; // Caminho relativo a partir do arquivo onde você está usando a imagem
import logonova from '../images/logonova_speedorder.png'

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const efetuarLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          senha: senha,
        }),
      });
  
      // Pegue a resposta como texto para depuração
      const responseText = await response.text();
      console.log("Resposta do servidor:", responseText); // Exibe o conteúdo da resposta
  
      // Tente fazer o parse se a resposta for JSON
      const data = JSON.parse(responseText); // Pode lançar um erro se não for JSON
      console.log(data);
  
      if (data.tipo === "administrador") {
        navigate("/homeadmin");
      } else if (data.tipo === "garçom") {
        navigate("/homegarcom");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao tentar fazer login.");
    }
  };
  
  
  

  return (
    <main className={styles.mainform}>
      <div className={styles.secaoform}>
        <form className={styles.form} onSubmit={efetuarLogin}>
          <img src={logonova} alt="Logo Speed" />

          <Input
            type="email"
            text="Digite seu email: "
            name="email"
            placeholder="Email"
            handleOnChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            text="Digite sua senha: "
            name="senha"
            placeholder="Senha"
            handleOnChange={(e) => setSenha(e.target.value)}
          />
          <button className={styles.btn} type="submit">
            ENTRAR
          </button>
          <p className={styles.esqueceuasenhap}>
            Esqueceu sua senha? <Link>Clique aqui</Link>
          </p>
          <p className={styles.criarconta}>
            <Link to={"/pagesforms/cadastroadmin"}>Criar Conta</Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Login;
