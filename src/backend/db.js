const Sequelize = require('sequelize');

const sequelize = new Sequelize('bd_speedorder', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

const db = {
    sequelize,
    Sequelize,
};

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

    //force: false
db.sequelize.sync({ alter: true })
  .then(() => {
    console.log("Tabelas sincronizadas com sucesso.");
  })
  .catch(err => {
    console.error("Erro ao sincronizar tabelas:", err);
  });

module.exports = db;
