const Sequelize = require("sequelize");
const db = require("./db");

const Mesas = db.sequelize.define('mesas', {
  id_mesa: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  id_estabelecimento: {
    type: Sequelize.INTEGER,
    allowNull: false,
          references:{
            model: 'estabelecimentos',
            key: "id_estabelecimento"
          }
  },
   numero_da_mesa:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  capacidade: {
      type: Sequelize.INTEGER,
      allowNull: false
  },
  status: {
      type: Sequelize.ENUM("livre", "ocupada", "reservada"),
      allowNull: false,
      defaultValue: "livre"
  }
 
});

// Sincronizando o modelo com o banco de dados
Mesas.sync({alter: true })
  .then(() => console.log("Tabela 'mesas' sincronizada com sucesso."))
  .catch(err => console.error("Erro ao sincronizar a tabela 'mesas':", err));


module.exports = Mesas;
