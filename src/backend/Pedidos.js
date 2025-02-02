// modelo/Pedidos.js
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
  id_mesa:{
    type: Sequelize.INTEGER
  },
  data_pedido: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  status: {
    type: Sequelize.ENUM('pendente', "em andamento", 'pronto', 'entregue'),
    allowNull: false,
    defaultValue: 'pendente'
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

// Definindo a associação com ItensDoPedido
Pedidos.associate = (models) => {
  // Um pedido tem muitos itens do pedido
  Pedidos.hasMany(models.ItensDoPedido, {
    foreignKey: 'id_pedido',  // Chave estrangeira no modelo 'ItensDoPedido'
    as: 'itens'               // Nome do relacionamento
  });
};

// Sincroniza o modelo com o banco de dados
Pedidos.sync({alter: true})
  .then(() => {
    console.log("Tabela 'pedidos' alterada com sucesso");
  })
  .catch((err) => {
    console.error("Erro ao alterar a tabela 'pedidos':", err);
  });

module.exports = Pedidos;
