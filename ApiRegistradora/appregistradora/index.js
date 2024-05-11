const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = 3000;

// parse JSON con express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//var db = require("./db.js");
// mostrar formulario para agregar producto
app.get("/index", (req, res) => {
  res.render("index");
});
// mostrar catalogo
app.get("/mostrar_db", (req, res) => {
  const db = require("./db.js");
  res.json(db);
});

//mostrar formulario para eliminar producto.
app.get("/eliminar", (req, res) => {
  res.render("eliminar");
});

// agregar producto
app.post("/guardar", (req, res, next) => {
  const { id, articulo, cantidad } = req.body;

  const productInfo = { id, articulo, cantidad };
  const catalogo = require("./db.js");
  console.log(productInfo);
  catalogo.push(productInfo);
  fs.writeFileSync(
    "./db.js",
    `module.exports = ${JSON.stringify(catalogo, null, 3)};`
  );
  res.send("Producto Agregado");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})