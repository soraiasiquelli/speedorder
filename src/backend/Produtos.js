const Sequelize = require('sequelize')
const db = require('../backend/db')

const Produtos = db.sequelize.define("produtos", {
    id_produto: {
      type: db.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_estabelecimento: {
      type: db.Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'estabelecimentos', // Nome da tabela de estabelecimentos
        key: 'id_estabelecimento'  // Chave primária na tabela de estabelecimentos
      }
    },
    nome_produto: {
      type: db.Sequelize.STRING,
      allowNull: false
    },
    descricao: {
      type: db.Sequelize.STRING,
      allowNull: true
    },
    preco: {
      type: db.Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    categoria: {
      type: db.Sequelize.ENUM("hamburguer", "pizza", "bebida", "sobremesa"),
      allowNull: false
    },
    disponibilidade: {
      type: db.Sequelize.ENUM("disponível", "indisponível"),
      allowNull: false,
      defaultValue: "disponível"
    }
  });
  
  // Sincroniza o modelo com o banco de dados
  Produtos.sync({ force: false })
    .then(() =>{
    console.log("Tabela 'produtos' sincronizada com sucesso")
})
.catch((err) => {
    console.log("Tabela 'produtos' não sincronizada")
})
  module.exports = Produtos;
  