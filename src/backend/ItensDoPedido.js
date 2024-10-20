const Sequelize = require('sequelize');
const db = require('../backend/db'); // Certifique-se de que o caminho está correto

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
      model: 'pedidos', // Nome da tabela de pedidos
      key: 'id_pedido'  // Chave primária na tabela de pedidos
    }
  },
  id_produto: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'produtos', // Nome da tabela de produtos
      key: 'id_produto'  // Chave primária na tabela de produtos
    }
  },
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  preco_unitario: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  }
});

// Sincroniza o modelo com o banco de dados
ItensDoPedido.sync({ force: false }) // `force: false` impede que a tabela seja recriada se já existir
  .then(() => {
    console.log("Tabela 'itens_do_pedido' sincronizada com sucesso");
  })
  .catch((err) => {
    console.error("Erro ao sincronizar a tabela 'itens_do_pedido':", err);
  });

module.exports = ItensDoPedido;
