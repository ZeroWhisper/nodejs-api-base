// Must be in CommonJS
require('dotenv').config();

const url = process.env.DATABASE_URL;

const options = {
  dialect: 'postgres'
};

// Must be in CommonJS
module.exports = {
  url,
  options
};
