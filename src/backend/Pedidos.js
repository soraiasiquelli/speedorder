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
    }
  },
  id_garcom: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'garcons',
      key: 'id_garcom'
    }
  },
  id_mesa: {
    type: Sequelize.INTEGER,
    allowNull: true, // Campo pode ser nulo para pedidos de delivery
    references: {
      model: 'mesas',
      key: 'id_mesa'
    }
  },
  data_pedido: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  status: {
    type: Sequelize.ENUM('em andamento', 'pronto', 'entregue'),
    allowNull: false,
    defaultValue: 'em andamento'
  }
});

// Sincroniza o modelo com o banco de dados
Pedidos.sync({ force: false })
  .then(() => {
    console.log("Tabela 'pedidos' sincronizada com sucesso");
  })
  .catch((err) => {
    console.error("Erro ao sincronizar a tabela 'pedidos':", err);
  });

module.exports = Pedidos;
