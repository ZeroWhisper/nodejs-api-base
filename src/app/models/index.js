const Sequelize = require('sequelize');
const { extname } = require('path');
const generators = require('require-dir')(null, {
  filter: item => {
    // Por padrão, o index.js não é carregado
    if (extname(item) === '.js') return item;
  }
});

const { url, options } = require('../../config');

const sequelize = new Sequelize(url, options);

const db = {};

const relations = {
  venda: [
    {
      relation: 'belongsTo',
      table: 'user',
      options: {}
    },
    {
      relation: 'belongsTo',
      table: 'produto',
      options: {}
    }
  ]
};

Object.keys(generators).forEach(name => {
  const model = generators[name](sequelize, Sequelize.DataTypes);
  db[name] = model;
});

// Object.keys(db).forEach(name => {
//   // If you have configured on own model
//   if (db[name].associate) {
//     db[name].associate(db);
//   }
// });

Object.keys(db).forEach(name => {
  const model = db[name];
  Object.keys(relations).forEach(rel => {
    if (name === rel) {
      relations[rel].forEach(item => {
        const { relation, table, options } = item;
        model[relation](db[table], options || {});
      });
    }
  });
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
