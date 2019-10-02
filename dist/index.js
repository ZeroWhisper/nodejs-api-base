"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _graphql = require("graphql");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import cors from 'cors';
console.log('START');

_dotenv["default"].config(); // import models from '~/app/models';


var isDevelop = process.env.NODE_ENV === 'dev';
var options = {// exclude: ['Users']
}; // Font: https://www.npmjs.com/package/sequelize-graphql-schema
// const { generateSchema } = require('sequelize-graphql-schema')(options);

var app = (0, _express["default"])(); // app.use(cors());
// app.use(cors({ origin: "http://mysite.com" }));

app.get('/api', function (req, res) {
  res.send({
    status: 'ok'
  });
}); // app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema: new GraphQLSchema(generateSchema(models)),
//     graphiql: isDevelop
//   })
// );

var port = process.env.PORT || 5000;
app.listen(port, function () {
  if (isDevelop) {
    console.log("Graphql on http://localhost:".concat(port, "/graphql"));
    console.log("Server on http://localhost:".concat(port, "/api"));
  }
});