const express = require("express");

const app = express();

// middleware
app.use(express.json())

// app.get("/", (req, res) => {
//     // return res.send("Hello world");
//     // return res.json({ message: "Hello world ignite!" });
//     return res.json({ message: "Hello world ignite - fundamentos nodejs!" });
// })

/**
 * GET - Buscar uma informação dentro do servidor
 * POST - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATCH - Alterar uma informação especifica
 * DELETE - Deletar uma informação no servidor
 */

/**
 * Tipos de parametros
 * Routes Params => Identificar um recurso/deletar/buscar
 * Query Params => Paginação / Filtro
 * Body Params => Os objetos inserção/alteração (JSON)
 */

app.get("/courses", (req, res) => {
    const query = req.query;
    console.log(query);
    return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (req, res) => {
    const body = req.body;
    console.log(body);
    return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);
    return res.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (req, res) => {
    return res.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (req, res) => {
    return res.json(["Curso 6", "Curso 7", "Curso 4"]);
});

// abre a porta ex: localhost:3000
app.listen(3333);