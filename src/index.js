import express from 'express';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import { GraphQLSchema } from 'graphql';

import dotenv from 'dotenv';
dotenv.config();

import models from '~/app/models';

const isDevelop = process.env.NODE_ENV === 'dev';

var options = {
  // exclude: ['Users']
};

// models['user'].graphql = {
//   attributes: {
//     exclude: ['description'],
//     include: { modelPortfolioId: 'int', obj: 'myObj' }
//   }
// };

// Font: https://www.npmjs.com/package/sequelize-graphql-schema
const { generateSchema } = require('sequelize-graphql-schema')(options);

const port = isDevelop ? process.env.PORT : 80;
const app = express();
app.use(cors());
// app.use(cors({ origin: "http://mysite.com" }));

app.get('/', (req, res) => {
  res.send({ status: 'ok' });
});

// console.log('DEV?', process.env.NODE_ENV);

app.use(
  '/graphql',
  graphqlHTTP({
    schema: new GraphQLSchema(generateSchema(models)),
    graphiql: isDevelop
  })
);

app.listen({ port }, () => {
  console.log(`Graphql on http://localhost:${port}/graphql`);
  console.log(`Server on http://localhost:${port}/api`);
});
