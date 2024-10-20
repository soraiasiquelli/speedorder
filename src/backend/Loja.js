const { DataTypes } = require('sequelize');
const db = require('./db'); // Importando a configuração do banco de dados

const Estabelecimento = db.sequelize.define('loja', {
    id_loja: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome_estabelecimento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'loja', // Nome da tabela no banco de dados
    timestamps: false // Se você não está usando timestamps
});

module.exports = Estabelecimento;
