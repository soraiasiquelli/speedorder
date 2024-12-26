const { DataTypes } = require('sequelize');
const db = require('./db'); // Importando a configuração do banco de dados

const Estabelecimento = db.sequelize.define('loja', {
    id_estabelecimento: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome_estabelecimento: {
        type: DataTypes.STRING,
        allowNull: true
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    /*admin_id: { // Chave estrangeira para o administrador
        type: DataTypes.INTEGER,
        references: {
            model: 'administradores', // Nome da tabela de administradores
            key: 'id_administrador'   // Nome da chave primária do administrador
        },
        allowNull: false // Defina como obrigatório
    }
}, *//*{
    tableName: 'estabelecimentos', // Nome da tabela no banco de dados
    timestamps: false // Se você não está usando timestamps
*/} );
Estabelecimento.sync({ force: true }).then(() => {
    console.log("Tabela criada com sucesso!");
});



