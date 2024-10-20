import { useState } from 'react';
import styles from './CadastroGarcons.module.css';  // Supondo que o CSS é nomeado como CadastroGarcons.module.css
import Input from "../form/Input";  // Certifique-se de que o caminho para Input está correto

function CadastroGarcons() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [dataContratacao, setDataContratacao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar dados do garçom
        const garcomData = {
            nome,
            telefone,
            email,
            dataContratacao
        };

        // Exemplo de envio de dados para o backend
        fetch('http://localhost:3000/pagesforms/cadastrogarcons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(garcomData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na resposta: ${response.status}`);
            }
            return response.json(); // Certifique-se de que a resposta está em JSON
        })
        .then(data => {
            console.log('Garçom cadastrado:', data);
        })
        .catch(error => {
            console.error('Erro ao cadastrar garçom:', error);
        });
        
    };

    return (
        <main className={styles.secaoprincipal}>
            <h2>Cadastro de Garçons</h2>
            <form onSubmit={handleSubmit}>
                <Input 
                    type="text"
                    text="Nome"
                    name="nome"
                    placeholder="Nome do Garçom"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <Input 
                    type="text"
                    text="Telefone"
                    name="telefone"
                    placeholder="Telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />
                <Input 
                    type="email"
                    text="Email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    type="date"
                    text="Data de Contratação"
                    name="dataContratacao"
                    placeholder="Data de Contratação"
                    value={dataContratacao}
                    onChange={(e) => setDataContratacao(e.target.value)}
                />
                <button className={styles.btn} type="submit">Cadastrar Garçom</button>
            </form>
        </main>
    );
}

export default CadastroGarcons;
