import styles from './PerfilCliente.module.css';

function PerfilCliente() {
  // Exemplo fictício com dados mockados
  const aluno = {
    nome: "Soraia Siquelli",
    email: "soraia@email.com",
    curso: "Ciência da Computação",
    ra: "2023123456"
  };

  const sairDaConta = () => {
    localStorage.clear(); // ou só remover o token do aluno
    window.location.href = "/login";
  };

  return (
    <div className={styles.container}>
      <h1>Meu Perfil</h1>

      <div className={styles.infoBox}>
        <p><strong>Nome:</strong> {aluno.nome}</p>
        <p><strong>Email:</strong> {aluno.email}</p>
        <p><strong>Curso:</strong> {aluno.curso}</p>
        <p><strong>RA:</strong> {aluno.ra}</p>
      </div>

      <button className={styles.logoutBtn} onClick={sairDaConta}>
        🚪 Sair da conta
      </button>
    </div>
  );
}

export default PerfilCliente;
