import styles from "./Nav.module.css";

function Nav({ nome_estabelecimento }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>{nome_estabelecimento}</h1>
      </div>
    </header>
  );
}

export default Nav;
