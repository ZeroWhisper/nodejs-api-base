Criar os Models e Migrations e depois atualizar o banco de dados

```
yarn sequelize model:create --name user --attributes name:string,email:string,password_hash:string
yarn sequelize model:create --name venda --attributes user:integer,produto:integer
yarn sequelize model:create --name produto --attributes name:string,valor:integer
yarn sequelize db:migrate

// OR

yarn sequelize model:create --name user --attributes name:string,email:string,password_hash:string &&
yarn sequelize model:create --name venda --attributes user:integer,produto:integer &&
yarn sequelize model:create --name produto --attributes name:string,valor:integer &&
yarn sequelize db:migrate

--
yarn sequelize model:create --name user --attributes name:string,email:string,password_hash:string &&
yarn sequelize model:create --name venda --attributes userId:integer,produtoId:integer &&
yarn sequelize model:create --name produto --attributes name:string,valor:integer &&
yarn sequelize db:migrate
```

Exemplo de insert:

```
mutation setUser($us: userInput) {
  userAdd(user: $us) {
    name
    id
  }
}
query getUser($of: Int) {
  userGet(offset: $of) {
    id
    name
  }
}

#variables {
#  "of": 0,
#  "us":{ "name": "marcos", "email": "marcos.devel@gmail.com" }
#}


```
