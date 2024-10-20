const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db'); // Importando a configuração do banco de dados
const Estabelecimento = require(path.join(__dirname, 'Loja'));
const Administrador = require(path.join(__dirname, 'Administrador'));
const Mesa = require(path.join(__dirname, 'Mesas')); // Importando o modelo de Mesa
const Itens = require('./Itens'); // Importa o modelo de itens


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
    console.log("Dados recebidos:", req.body);  // Verificando dados recebidos

    try {
        const novoEstabelecimento = await Estabelecimento.create({
            nome_estabelecimento: req.body.nome_estabelecimento,
            email: req.body.email,
            endereco: req.body.endereco,
            telefone: req.body.telefone
        });
        console.log("Estabelecimento cadastrado com sucesso!", novoEstabelecimento);
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

// Rota para cadastrar administrador
app.post("/pagesforms/cadastroadmin", async (req, res) => {
    console.log("Rota /pagesforms/cadastroadmin chamada");
    console.log("Dados recebidos:", req.body);  // Verificando dados recebidos

    try {
        const novoAdministrador = await Administrador.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            telefone: req.body.telefone
        });
        console.log("Administrador cadastrado com sucesso!", novoAdministrador);
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

// Rota para cadastrar mesas
app.post("/cadastromesas", async (req, res) => {
    console.log("Rota /cadastromesa chamada");
    console.log("Dados recebidos:", req.body);  // Verificando dados recebidos

    try {
        const novaMesa = await Mesa.create({
            capacidade: req.body.capacidade, // Recebendo a capacidade da mesa
            status: req.body.status || 'livre' // Recebendo o status da mesa (opcional, padrão é 'livre')
        });
        console.log("Mesa cadastrada com sucesso!", novaMesa);
        res.status(201).send("Mesa cadastrada com sucesso!");
    } catch (err) {
        console.error("Erro ao cadastrar a mesa: ", err);
        res.status(500).send("Erro ao cadastrar a mesa.");
    }
});

// Rota para cadastrar itens
app.post("/cadastroprodutos", async (req, res) => {
    console.log("Rota /cadastroprodutos chamada");
    console.log("Dados recebidos:", req.body);  // Verificando dados recebidos

    try {
        const novoItem = await Itens.create({
            nome_item: req.body.nome_item,
            descricao: req.body.descricao,
            preco: req.body.preco,
            categoria: req.body.categoria,
            imagem: req.body.imagem // Adicionando o campo da imagem
        });
        console.log("Item cadastrado com sucesso!", novoItem);
        res.status(201).send("Item cadastrado com sucesso!");
    } catch (err) {
        console.error("Erro ao cadastrar o item: ", err);
        res.status(500).send("Erro ao cadastrar o item.");
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
