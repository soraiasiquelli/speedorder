import { useState, useEffect } from 'react';
import styles from './CadastroProdutos.module.css';
import SideBarGestaoAdmin from '../layout/SideBarGestaoAdmin';
import CardProdutoAdmin from '../layout/CardProdutoAdmin';
import CadastrarProdutoPopUp from '../layout/CadastrarProdutoPopUp';
import EditarProdutoPopUp from '../layout/EditarProdutoPopUp';
import { useNavigate } from 'react-router-dom';
import HeaderAdmin from '../layout_admin/HeaderAdmin';
// ❌ Não use isso: import { use } from 'react';

function CadastroItens() {
  const [produtos, setProdutos] = useState([]);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [openPopUpEdit, setPopUpEdit] = useState(false);

  const navigate = useNavigate();

  const buscarProdutos = async () => {
    try {
      const response = await fetch("http://localhost:5001/cadastroprodutos");
      if (!response.ok) throw new Error("Erro do Servidor");
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.log("Erro ao buscar produtos:", error);
    }
  };

  const deletarProduto = async (id_item) => {
    try {
      const response = await fetch(`http://localhost:5001/cadastroprodutos/${id_item}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setProdutos(prev => prev.filter(p => p.id_item !== id_item));
      }
    } catch (error) {
      console.error('Erro na exclusão:', error);
    }
  };

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <div className={styles.secaoPrincipal}>
      <div className={styles.wrapperDashboard}>
        <SideBarGestaoAdmin />
        <div className={styles.containerDashboard}>
          <HeaderAdmin />
          <div className={styles.contentDashboard}>
            <input
              type="button"
              value="Cadastrar novo produto"
              className={styles.addProduto}
              onClick={() => setOpenPopUp(true)}
            />
            <CadastrarProdutoPopUp isOpen={openPopUp} setPopUpOpen={setOpenPopUp} />
            <EditarProdutoPopUp isOpen={openPopUpEdit} setPopUpOpen={setPopUpEdit} />

            {produtos.length > 0 ? (
              produtos.map((produto) => (
                <CardProdutoAdmin
                  key={produto.id_item}
                  id_item={produto.id_item} // ← Isso aqui é importante
                  src={produto.imagem}
                  label_title={produto.nome_item}
                  p_preco={produto.preco}
                  onDelete={() => deletarProduto(produto.id_item)}
                />
              ))
            ) : (
              <p>Nenhum produto disponível</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroItens;
