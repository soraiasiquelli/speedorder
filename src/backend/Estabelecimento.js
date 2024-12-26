const { DataTypes } = require('sequelize');
const db = require('./db');
const Administrador = require('./Administrador'); // Importando o modelo Administrador

const Estabelecimento = db.sequelize.define('estabelecimento', {
    id_estabelecimento:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_admin:{
        references:{
            model: 'administradores',
            key: "id_administrador"
        },
        type: DataTypes.INTEGER,
        allowNull: false, //deixar ser nulo por enquanto 
    },
    nomeEstabelecimento:{
        type: DataTypes.STRING,
        allowNull: false, //não aceita valor nulo
    },
    endereco:{
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'estabelecimentos',
    timestamps: false,
});

// Relacionamento - Estabelecimento pertence a um Administrador
Estabelecimento.belongsTo(Administrador, { foreignKey: 'id_admin' });
Administrador.hasMany(Estabelecimento, { foreignKey: 'id_admin' });

db.sequelize.sync({})
.then(() => {
    console.log("Modelo sincronizado com sucesso.");
})
.catch(err => {
    console.error("Erro ao sincronizar o modelo: ", err);
});


module.exports = Estabelecimento;
