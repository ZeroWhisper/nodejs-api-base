readme: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

# Project Backend

### Fonts

- https://www.robinwieruch.de/graphql-apollo-server-tutorial (excellent)
- https://www.apollographql.com/docs/apollo-server/essentials/server/
- https://teamtreehouse.com/library/install-and-use-sequelize-cli
- Associate: https://codeburst.io/sequelize-migrations-setting-up-associations-985d29b61ee7
- From database (Not tested yet) https://www.npmjs.com/package/sequelize-auto-v2
- With already exists models https://stackoverflow.com/questions/27835801/how-to-auto-generate-migrations-with-sequelize-cli-from-sequelize-models
- https://medium.com/@rogeriothe_48115/relacionamentos-com-sequelize-guia-final-2b3baf21b2a1

Babel
- https://medium.com/@alberto.schiabel/nodejs-in-es6-es7-how-do-you-do-it-in-production-d897c51c729c

### Inicializando o projeto

Crie a pasta e inicie o projeto

`mkdir project && cd project && yarn init -y`

### Instalando dependencias

```sh
yarn add express

yarn add sequelize

yarn add pg pg-hstore

yarn add apollo-server apollo-server-express graphql

yarn add cors
```

### Aux Packages

```sh
yarn add -D @babel/core @babel/cli @babel/preset-env @babel/node

yarn add -D sequelize-cli
```

### Comandos Sequelize

## Database

# Se você não tem a database ainda (Cria com base na configuração de conexão)

`yarn sequelize db:create`

# Migrando os dados de outra forma

`npx sequelize-cli db:migrate --url 'mysql://root:password@mysql_host.com/database_name'`

## Model

# Cria novo model (This can be overwritten later with --f flag.)

- O comando gera tanto o model quanto o migration
- Font: https://sequelize.org/master/manual/migrations.html
  `yarn sequelize model:create --name student --attributes firstName:string,email:string`
  `yarn sequelize model:create --name user --attributes name:string,email:string,password_hash:string`

Obs: Note que não há espaço entre os parametros depois de `--attributes`

## Migrate

# Cria um novo migrate (Gera apenas a Migration)

`yarn sequelize migration:create --name=create-users`

# Exporta um migrate para o banco de dados

`yarn sequelize db:migrate`

# Desfaz a ultima exportação

`yarn sequelize db:migrate:undo`

# Desfaz tudo

`yarn sequelize db:migrate:undo:all`
