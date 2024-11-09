const Sequelize = require('sequelize');
const db = require('./db');

const Garcons = db.sequelize.define('garcons', {
  id: {
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
    allowNull: true,
    validate: {
      isEmail: true  // Validação para garantir que seja um email válido
    }
  },
  data_contratacao: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  timestamps: true  // Adiciona automaticamente `createdAt` e `updatedAt`
});

// Sincroniza o modelo com o banco de dados
Garcons.sync({ force: true }) // CUIDADO: Isso recria a tabela e apaga os dados existentes
  .then(() => {
    console.log("Tabela 'garcons' recriada e sincronizada.");
  })
  .catch((err) => {
    console.error("Erro ao sincronizar a tabela 'garcons':", err);
  });

module.exports = Garcons;
