const Sequelize = require('sequelize');
const db = require('./db');

const Estabelecimento = db.sequelize.define("estabelecimentos", {
    id_estabelecimento: {
      type: db.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome_estabelecimento: { 
      type: db.Sequelize.STRING,
      allowNull: false
    },
    endereco: {
      type: db.Sequelize.STRING,
      allowNull: false
    },
    telefone: {
      type: db.Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: db.Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    licenca_ativa: {
      type: db.Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    data_criacao: {
      type: db.Sequelize.DATE,
      defaultValue: db.Sequelize.NOW
    }
  });
  
  
  module.exports = Estabelecimento;
  

// Sincroniza o modelo com o banco de dados
Estabelecimento.sync({ force: false })
    .then(() => {
        console.log("Tabela 'estabelecimentos' sincronizada.");
    })
    .catch(err => {
        console.error("Erro ao sincronizar a tabela 'estabelecimentos': ", err);
    });
