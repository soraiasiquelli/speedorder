import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './GestaoEstabelecimento.module.css';
import CadastroMesas from './CadastroMesas';
import CadastroGarcons from './CadastroGarcons';
import CadastroProdutos from './CadastroProdutos';
import FooterOpcoes from '../layout/FooterOpcoes';
import CardPedidosAdmin from './CardPedidosAdmin';
import { CiForkAndKnife } from "react-icons/ci";
import { FaKitchenSet } from "react-icons/fa6";
import { BiCheckCircle } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";





function GestaoEstabelecimento() {
    const [activeTab, setActiveTab] = useState('mesas');

    return (
        <div className={styles.pageGestao}>
        
            <header>

                <div className={styles.headerTopo}>
                    <ul>
                        <li>Visão Geral</li>
                        <li>Gerenciamento de Pedidos</li>
                        <li>Cardápio</li>
                        <li>Controle de Funcionários</li>
                    </ul>
                </div>


                <div className={styles.headerBase}>

                    <div className={styles.blocoResumo}>

                        <div className={styles.texto}>
                            <h2>Novos Pedidos</h2>
                            <p>3</p>
                        </div>
                        <CiForkAndKnife className={styles.icone}/>
                        </div>
                    <div className={styles.blocoResumo}>

                    <div className={styles.texto}>
                            <h2>Em Progresso</h2>
                            <p>5</p>
                        </div>
                        <FaKitchenSet className={styles.icone}/>


                    </div>
                    <div className={styles.blocoResumo}>

                    <div className={styles.texto}>
                            <h2>Prontos para Servir</h2>
                            <p>3</p>
                        </div>
                        <BiCheckCircle className={styles.icone}/>



                    </div>
                    <div className={styles.blocoResumo}>
                    <div className={styles.texto}>
                            <h2>Pedidos Cancelados</h2>
                            <p>1</p>
                        </div>
                        <BiCaretDown className={styles.icone}/>

                    </div>

                </div>
            </header>


            <div className={styles.containerDashboard}>

            <div className={styles.sidebar}>
                <ul>
                    <li>Teste 1</li>
                    <li>Teste 2</li>
                    <li>Teste 3</li>
                </ul>
            </div>

            <div className={styles.contentDashboard}>

               <h1>Conteúdo Principal</h1>
                <p>Aqui vai o conteúdo principal da página.</p>

            <CardPedidosAdmin/>
            </div>

            </div>
        

        </div>
    );
}

export default GestaoEstabelecimento;
