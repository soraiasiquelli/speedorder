const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const cors = require("cors"); // Importando o CORS
const path = require('path');
const db = require('./db'); // Importando a configuração do banco de dados
const Estabelecimento = require(path.join(__dirname, 'Estabelecimento'));
const Administrador = require(path.join(__dirname, 'Administrador'));
const Mesa = require(path.join(__dirname, 'Mesas')); // Importando o modelo de Mesa
//const Itens = require('./Itens'); // Importa o modelo de itens
const Garcons = require("./Garcons");
//const ItensDoPedido = require("./ItensDoPedido")
const Pedido = require("./Pedidos")
const { where } = require('sequelize');
const port = 5001
const http = require('http');
//const Pedidos = require('./Pedidos');
const { Itens, Pedidos, ItensDoPedido } = require('../models/index');



const app = express();
app.use(cors({ origin: "http://localhost:3000" })); // Permite o frontend no localhost:3000
app.use(express.json());



// Configuração do motor de templates Handlebars
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Rota para cadastro de lojas
/* app.post("/cadastroestabelecimento", async (req, res) => {
    console.log("Rota /cadastroestabelecimento chamada");
    console.log("Dados recebidos:", req.body);  // Verificando dados recebidos

    const { nome_estabelecimento, email, endereco, telefone } = req.body;

    try {
        // Criação do novo estabelecimento
        const novoEstabelecimento = await Estabelecimento.create({
            nome_estabelecimento,
            email,
            endereco,
            telefone // telefone pode ser null ou vazio
        });

        console.log("Estabelecimento cadastrado com sucesso!", novoEstabelecimento);
        res.status(201).send("Estabelecimento cadastrado com sucesso!");
    } catch (err) {
        console.error("Erro ao cadastrar o estabelecimento: ", err); // Log detalhado do erro
        console.error("Erro completo: ", err.stack); // Mostra o erro completo e a stack trace

        // Verificar erros específicos
        if (err.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).send("Erro: Email já cadastrado.");
        } else if (err.name === 'SequelizeValidationError') {
            return res.status(400).send("Erro de validação: Dados inválidos.");
        } else {
            return res.status(500).send("Erro interno ao cadastrar o estabelecimento.");
        }
    }
});*/

//Rota Login Inicial - verificar se o usuário existe no banco de dados

app.post("/login", async(req, res) =>{
    console.log("Recebido no corpo:", req.body);

    const{email, senha} = req.body
    console.log("Email Recebido:", email)

    console.log("Rota First Log in Encontrada!");

   try {
        let usuario = await Administrador.findOne({
            where: {
                email: email,
                senha: senha
            }
        })

        //Se  encontrou usuario na tabela de administradores

        if(usuario){

             let estabelecimento = await Estabelecimento.findOne({
                where: {
                    email: usuario.email
                }
            })


            return res.json({
                mensagem: "Usuário encontrado na tabela Administradores",
                tipo: "administrador",
                nome: usuario.nome , // <-- Adicione isto
                nomeEstabelecimento: estabelecimento?.nomeEstabelecimento || null

            })
        }



        if(!usuario){ //Se não encontrou na tabela de administrador procure na tabela garcons
            usuario = await Garcons.findOne({
                where:{
                    email: email,
                    //senha: senha
                }
            })

        }

        //Se  encontrou usuario na tabela de garcons


         if(usuario){

            let estabelecimento = await Estabelecimento.findOne({
                    where: {
                        email: usuario.email
                    }
                })

                if (estabelecimento) {
            return res.json({
                mensagem: "Estabelecimento encontrado com sucesso na tabela de estabelecimentos",
                nomeEstabelecimento: estabelecimento.nomeEstabelecimento
            });
        } else {
            return res.status(404).json({
                mensagemErro: "Estabelecimento não encontrado"
            });
        }
            
            
            return res.json({
                mensagem: "Usuário encontrado na tabela de garcons",
                tipo: "garcom",
                nome: usuario.nome,
                nomeEstabelecimento: estabelecimento?.nomeEstabelecimento || null

            })
        }

      

   


    // Se não encontrou em nenhuma das tabelas
    return res.status(404).json({ mensagemErro: "Usuário não encontrado" });

   } catch (error) {
    
   }

  res.json({ emailRecebido: req.body.email, senhaRecebida: req.body.senha });
})















