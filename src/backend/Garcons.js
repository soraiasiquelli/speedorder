const Sequelize = require('sequelize');
const db = require('./db');

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
    allowNull: true,
    validate: {
      isEmail: true  // Validação para garantir que seja um email válido
    }
  },
  data_contratacao: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  admin_id: { // Referência para o administrador
    type: Sequelize.INTEGER,
    references: {
      model: 'administradores',
      key: 'id_administrador'
    }
  },
  estabelecimento_id: { // Referência para o estabelecimento
    type: Sequelize.INTEGER,
    references: {
      model: 'estabelecimentos',
      key: 'id_estabelecimento'
    }
  }
}, {
  timestamps: true  // Adiciona automaticamente `createdAt` e `updatedAt`
});


// Sincronizando o modelo com o banco de dados
db.sequelize.sync({ force: true }) // force: true irá recriar a tabela
  .then(() => {
    console.log("Tabela Garcons sincronizada com sucesso.");
  })
  .catch(err => {
    console.error("Erro ao sincronizar a tabela Garcons:", err);
  });


module.exports = Garcons;
