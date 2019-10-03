module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.dropAllTables();
  }
};
