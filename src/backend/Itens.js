const Sequelize = require("sequelize");
const db = require("./db");
const { type } = require("@testing-library/user-event/dist/type");

const Itens = db.sequelize.define('itens', {
    id_item: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_estabelecimento: {
        type: Sequelize.INTEGER,
        allowNull: false,
            refereces:{
                model: 'estabelecimentos',
                key: 'id_estabelecimento'
            }
    },
    nome_item: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    preco: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: true
    },
    imagem: {
        type: Sequelize.TEXT,
        allowNull: true
    },
});

// Sincronizando sem recriar a tabela
Itens.sync({alter: true}) //Apenas muda a estrutura da tabela
    .then(() => console.log("Tabela 'itens' sincronizada com sucesso."))
    .catch(err => console.error("Erro ao sincronizar a tabela 'itens':", err));

module.exports = Itens;
