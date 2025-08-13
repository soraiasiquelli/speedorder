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
  id_mesa: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'mesas',
      key: 'id_mesa'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  id_cliente: {   // <-- aqui está o campo novo
    type: Sequelize.INTEGER,
    allowNull: true,  // ou false, conforme regra de negócio
    references: {
      model: 'clientes',  // nome da tabela/modelo cliente no seu banco
      key: 'id_cliente'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL' // ou CASCADE, RESTRICT, conforme necessidade
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
  tableName: 'itens_do_pedido',
});

// Definindo a associação com Pedidos
ItensDoPedido.associate = (models) => {
  ItensDoPedido.belongsTo(models.Pedidos, {
    foreignKey: 'id_pedido',
    as: 'pedido'
  });
  // Se quiser, pode adicionar associação com Clientes
  ItensDoPedido.belongsTo(models.Clientes, {
    foreignKey: 'id_cliente',
    as: 'cliente'
  });
};

ItensDoPedido.sync({ alter: true })
  .then(() => {
    console.log("Tabela 'itens_do_pedido' criada ou sincronizada com sucesso");
  })
  .catch((err) => {
    console.error("Erro ao sincronizar a tabela 'itens_do_pedido':", err);
  });

module.exports = ItensDoPedido;
