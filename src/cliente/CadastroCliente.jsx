import styles from './CadastroCliente.module.css'; // reutilizando o mesmo CSS
import HeaderGestaoAdmin from '../layout/HeaderGestaoAdmin'; // se quiser usar o header
import SideBarGestaoAdmin from '../layout/SideBarGestaoAdmin'; // se quiser sidebar
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../form/Input';

function CadastroCliente() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [codigo_lanchonete, setCodigo] = useState('')
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Exemplo: id_estabelecimento fixo ou vindo de localStorage
  const id_estabelecimento = localStorage.getItem('id_estabelecimento') || 1;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação simples
    if (!nome || !telefone || !email) {
      setError('Preencha todos os campos');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/clientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: nome,
          telefone: telefone,
          email_institucional: email,
          id_estabelecimento: codigo_lanchonete

        }),
      });

      const data = await response.json();

      if (response.ok) {
        // sucesso
        alert('Cliente cadastrado com sucesso!');
        localStorage.setItem('nome_cliente', nome)
        localStorage.setItem('id_estabelecimento', codigo_lanchonete)
        navigate('/homecliente'); // altere para onde quiser redirecionar
      } else {
        setError(data.error || 'Erro ao cadastrar cliente');
      }
    } catch (err) {
      setError('Erro na requisição. Tente novamente.');
    }
  };

  return (
    <main className={styles.secaoprincipal}>
      <header className={styles.cabecalho_page}>
        <h2>Cadastro de Cliente</h2>
        <p>Preencha os dados abaixo para cadastrar um novo cliente.</p>
      </header>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          text="Nome do Cliente"
          name="nomecliente"
          placeholder="Nome completo"
          handleOnChange={(e) => setNome(e.target.value)}
          value={nome}
        />
        <Input
          type="text"
          text="Telefone"
          name="telefonecliente"
          placeholder="Telefone com DDD"
          handleOnChange={(e) => setTelefone(e.target.value)}
          value={telefone}
        />
        <Input
          type="email"
          text="Email Institucional"
          name="emailcliente"
          placeholder="email@empresa.com"
          handleOnChange={(e) => setEmail(e.target.value)}
          value={email}
        />
          <Input
          type="number"
          text="Codigo Lanchonete"
          name="codigo_lanchonete"
          placeholder="001"
          handleOnChange={(e) => setCodigo(e.target.value)}
          value={codigo_lanchonete}
        />
        {error && <p className={styles.error}>{error}</p>}
        <button className={styles.btn} type="submit">Cadastrar</button>
      </form>
    </main>
  );
}

export default CadastroCliente;
