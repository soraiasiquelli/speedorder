const Sequelize = require('sequelize');
const db = require('./db');

const Administradores = db.sequelize.define("administradores", {
    id_administrador: {
      type: db.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: db.Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: db.Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    senha: {
      type: db.Sequelize.STRING,
      allowNull: false
    },
    telefone: {
      type: db.Sequelize.STRING,
      allowNull: true
    }
});

// Sincroniza o modelo com o banco de dados
/*Administradores.sync({ force: false })
.then(() => {
    console.log("Tabela 'administradores' sincronizada.");
})
.catch(err => {
    console.error("Erro ao sincronizar a tabela 'administradores': ", err);
});*/

module.exports = Administradores;
