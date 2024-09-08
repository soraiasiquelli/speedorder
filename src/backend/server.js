const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db'); // Importando a configuração do banco de dados
const Estabelecimento = require(path.join(__dirname, 'Loja'));
const Administrador = require(path.join(__dirname, 'Administradores'));

const app = express();

// Configuração do motor de templates Handlebars
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para cadastro de lojas
app.post("/cadastroestabelecimento", async (req, res) => {
    console.log("Rota /cadastroestabelecimento chamada");
    console.log("Dados recebidos:", req.body); // Log para ver os dados recebidos

    try {
        await Estabelecimento.create({
            nome_estabelecimento: req.body.nome_estabelecimento,
            email: req.body.email,
            endereco: req.body.endereco,
            telefone: req.body.telefone
        });
        console.log("Estabelecimento cadastrado com sucesso!");
        res.status(201).send("Estabelecimento cadastrado com sucesso!");
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            console.error("Erro: Email já cadastrado.");
            res.status(400).send("Erro: Email já cadastrado.");
        } else {
            console.error("Erro ao cadastrar o estabelecimento: ", err);
            res.status(500).send("Erro ao cadastrar o estabelecimento.");
        }
    }
});

app.post("/pagesforms/cadastroadmin", async (req, res) => {
    console.log("Rota /pagesforms/cadastroadmin chamada");
    console.log("Dados recebidos:", req.body); // Log para ver os dados recebidos

    try {
        await Administrador.create({
            nome: req.body.nome, // Ajuste o nome dos campos aqui
            email: req.body.email,
            senha: req.body.senha, // Adicione o campo senha
            telefone: req.body.telefone
        });
        console.log("Administrador cadastrado com sucesso!");
        res.status(201).send("Administrador cadastrado com sucesso!");
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            console.error("Erro: Email já cadastrado.");
            res.status(400).send("Erro: Email já cadastrado.");
        } else {
            console.error("Erro ao cadastrar o administrador: ", err);
            res.status(500).send("Erro ao cadastrar o administrador.");
        }
    }
});

// Sincroniza o modelo com o banco de dados
db.sequelize.sync()
.then(() => {
    console.log("Modelo sincronizado com sucesso.");
})
.catch(err => {
    console.error("Erro ao sincronizar o modelo: ", err);
});

// Iniciando o servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});