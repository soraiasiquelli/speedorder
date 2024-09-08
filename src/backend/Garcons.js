const Sequelize = require('sequelize');
const db = require('../backend/db');

const Garcons = db.sequelize.define('garcons', {
  id_garcom: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true
  },
  data_contratacao: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

// Sincroniza o modelo com o banco de dados
Garcons.sync({ force: false })
  .then(() => {
    console.log("Tabela 'garcons' sincronizada com sucesso");
  })
  .catch((err) => {
    console.error("Erro ao sincronizar a tabela 'garcons':", err);
  });

module.exports = Garcons;
