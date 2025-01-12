// models/Administrador.js
const { DataTypes } = require('sequelize');
const db = require('./db'); // Importando a configuração do banco de dados

const Administrador = db.sequelize.define('administrador', {
  id_administrador: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true, // Pode ser nulo, se não for obrigatório
  },
}, {
  tableName: 'administradores', // Nome da tabela no banco de dados
  timestamps: false, // Se você não está usando timestamps
});

// Sincronizar o modelo com o banco de dados
db.sequelize.sync({alter: true}).then(() => {
  console.log("Modelo atualizado.");
}).catch(err => {
  console.error("Erro ao atualizar o modelo:", err);
});


module.exports = Administrador;
