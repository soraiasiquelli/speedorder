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
    //const idAdmin = 5; // Definindo um ID fixo para teste

    const criacaoLoja = async (e) => {
        e.preventDefault();
        console.log("Funcao criacaoLoja chamada!")
    
        // Verificação simples antes de enviar os dados para verificar se é obrigatório
        if (!email || !nomeEstabelecimento || !endereco || !telefone) {
            console.error("Todos os campos são obrigatórios!");
            return;
        }
        
        try {
                // Recuperar o ID do administrador do localStorage 
             const adminId = localStorage.getItem("admin_id");

    
            console.log('Antes da requisição fetch');
            const response = await fetch("http://localhost:5001/cadastroestabelecimento", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nomeEstabelecimento: nomeEstabelecimento,
                    email: email,
                    endereco: endereco,
                    telefone: telefone,
                    id_admin: adminId
                })
            });


            console.log('Depois da requisição fetch');
            console.log(response);



            const contentType = response.headers.get("Content-Type");
        console.log("Content-Type da resposta:", contentType);

        const data = await response.json()
        console.log("ID do estabelecimento:", data.id_estabelecimento);


        
            if (response.ok) {
                console.log("ID do estabelecimento:", data.id_estabelecimento);

                console.log("Estabelecimento cadastrado com sucesso!");
                localStorage.setItem("estabelecimento_id", data.id_estabelecimento)
                localStorage.setItem("nomeEstabelecimento", nomeEstabelecimento)
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
            <header className={styles.cabecalho_page}>
                <h2>Registre Seu Restaurante!</h2>
                <p>Preencha os detalhes abaixo e garanta seu espaço no nosso sistema.</p>
            </header>

            <form onSubmit={criacaoLoja} method="POST" className={styles.formulario}>
                <Input
                    type="email"
                    text="Digite seu email: "
                    name="email"
                    placeholder="Email do estabelecimento"
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

            <Link to="/home"><p className={styles.plink}>Já tenho uma loja/Sou funcionário de um estabelecimento</p></Link>
        </div>
    );
}

export default CriarEstabelecimento;
