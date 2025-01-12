const Sequelize = require('sequelize');
const db = require('../backend/db');

const Pedidos = db.sequelize.define('pedidos', {
  id_pedido: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_estabelecimento: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'estabelecimentos',
      key: 'id_estabelecimento'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  data_pedido: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  status: {
    type: Sequelize.ENUM('em andamento', 'pronto', 'entregue'),
    allowNull: false,
    defaultValue: 'em andamento'
  },
  total: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  forma_de_pagamento: {
    type: Sequelize.STRING(25),
    allowNull: false
  }
}, {
  timestamps: false // Desativa os campos createdAt e updatedAt
});

// Sincroniza o modelo com o banco de dados
Pedidos.sync({alter: true})
  .then(() => {
    console.log("Tabela 'pedidos' alterada com sucesso");
  })
  .catch((err) => {
    console.error("Erro ao alterar a tabela 'pedidos':", err);
  });



module.exports = Pedidos;



