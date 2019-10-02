// Must be in CommonJS
// const fs = require('fs');

const database_url =
  'postgres://cyqnmoyh:JMviPTBSLknl0IxNXMaAenkyzA9knVxO@motty.db.elephantsql.com:5432/cyqnmoyh';

const database = {
  development: {
    dialect: 'postgres',
    username: 'cyqnmoyh',
    password: 'JMviPTBSLknl0IxNXMaAenkyzA9knVxO',
    database: 'cyqnmoyh', // ou cyqnmoyh
    host: 'motty.db.elephantsql.com',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  },
  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        // ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
        ca: ''
      }
    }
  }
};

const options = {
  dialect: 'postgres'
  // define: {
  //   timestamps: true,
  //   underscored: true,
  //   underscoredAll: true
  // }
};

// Must be in CommonJS
module.exports = {
  // ...database.development,
  url: database_url,
  options
};
