const express = require("express");

const app = express();

const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );

  // É possível passar informação para outras rotas
  req.varExemplo = "TESTE";

  return next();
};

// Forma de se usar um Middle para todas as rotas
// Em outras palavras. Configuração global do express.
app.use(logMiddleware);

app.get("/", (req, res) => {
  return res.send("OLA");
});

app.get("/login", (req, res) => {
  return res.send("OLA LOGIN");
});

// Exemplo com parametros GET/ Exemplo para localhost:3000/redir/?pasta=meus_videos
app.get("/redir", (req, res) => {
  return res.send(`Rediricionando para ${req.query.pasta}`);
});

// Exemplo com parametros/ Exemplo para localhost:3000/login/marcos
app.get("/login/:username", (req, res) => {
  return res.send(`Bem vindo! ${req.params.username}`);
});

// Exemplo localhost:3000/api/Marcos
app.get("/api/:username", (req, res) => {
  return res.json({
    message: `Bem vindo, ${req.params.username}`
  });
});

app.listen(3000);
