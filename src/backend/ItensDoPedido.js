const Sequelize = require('sequelize');
const db = require('./db');

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
    }
  },
  id_produto: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'produtos',
      key: 'id_produto'
    }
  },
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  preco_unitario: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  admin_id: {  // Referência para o administrador
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
});

module.exports = ItensDoPedido;
