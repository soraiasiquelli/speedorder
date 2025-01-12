import styles from "./MesaParaPedido.module.css";
import { Link, useNavigate } from "react-router-dom";
import FooterOpcoes from "../layout/FooterOpcoes";
import { useEffect, useState } from "react";
import NovoPedido from "./NovoPedido";
function MesaParaPedido() {
    const [mesas, setMesas] = useState([]);
    const navigate = useNavigate();

    const fetchMesas = async () => {
        try {
            const response = await fetch("http://localhost:5001/cadastromesas");
            if (response.ok) {
                const data = await response.json(); // Corrigido o acesso ao JSON
                setMesas(data); //Vai receber as mesas
            } else {
                console.log("Erro do servidor");
            }
        } catch (error) {
            console.log("Erro ao buscar as mesas do banco de dados: ", error.message);
        }
    };

    useEffect(() => {
        fetchMesas();
    }, []); // Corrigida a lista de dependências

    
    const salvarMesaNoLocalStorage = (id) => {
        localStorage.setItem('id_mesa', id);
        navigate("/novopedido")
    };
    

    return (
        <div className={styles.secaonumerodamesa}>
            <h2>Escolha a mesa de atendimento</h2>
            {mesas.length > 0 ? (
                // Condição para exibir mesas cadastradas
                mesas.map((mesa) => (
                    <button 
                        key={mesa.id} 
                        onClick={() => salvarMesaNoLocalStorage(mesa.id_mesa)} className={styles.btnEscolherMesa} // Função anônima para passar o valor de id_mesa
                        //() => salvarMesaNoLocalStorage(mesa.id_mesa)): Isso garante que a função salvarMesaNoLocalStorage será chamada apenas quando o botão for clicado e o mesa.id_mesa correto será passado para ela e não quando o componente for carregado (renderizado)
                    >
                        Mesa {mesa.id_mesa} {mesa.numero}
                    </button>
                ))
                
            ) : (
                <p>Sem Mesas para esse estabelecimento</p>
            )}
            <footer className={styles.footeropcoes}>
                <FooterOpcoes />
            </footer>
        </div>
    );
}

export default MesaParaPedido;
