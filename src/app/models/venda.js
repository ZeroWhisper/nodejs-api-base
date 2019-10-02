'use strict';
module.exports = (sequelize, DataTypes) => {
  const venda = sequelize.define('venda', {
    userId: DataTypes.INTEGER,
    produtoId: DataTypes.INTEGER
  }, {});
  venda.associate = function(models) {
    // associations can be defined here
  };
  return venda;
};