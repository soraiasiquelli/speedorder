import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './GestaoEstabelecimento.module.css';
import CadastroMesas from '../pagesforms/CadastroMesas';
import CadastroGarcons from '../pagesforms/CadastroGarcons';
import CadastroProdutos from '../pagesforms/CadastroProdutos';
import FooterOpcoes from '../layout/FooterOpcoes';


function GestaoEstabelecimento() {
    const [activeTab, setActiveTab] = useState('mesas');

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
              
                <Link to="/cadastromesas"> <button>Cadastrar Mesas</button></Link>
                <Link to="/cadastrogarcons"> <button>Cadastrar Garçons</button></Link>
                <Link  to="/cadastroprodutos"> <button>Cadastrar Produtos</button></Link>

            </nav>

            <FooterOpcoes />

        </div>
    );
}

export default GestaoEstabelecimento;
