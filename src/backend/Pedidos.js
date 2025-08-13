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
  id_mesa: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  id_cliente: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'clientes',
      key: 'id_cliente'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  data_pedido: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  status: {
    type: Sequelize.ENUM('pendente', 'em andamento', 'pronto', 'entregue'),
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
  },

  // Novo campo
  tipo_entrega: {
    type: Sequelize.ENUM('Agora', 'Viagem', 'Agendar'),
    allowNull: false
  },
  data_agendada: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  hora_agendada: {
    type: Sequelize.TIME,
    allowNull: true
  }

}, {
  timestamps: false
});

Pedidos.associate = (models) => {
  Pedidos.hasMany(models.ItensDoPedido, {
    foreignKey: 'id_pedido',
    as: 'itens'
  });
};

Pedidos.sync({ alter: true })
  .then(() => {
    console.log("Tabela 'pedidos' alterada com sucesso");
  })
  .catch((err) => {
    console.error("Erro ao alterar a tabela 'pedidos':", err);
  });

module.exports = Pedidos;
