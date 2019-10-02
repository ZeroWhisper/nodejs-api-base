Depois de connectado

```
# Welcome to GraphiQL
#
# GraphiQL is an in-browser tool for writing, validating, and
# testing GraphQL queries.
#
# Type queries into this side of the screen, and you will see intelligent
# typeaheads aware of the current GraphQL type schema and live syntax and
# validation errors highlighted within the text.
#
# GraphQL queries typically start with a "{" character. Lines that starts
# with a # are ignored.
#
# An example GraphQL query might look like:
#
#     {
#       field(arg: "value") {
#         subField
#       }
#     }
#
# Keyboard shortcuts:
#
#  Prettify Query:  Shift-Ctrl-P (or press the prettify button above)
#
#     Merge Query:  Shift-Ctrl-M (or press the merge button above)
#
#       Run Query:  Ctrl-Enter (or press the play button above)
#
#   Auto Complete:  Ctrl-Space (or just start typing)
#

query getUser($us: Int) {
  userGet(offset: $us) {
    id
    name
  }
}

mutation setUser($user: userInput) {
  userAdd(user: $user) {
    name
    id
  }
}

mutation addProduto($pr: produtoInput) {
  produtoAdd(produto: $pr) {
    id
    name
    valor
  }
}

mutation addVenda($venda: vendaInput) {
  vendaAdd(venda: $venda) {
    user {
      name
      email
    }
    produto {
      name
      valor
    }
  }
}

query getVenda($limit: Int) {
  vendaGet(limit: $limit) {
    id
    user {
      name
      email
    }
    produto {
      name
      valor
    }
  }
}

query getVendaById($id: Int) {
  vendaGet(id: $id) {
    id
    produtoId
    produto {
      id
      name
      valor
    }
  }
}
```

```
# Variables
{
  "limit": 100,
  "id": 10,
  "user": { "name": "Marcos", "email": "marcos@gmail.com" },
  "pr": {
    "name": "CD", "valor": 100
  },
  "venda": {
    "userId": 1,
    "produtoId": 1
  }
}
```
