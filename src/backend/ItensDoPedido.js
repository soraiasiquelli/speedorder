// modelo/ItensDoPedido.js
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
    allowNull: false,
    references: {
      model: 'mesas',
      key: 'id_mesa'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
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
  // Um item pertence a um pedido
  ItensDoPedido.belongsTo(models.Pedidos, {
    foreignKey: 'id_pedido',  // Chave estrangeira no modelo 'ItensDoPedido'
    as: 'pedido'              // Nome do relacionamento
  });
};

// Sincroniza o modelo com o banco de dados
ItensDoPedido.sync({ alter: true })
  .then(() => {
    console.log("Tabela 'itens_do_pedido' criada ou sincronizada com sucesso");
  })
  .catch((err) => {
    console.error("Erro ao sincronizar a tabela 'itens_do_pedido':", err);
  });

module.exports = ItensDoPedido;
