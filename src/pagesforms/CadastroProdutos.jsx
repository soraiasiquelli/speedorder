import { useState } from 'react';
import styles from './CadastroProdutos.module.css'; // Supondo que o CSS é nomeado como CadastroProdutos.module.css
import Input from "../form/Input"; // Certifique-se de que o caminho para Input está correto

function CadastroProdutos() {
    const [idEstabelecimento, setIdEstabelecimento] = useState('');
    const [nomeProduto, setNomeProduto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');
    const [disponibilidade, setDisponibilidade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar dados do produto
        const produtoData = {
            id_estabelecimento: idEstabelecimento,
            nome_produto: nomeProduto,
            descricao,
            preco,
            categoria,
            disponibilidade
        };

        // Exemplo de envio de dados para o backend
        fetch('http://localhost:3000/adicionarProduto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produtoData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Produto cadastrado:', data);
        })
        .catch(error => {
            console.error('Erro ao cadastrar produto:', error);
        });
    };

    return (
        <main className={styles.secaoprincipal}>
            <h2>Cadastro de Produtos</h2>
            <form onSubmit={handleSubmit}>
                <Input 
                    type="number"
                    text="ID do Estabelecimento"
                    name="id_estabelecimento"
                    placeholder="ID do Estabelecimento"
                    value={idEstabelecimento}
                    onChange={(e) => setIdEstabelecimento(e.target.value)}
                />
                <Input 
                    type="text"
                    text="Nome do Produto"
                    name="nome_produto"
                    placeholder="Nome do Produto"
                    value={nomeProduto}
                    onChange={(e) => setNomeProduto(e.target.value)}
                />
                <Input 
                    type="text"
                    text="Descrição"
                    name="descricao"
                    placeholder="Descrição do Produto"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <Input 
                    type="number"
                    text="Preço"
                    name="preco"
                    placeholder="Preço"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                />
                <Input 
                    type="text"
                    text="Categoria"
                    name="categoria"
                    placeholder="Categoria do Produto"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                />
                <Input 
                    type="text"
                    text="Disponibilidade"
                    name="disponibilidade"
                    placeholder="Disponibilidade"
                    value={disponibilidade}
                    onChange={(e) => setDisponibilidade(e.target.value)}
                />
                <button className={styles.btn} type="submit">Cadastrar Produto</button>
            </form>
        </main>
    );
}

export default CadastroProdutos;
