import express from 'express';
// import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import dotenv from 'dotenv';
dotenv.config();

import models from '~/app/models';

const isDevelop = process.env.NODE_ENV === 'dev';

var options = {
  // exclude: ['Users']
};

// Font: https://www.npmjs.com/package/sequelize-graphql-schema
const { generateSchema } = require('sequelize-graphql-schema')(options);

const app = express();
// app.use(cors());
// app.use(cors({ origin: "http://mysite.com" }));

app.get('/api', (req, res) => {
  res.send({ status: 'ok' });
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: new GraphQLSchema(generateSchema(models)),
    // graphiql: isDevelop
    graphiql: true
  })
);

const port = process.env.PORT || 80;

console.log('');
console.log('START ' + port);
console.log('');

app.listen(port, () => {
  if (true || isDevelop) {
    console.log(`Graphql on http://localhost:${port}/graphql`);
    console.log(`Server on http://localhost:${port}/api`);
  }
});