app.post("/cadastroestabelecimento", async (req, res) => {
    console.log("Rota /cadastroestabelecimento chamada");
    console.log("Dados recebidos:", req.body);

    const { nomeEstabelecimento, endereco, telefone, email, id_admin } = req.body;

    if (!nomeEstabelecimento || !endereco || !telefone || !email || !id_admin) {
        console.error("Erro: Todos os campos são obrigatórios.");
        return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    try {
        const novoEstabelecimento = await Estabelecimento.create({
            nomeEstabelecimento,
            endereco,
            telefone,
            email,
            id_admin // VAI VIR DO LOCALSTORAGE
        });

        console.log("Estabelecimento cadastrado com sucesso!", novoEstabelecimento);

        // Resposta como JSON
        res.status(201).json({
            id_estabelecimento: novoEstabelecimento.id_estabelecimento, // Retorne o ID do estabelecimento, se necessário
            message: "Estabelecimento cadastrado com sucesso!"
        });
    } catch (error) {
        console.error("Erro ao cadastrar o estabelecimento:", error);
        if (error.errors) {
            error.errors.forEach(err => console.error(err.message)); // Log de erros de validação
        }

        // Resposta de erro como JSON
        res.status(500).json({
            error: `Erro ao cadastrar o estabelecimento: ${error.message}`
        });
    }
});



// Rota para cadastrar administrador
app.post("/pagesforms/cadastroadmin", async (req, res) => {
console.log("Rota /pagesforms/cadastroadmin chamada");
console.log("Dados recebidos:", req.body);

try {
const existente = await Administrador.findOne({ where: { email: req.body.email } });
if (existente) {
    console.error("Erro: Email já cadastrado no sistema.");
    return res.status(400).json({ error: "Erro: Email já cadastrado." });
}

const novoAdministrador = await Administrador.create({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    telefone: req.body.telefone,
});

console.log("Administrador cadastrado com sucesso!", novoAdministrador);
res.status(201).json({ admin_id: novoAdministrador.id_administrador });
} catch (err) {
console.error("Erro ao cadastrar o administrador: ", err);
res.status(500).json({ error: "Erro ao cadastrar o administrador." });
}
});



// Rota para cadastrar mesas
app.post("/cadastromesas", async (req, res) => {
    console.log("Rota /cadastromesa chamada");
    console.log("Dados recebidos:", req.body);  // Verificando dados recebidos

    const { id_estabelecimento} = req.body;
    try {
        const novaMesa = await Mesa.create({
            capacidade: req.body.capacidade, // Recebendo a capacidade da mesa
            status: req.body.status || 'livre',
            numero_da_mesa: req.body.numero_da_mesa,
            id_estabelecimento: id_estabelecimento
        });
        console.log("Mesa cadastrada com sucesso!", novaMesa);
        res.status(201).send("Mesa cadastrada com sucesso!");
    } catch (err) {
        console.error("Erro ao cadastrar a mesa: ", err);
        res.status(500).send("Erro ao cadastrar a mesa.");
    }
});


app.get("/cadastromesas", async (req, res) => {
    try {
        const mesas = await Mesa.findAll(); // Certifique-se de que o nome do modelo está correto
        console.log("Mesas encontradas: ", mesas);
        res.status(200).json(mesas);
    } catch (error) {
        console.log("Erro ao buscar as mesas", error);
        res.status(500).json({ error: "Erro ao buscar as mesas" }); // Envie um JSON de erro com status 500
    }
});


// Rota para cadastrar itens
// Rota POST para cadastrar produtos
app.post("/cadastroprodutos", async (req, res) => {
    console.log("Rota /cadastroprodutos chamada");
    console.log("Dados recebidos:", req.body);

      
    const { id_estabelecimento} = req.body;


    try {
        const novoItem = await Itens.create({
            nome_item: req.body.nome_item,
            descricao: req.body.descricao,
            preco: req.body.preco,
            categoria: req.body.categoria,
            imagem: req.body.imagem,
            id_estabelecimento //VAI VIR DO LOCALSTORAGE
        });
        console.log("Item cadastrado com sucesso!", novoItem);
        res.status(201).send("Item cadastrado com sucesso!");
    } catch (err) {
        console.error("Erro ao cadastrar o item: ", err);
        res.status(500).send(`Erro ao cadastrar o item: ${err.message}`);
    }
});


app.get("/cadastroprodutos", async (req, res) => {
    try {
        // Busca todos os itens na tabela 'itens'
        const produtos = await Itens.findAll();
        console.log("Produtos encontrados:", produtos);

        // Envia os produtos como JSON na resposta
        res.status(200).json(produtos);
    } catch (err) {
        console.error("Erro ao buscar produtos:", err);
        res.status(500).send("Erro ao buscar produtos.");
    }
});


app.delete("/cadastroprodutos/:id", async (req, res) => {
    const {id} = req.params;
    console.log('ID recebido para deletar:', id);


    try {

        const idNum = Number(id);
        //verifica se o produto existe
        const produto = await Itens.findOne({ where: { id_item: idNum } }); 
        
        if(!produto){
                return res.status(404).json({error: 'Produto não encontrado'})
        }

        const pedidosEmAndamento = await ItensDoPedido.findAll({
            where: {id_produto: idNum},
            include: [{
                model: Pedidos,
                as: "pedido",
                where: {status: 'em andamento'}
            }]
        })

        // 3. Deleta os registros de ItensDoPedido com esse produto
    await ItensDoPedido.destroy({ where: { id_produto: idNum } });

    await produto.destroy();
    return res.status(200).json({message: "Produto deletado com sucesso"})
    } catch (error) {
         console.error('Erro ao deletar produto:', error);
    res.status(500).json({ error: 'Erro ao deletar produto' });
        
    }
})

app.put("/cadastroprodutos_edicao/:id", async(req, res) => {
    const {id} = req.params;
    console.log("ID recebido para editar:", id)

    try {
        const idNum = Number(id)
        produto = await Itens.findOne({where: {id_item: idNum}})

        if(!produto){
           return res.status(404).json({error: 'Produto não encontrado'})
        }

        await produto.update({
            nome_item,
            descricao,
            preco
        })

        return res.status(200).json({message: "Produto atualizado com sucesso", produto})
    } catch (error) {
         console.error('Erro ao atualizar produto:', error);
        return res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
})

// Rota para cadastrar garçons
app.post("/cadastrogarcons", async (req, res) => {
    console.log("Rota /cadastrogarcons chamada");
    console.log("Dados recebidos:", req.body); // Verificando dados recebidos

    try {
        const { nome, telefone, email, dataContratacao, id_administrador, estabelecimento_id } = req.body;

        // Criação do garçom, associando ao administrador e ao estabelecimento
        const novoGarcom = await Garcons.create({
            nome,
            telefone,
            email,
            data_contratacao: dataContratacao,
            admin_id: id_administrador, // Atribuindo o admin_id
            estabelecimento_id: estabelecimento_id // Atribuindo o estabelecimento_id
        });

        console.log("Garçom cadastrado com sucesso:", novoGarcom); // Verifique se o garçom foi criado

        res.status(201).json({
            message: "Garçom cadastrado com sucesso!",
            garcom: novoGarcom
        });
    } catch (error) {
        console.error("Erro ao cadastrar garçom:", error.message);
        res.status(500).json({ error: "Erro ao cadastrar garçom", details: error.message });
    }
});


/*Verificacao de Login*/

app.post("/fecharpedido", async (req, res) => {
    const { itens, id_estabelecimento, forma_de_pagamento, total } = req.body;


    if (!itens || itens.length === 0) {
        return res.status(400).json({ message: "Não há itens para cadastrar." });
    }

    try {
        // Criação do pedido
        const pedido = await Pedido.create({
            id_mesa: req.body.id_mesa,
            id_estabelecimento,
            forma_de_pagamento: req.body.forma_de_pagamento,
            total: req.body.total
        
        });

        // Criando os itens do pedido
        const itensCadastrados = await Promise.all(
            itens.map(async (item) => {
                if (!item.id_produto) {
                    throw new Error("id_produto não encontrado para o item.");
                }

                //Usar body quando 
                return await ItensDoPedido.create({
                    id_pedido: pedido.id_pedido,  // Associando o pedido
                    id_produto: item.id_produto,  // Associando o item ao pedido pelo id_produto
                    id_estabelecimento: item.id_estabelecimento,
                    quantidade: item.quantidade,
                    total_item: item.total_item,
                    id_mesa: req.body.id_mesa  // Acessando o id_mesa do corpo da requisição - Fazer assim
                });
            })
        );

        res.status(201).json({ message: "Pedido e itens cadastrados com sucesso", pedido });
    } catch (error) {
        console.error("Erro ao criar o pedido:", error);
        res.status(500).json({ message: "Erro ao processar o pedido." });
    }
});


app.get("/buscapedidos", async (req, res) => {
    try {
        // Busca todos os itens na tabela 'itens'
        const pedidos = await Pedido.findAll();
        console.log("Pedidos:", pedidos);

        // Envia os produtos como JSON na resposta
        res.status(200).json(pedidos);
    } catch (err) {
        console.error("Erro ao buscar pedidos:", err);
        res.status(500).send("Erro ao buscar pedidos.");
    }
});


app.get("/buscaitenspedido", async(req, res) =>{
    try {
        const itensDoPedido = await ItensDoPedido.findAll();
        console.log("Itens:", itensDoPedido)
        res.status(200).json(itensDoPedido)
    } catch (error) {
        console.error("Erro ao buscar itens dos pedidos", error)
        res.status(500).send("Erro ao buscar itens dos pedidos")
    }
})

app.get("/busca_cada_item", async(req, res) =>{{
    try {
        const itensCadaPedido = await Itens.findAll();
        console.log("Cada item", itensCadaPedido)
        res.status(200).json(itensCadaPedido)
    } catch (error) {
        console.log("Erro ao buscar itens", error)
        res.status(500).send("Erro ao buscar itens")
    }
}})

// Alterar o endpoint para /atualizar-item
app.post('/atualizar-item', async (req, res) => {
    const { numPedido, novoStatus } = req.body;

    console.log('Dados recebidos:', req.body); // Para debug

    try {
        // Verifica se o pedido existe antes de tentar atualizar
        const pedido = await Pedido.findOne({ where: { id_pedido: numPedido } });

        if (!pedido) {
            return res.status(404).json({ message: "Pedido não encontrado" });
        }

        // Atualiza o status do pedido
        await Pedido.update(
            { status: novoStatus },
            { where: { id_pedido: numPedido } }
        );

        res.json({ success: true, message: "Pedido atualizado com sucesso!" });

    } catch (error) {
        console.error("Erro ao atualizar pedido:", error);
        res.status(500).json({ message: "Erro interno no servidor" });
    }
});


// Sincroniza o modelo com o banco de dados
db.sequelize.sync({alter: true})
.then(() => {
    console.log("Modelo sincronizado com sucesso.");
})
.catch(err => {
    console.error("Erro ao sincronizar o modelo: ", err);
});


// Iniciando o servidor
app.listen(port, () => {
    console.log("Servidor rodando na porta", port);
});