import styles from "./MesaParaPedido.module.css";
import { Link } from 'react-router-dom';
import FooterOpcoes from "../layout/FooterOpcoes";

function MesaParaPedido() {
    return (
        <div className={styles.secaonumerodamesa}>
            <h2>Escolha a mesa de atendimento</h2>
            
            <section className={styles.statusmesas}>
                <div className={styles.mesasituacao}>
                    <Link to="/novopedido">
                        <button>Mesa 01</button>
                    </Link>
                    <p>Liberada</p>
                </div>
                <div className={styles.mesasituacao}>
                    <Link to="/novopedido">
                        <button>Mesa 02</button>
                    </Link>
                    <p>Liberada</p>
                </div>
                <div className={styles.mesasituacao}>
                    <Link to="/novopedido">
                        <button>Mesa 03</button>
                    </Link>
                    <p>Liberada</p>
                </div>
                <div className={styles.mesasituacao}>
                    <Link to="/novopedido">
                        <button>Mesa 04</button>
                    </Link>
                    <p>Liberada</p>
                </div>
            </section>
            
            <footer className={styles.footeropcoes}><FooterOpcoes /></footer>
        </div>
    );
}

export default MesaParaPedido;
