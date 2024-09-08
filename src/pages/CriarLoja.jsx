import styles from "./CriarLoja.module.css";
import { Link, useNavigate } from 'react-router-dom';
import Input from "../form/Input";
import { useState } from 'react';

function CriarLoja() {
    const [email, setEmail] = useState('');
    const [nomeEstabelecimento, setNomeEstabelecimento] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');

    const navigate = useNavigate(); // Inicializa o hook useNavigate
    const criacaoLoja = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
    
        // Verificação simples antes de enviar os dados
        if (!email || !nomeEstabelecimento || !endereco || !telefone) {
            console.error("Todos os campos são obrigatórios!");
            return;
        }
    
        try {
            const response = await fetch("http://localhost:3000/cadastroestabelecimento", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    nome_estabelecimento: nomeEstabelecimento,
                    endereco,
                    telefone
                })
            });
            console.log(response);
            if (response.ok) {
                console.log("Estabelecimento cadastrado com sucesso!");
                navigate("/pagesforms/cadastroadmin"); // Redireciona para a próxima página
            } else {
                console.error("Erro ao cadastrar o estabelecimento:", await response.text());
            }
        } catch (err) {
            console.error("Erro na requisição:", err);
        }
    };
    

    return (
        <div className={styles.secaoprincipal}>
            <h2>Registre Seu Estabelecimento</h2>
            <p>Descubra a facilidade e eficiência de gerenciar pedidos com nossa plataforma intuitiva.</p>

            <form onSubmit={criacaoLoja} method="POST">
                <Input
                    type="email"
                    text="Digite seu email: "
                    name="email"
                    placeholder="Email:"
                    handleOnChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="text"
                    text="Digite o nome do estabelecimento: "
                    name="nome_estabelecimento"
                    placeholder="Nome do estabelecimento"
                    handleOnChange={(e) => setNomeEstabelecimento(e.target.value)}
                />
                <Input
                    type="text"
                    text="Digite o endereço: "
                    name="endereco"
                    placeholder="Endereço:"
                    handleOnChange={(e) => setEndereco(e.target.value)}
                />
                <Input
                    type="text"
                    text="Digite o telefone: "
                    name="telefone"
                    placeholder="Telefone"
                    handleOnChange={(e) => setTelefone(e.target.value)}
                />
               
                <button className={styles.btn} type="submit">Cadastrar</button>
            </form>

            <Link to="/home"><p className={styles.plink}>Já tenho uma loja/Sou funcionário de uma loja</p></Link>
        </div>
    );
}

export default CriarLoja;
