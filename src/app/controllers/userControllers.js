const { User } = require('../models');

// Not used for GraphQL
module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    res.render('index', { users });
  }
};
