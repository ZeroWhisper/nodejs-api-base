'use strict';
module.exports = (sequelize, DataTypes) => {
  const produto = sequelize.define('produto', {
    name: DataTypes.STRING,
    valor: DataTypes.INTEGER
  }, {});
  produto.associate = function(models) {
    // associations can be defined here
  };
  return produto;
};