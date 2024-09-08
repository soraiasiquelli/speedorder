const Sequelize = require("sequelize");
const db = require("./db");

const Mesas = db.sequelize.define("mesas", {
    id_mesa: {
      type: db.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_estabelecimento: {
      type: db.Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'estabelecimentos',
        key: 'id_estabelecimento'
      }
    },
    numero_mesa: {
      type: db.Sequelize.INTEGER,
      allowNull: false
    },
    status: {
      type: db.Sequelize.ENUM("livre", "ocupada", "reservada"),
      allowNull: true,
      defaultValue: "livre"
    },
    capacidade: {
      type: db.Sequelize.INTEGER,
      allowNull: false
    }
});

// Sincroniza o modelo com o banco de dados
Mesas.sync({ alter: true })
  .then(() => {
    console.log("Tabela 'mesas' sincronizada com o campo 'capacidade'.");
  })
  .catch(err => {
    console.error("Erro ao sincronizar a tabela 'mesas': ", err);
  });

module.exports = Mesas;
