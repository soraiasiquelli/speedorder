const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db'); // Importando a configuração do banco de dados
const Estabelecimento = require(path.join(__dirname, 'Loja'));
const Administrador = require(path.join(__dirname, 'Administrador'));
const Mesa = require(path.join(__dirname, 'Mesas')); // Importando o modelo de Mesa
const Itens = require('./Itens'); // Importa o modelo de itens
const Garcons = require("./Garcons");
const { where } = require('sequelize');

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


app.post("/cadastrogarcons", async (req, res) => {
    console.log("Rota /cadastrogarcons chamada");
    console.log("Dados recebidos:", req.body); // Verificando dados recebidos

    try {
        const novoGarcom = await Garcons.create({
            nome: req.body.nome,
            telefone: req.body.telefone,
            email: req.body.email,
            data_contratacao: req.body.dataContratacao // Verifique o nome do campo aqui
        });

        console.log("Garçom cadastrado com sucesso:", novoGarcom); // Verifique se o garçom foi criado

        res.status(201).json({
            message: "Garçom cadastrado com sucesso!",
            garcom: novoGarcom
        });
    } catch (error) {
        console.error("Erro ao cadastrar garçom:", error.message);
        console.error(error);
        res.status(500).json({ error: "Erro ao cadastrar garçom", details: error.message });
    }
});




/*Verificacao de Login*/


app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Verifica se é um administrador
    const admin = await Administrador.findOne({
      where: { email: email, senha: senha }
    });

    if (admin) {
      console.log("O usuário é um administrador");
      return res.status(200).json({ tipo: "administrador" });
    } 

    // Se não for um administrador, verifica se é um garçom
    const garcom = await Garcons.findOne({
      where: { email: email, senha: senha }
    });

    if (garcom) {
      console.log("O usuário é um garçom");
      return res.status(200).json({ tipo: "garçom" });
    }

    // Caso não encontre nem o administrador nem o garçom
    return res.status(400).json({ message: "Usuário ou senha incorretos." });
  } catch (error) {
    console.error("Erro ao tentar fazer login:", error);
    return res.status(500).json({ message: "Erro ao tentar fazer login." });
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
