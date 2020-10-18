const express = require("express");
//const bodyParser = require("body-parser")
const app = express();

//rotas
const index = require("./routes/index");
const funcionarios = require("./routes/funcionariosRoutes");
const livros = require("./routes/livrosRoutes");

app.use(express.json());


app.use("/", index);
app.use("/funcionarios", funcionarios);
app.use("/livros", livros)

module.exports = app