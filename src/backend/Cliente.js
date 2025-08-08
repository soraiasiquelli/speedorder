const Sequelize = require('sequelize');
const db = require('../backend/db');

const Cliente = db.sequelize.define('clientes', {
  id_cliente: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  telefone: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  email_institucional: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: true
  },
 id_estabelecimento: {
  type: Sequelize.INTEGER,
  allowNull: false,
  references: {
    model: 'estabelecimentos',
    key: 'id_estabelecimento'
  },
  onUpdate: 'CASCADE',
  onDelete: 'RESTRICT' // ou 'CASCADE', mas nunca 'SET NULL'
}

}, {
  timestamps: false
});

Cliente.sync({ alter: true })
  .then(() => {
    console.log("Tabela 'clientes' criada/alterada com sucesso");
  })
  .catch((err) => {
    console.error("Erro ao criar tabela 'clientes':", err);
  });

module.exports = Cliente;
