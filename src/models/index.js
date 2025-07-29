// models/index.js
const Itens = require('../backend/Itens');
const Pedidos = require('../backend/Pedidos');
const ItensDoPedido = require('../backend/ItensDoPedido');

ItensDoPedido.belongsTo(Pedidos, { foreignKey: 'id_pedido', as: 'pedido' });
Pedidos.hasMany(ItensDoPedido, { foreignKey: 'id_pedido', as: 'itens' });

module.exports = {
  Itens,
  Pedidos,
  ItensDoPedido,
};
