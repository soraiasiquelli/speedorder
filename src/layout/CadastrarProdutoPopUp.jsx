import styles from './CadastrarProdutoPopUp.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../form/Input';

function CadastrarProdutoPopUp({isOpen, setPopUpOpen}){

    /*Logica para cadastrar os produtos*/

        const [nomeItem, setNomeItem] = useState('');
        const [descricao, setDescricao] = useState('');
        const [preco, setPreco] = useState('');
        const [categoria, setCategoria] = useState('');
        const [imagem, setImagem] = useState('');
        const [closePopUp, setClosePopUp] = useState(false)
    
        const navigate = useNavigate();
    
        const cadastroItem = async (e) => {
            e.preventDefault();
    
            if (!nomeItem || !preco) {
                alert("Todos os campos obrigatórios!");
                return;
            }
    
            try {
                const estabelecimento_id = localStorage.getItem("estabelecimento_id");
    
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
                        imagem,
                        id_estabelecimento: estabelecimento_id
                    })
                });
    
                if (response.ok) {
                    console.log("Item cadastrado com sucesso!");
                    navigate("/gestaoestabelecimento");
                } else {
                    const errorText = await response.text();
                    console.error("Erro ao cadastrar o item:", errorText);
                    alert(`Erro ao cadastrar o item: ${errorText}`);
                }
            } catch (err) {
                console.error("Erro na requisição:", err);
                alert(`Erro na requisição: ${err.message}`);
            }
        };
    
        const pop_up_style = {

        }

        const background_style ={
            position: 'fixed',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            backgroundColor: 'rgb(0,0,0, 0.7)',
            zIndex: '1000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'


        }



       if(isOpen){
        return(
           
            
            <div style={background_style}>
                <div className={styles.secaoCadastroProduto}>
                <input
                    type="button"
                    value="FECHAR X"
                    className={styles.btnFecharPopUp}
                    onClick={() => setPopUpOpen(false)} // Fechar o pop-up
                />

                    <form action="">
                    <h2>Cadastre um novo produto aqui</h2>
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
                </div>
            </div>
        )
       }



    

}

export default CadastrarProdutoPopUp