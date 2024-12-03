import styles from "./CriarEstabelecimento.module.css";
import { Link, useNavigate } from 'react-router-dom';
import Input from "../form/Input";
import { useState } from 'react';

function CriarEstabelecimento() {
    const [email, setEmail] = useState('');
    const [nomeEstabelecimento, setNomeEstabelecimento] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');

    const navigate = useNavigate();

    const criacaoLoja = async (e) => {
        e.preventDefault();

        // Verificação simples antes de enviar os dados
        if (!email || !nomeEstabelecimento || !endereco || !telefone) {
            console.error("Todos os campos são obrigatórios!");
            return;
        }

        try {
            // Verificando os dados antes de enviar
            console.log({
                email,
                nome_estabelecimento: nomeEstabelecimento,
                endereco,
                telefone
            });

            const response = await fetch("http://localhost:5000/cadastroestabelecimento", {
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

            if (response.ok) {
                console.log("Estabelecimento cadastrado com sucesso!");
                navigate("/homeprincipal");
            } else {
                const errorMessage = await response.text();
                console.error("Erro ao cadastrar o estabelecimento:", errorMessage);
            }
        } catch (err) {
            console.error("Erro na requisição:", err);
        }
    };

    return (
        <div className={styles.secaoprincipal}>
            <h2>Registre Seu Estabelecimento</h2>

            <form onSubmit={criacaoLoja} method="POST" className={styles.formulario}>
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
                <Link to="/homeprincipal"><button className={styles.btn} type="submit">Cadastrar</button></Link>
            </form>

            <Link to="/home"><p className={styles.plink}>Já tenho uma loja/Sou funcionário de uma loja</p></Link>
        </div>
    );
}

export default CriarEstabelecimento;
