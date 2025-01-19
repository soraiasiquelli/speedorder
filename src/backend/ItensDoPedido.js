const Sequelize = require('sequelize');
const db = require('../backend/db');

const ItensDoPedido = db.sequelize.define('itens_do_pedido', {
  id_item: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_pedido: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'pedidos',
      key: 'id_pedido'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  id_produto: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'itens',
      key: 'id_item'
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  id_estabelecimento: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'estabelecimentos',
      key: 'id_estabelecimento'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  id_mesa: { // Novo campo para associar à tabela 'mesas'
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'mesas', // Nome da tabela que contém as mesas
      key: 'id_mesa'  // Chave primária da tabela mesas
    },
    onUpdate: 'CASCADE', // Cascata de atualização
    onDelete: 'CASCADE' // Cascata de exclusão
  },
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  total_item: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'itens_do_pedido', // Nome da tabela no banco de dados
});

// Sincroniza o modelo com o banco de dados
ItensDoPedido.sync({ alter: true })
  .then(() => {
    console.log("Tabela 'itens_do_pedido' criada ou sincronizada com sucesso");
  })
  .catch((err) => {
    console.error("Erro ao sincronizar a tabela 'itens_do_pedido':", err);
  });

module.exports = ItensDoPedido;
