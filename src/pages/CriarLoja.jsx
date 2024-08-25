import styles from "./CriarLoja.module.css";
import { Link, useNavigate } from 'react-router-dom';
import Input from "../form/Input";
import { useState } from 'react';

function CriarLoja() {
    const [email, setEmail] = useState('');
    const [nomedaloja, setNomeLoja] = useState('');
    const [nomecompleto, setNomeCompleto] = useState('');
    const [nomeusuario, setNomeUsuario] = useState('');

    const navigate = useNavigate(); // Inicializa o hook useNavigate

    const criacaoLoja = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        // Salvando os dados no localStorage
        localStorage.setItem("email", email);
        localStorage.setItem("nomedaloja", nomedaloja);
        localStorage.setItem("nomecompleto", nomecompleto);
        localStorage.setItem("nomedeusuario", nomeusuario);

        // Redireciona para a página home01
        navigate("/homeprincipal");
    };

    return (
        <div className={styles.secaoprincipal}>
            <h2>Registre Seu Restaurante</h2>
            <p> Descubra a facilidade e eficiência de gerenciar pedidos com nossa plataforma intuitiva.</p>

            <form onSubmit={criacaoLoja}>
                <Input
                    type="email"
                    text="Digite seu email: "
                    name="email"
                    placeholder="Email:"
                    handleOnChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="text"
                    text="Digite o nome da sua loja: "
                    name="nomeloja"
                    placeholder="Nome da Loja:"
                    handleOnChange={(e) => setNomeLoja(e.target.value)}
                />
                <Input
                    type="text"
                    text="Digite seu nome completo: "
                    name="nomecompleto"
                    placeholder="Nome completo:"
                    handleOnChange={(e) => setNomeCompleto(e.target.value)}
                />
                <Input
                    type="text"
                    text="Digite seu usuário "
                    name="nomeusuario"
                    placeholder="Nome de usuário: "
                    handleOnChange={(e) => setNomeUsuario(e.target.value)}
                />
                <Input
                    type="password"
                    text="Digite sua senha: "
                    name="senha"
                    placeholder="Digite sua senha:"
                />
                <Input
                    type="password"
                    text="Confirme sua senha: "
                    name="confirm_senha"
                    placeholder="Confirme sua senha:"
                />
                <button className={styles.btn} type="submit">ENTRAR</button>
            </form>

           
            <Link to="/home"><p>Já tenho uma loja/Sou funcionário de uma loja</p></Link>
        </div>
    );
}

export default CriarLoja;
