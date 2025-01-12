import { useState } from 'react';
import styles from './CadastroProdutos.module.css';
import Input from "../form/Input"; // Importando o componente de input
import { useNavigate } from 'react-router-dom';

function CadastroItens() {
    const [nomeItem, setNomeItem] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagem, setImagem] = useState(''); // Novo estado para a imagem

    const navigate = useNavigate(); // Inicializa o hook useNavigate

    const cadastroItem = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        // Verificação simples antes de enviar os dados
        if (!nomeItem || !preco) {
            alert("Todos os campos obrigatórios!");
            return;
        }

        try {

            //busca o id do estabelecimento que esta no localstorage e armazena na variavel

            const estabelecimento_id = localStorage.getItem("estabelecimento_id")

            const response = await fetch("http://localhost:5001/cadastroprodutos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome_item: nomeItem,
                    descricao,
                    preco,
                    categoria,
                    imagem, // Enviando a imagem
                    //Adiciona o id do estabelecimento que esta no localstorage
                    id_estabelecimento: estabelecimento_id
                    
                })
            });

            if (response.ok) {
                console.log("Item cadastrado com sucesso!");
                navigate("/gestaoestabelecimento"); // Redireciona para a próxima página
            } else {
                const errorText = await response.text();
                console.error("Erro ao cadastrar o item:", errorText);
                alert(`Erro ao cadastrar o item: ${errorText}`); // Mostra um alerta com a mensagem de erro
            }
        } catch (err) {
            console.error("Erro na requisição:", err);
            alert(`Erro na requisição: ${err.message}`); // Mostra um alerta com a mensagem de erro
        }
    };

    return (
        <main className={styles.secaoprincipal}>
            <h2>Cadastro de Itens</h2>
            <form onSubmit={cadastroItem} method='POST' className={styles.formulario}>
                <Input 
                    type="text"
                    text="Nome do Item"
                    name="nome_item"
                    placeholder="Nome do Item"
                    value={nomeItem}
                    handleOnChange={(e) => setNomeItem(e.target.value)}
                />
                <Input 
                    type="text"
                    text="Descrição"
                    name="descricao"
                    placeholder="Descrição do Item"
                    value={descricao}
                    handleOnChange={(e) => setDescricao(e.target.value)}
                />
                <Input 
                    type="number"
                    text="Preço"
                    name="preco"
                    placeholder="Preço do Item"
                    value={preco}
                    handleOnChange={(e) => setPreco(e.target.value)}
                />
                <Input 
                    type="text"
                    text="Categoria"
                    name="categoria"
                    placeholder="Categoria do Item"
                    value={categoria}
                    handleOnChange={(e) => setCategoria(e.target.value)}
                />
                <Input 
                    type="text"
                    text="URL da Imagem"
                    name="imagem"
                    placeholder="URL da Imagem do Item"
                    value={imagem}
                    handleOnChange={(e) => setImagem(e.target.value)}
                />
                <button className={styles.btn} type="submit">Cadastrar Item</button>
            </form>
        </main>
    );
}

export default CadastroItens;
