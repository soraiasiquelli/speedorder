import { useState, useEffect } from 'react';
import styles from './CadastroProdutos.module.css';
import HeaderGestaoAdmin from '../layout/HeaderGestaoAdmin';
import SideBarGestaoAdmin from '../layout/SideBarGestaoAdmin';
import Input from "../form/Input"; 
import CardProdutoAdmin from '../layout/CardProdutoAdmin';
import CadastrarProdutoPopUp from '../layout/CadastrarProdutoPopUp';
import CardItem from '../layout/CardItem';
import EditarProdutoPopUp from '../layout/EditarProdutoPopUp';
import { useNavigate } from 'react-router-dom';
import { use } from 'react';

function CadastroItens() {
    const [nomeItem, setNomeItem] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagem, setImagem] = useState('');
    //Deixandoa visibilidade do pop up como false no inicio
    const[openPopUp, setOpenPopUp] = useState(false)
    const [openPopUpEdit, setPopUpEdit] = useState(false)


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


    const [produtos, setProdutos] = useState([])

    const buscarProdutos = async () =>{
        try {
            const responseProdutos = await fetch("http://localhost:5001/cadastroprodutos")
        if(!responseProdutos.ok) throw new Error("Erro do Servidor")
        const dataProdutos = await responseProdutos.json()
        console.log("Produtos: ", dataProdutos)


        setProdutos(dataProdutos)
        } catch (error) {
            console.log("Erro ao buscar produtos:". error)
        }
    }





 useEffect(() => {
           buscarProdutos();
       }, []);
   


    return (
        <div className={styles.secaoPrincipal}>
            <HeaderGestaoAdmin />

            <div className={styles.containerDashboard}>
                <SideBarGestaoAdmin />
                <div className={styles.contentDashboard}>

        
                    <input type="button" value="Cadastrar novo produto" className={styles.addProduto}
                     onClick={
                        () =>//Vai passar a funcao setOpenPopUp como true
                              setOpenPopUp(true)

                    }/>
    
                <CadastrarProdutoPopUp isOpen={openPopUp} setPopUpOpen={setOpenPopUp} />
                <EditarProdutoPopUp 
            isOpen={openPopUpEdit} 
            setPopUpOpen={setPopUpEdit} 
          />



                    { produtos.length > 0 ? (
                    produtos.map((produto) => (
                       <CardProdutoAdmin
                        key={produto.id_admin}
                        src={produto.imagem}
                        label_title={produto.nome_item}
                        p_preco={produto.preco}
                       
                       
                       />
                    ))
                 ) : (
          <p>Nenhum produto disponível</p>
                )
                }

                </div>
            </div>
        </div>
    );
}

export default CadastroItens;
