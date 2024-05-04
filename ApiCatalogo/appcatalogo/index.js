const express = require('express')
const app = express()
const port = 3000
//cargamos el motor
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', { title: 'Motor', message: 'Hola desde el motor' })
  })

//link al db.js 
let db = require('./db')
//cargar los datos al json
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//mostar la db usando middlleware
app.get('/db', (req, res) => {
  res.json(catalogo);
});

//agregar articulo
app.post('/db', (req, res) => {
    const articulo = req.body;
    catalogo.push(articulo);
    console.log(articulo);
    res.send("Articulo agregado");
});

//buscar articulo
app.get('/db/:id', (req, res) => {
    const id = req.params.id;
    for (let articulo of catalogo) {
        if(articulo.id === id){
            res.json(articulo);
            return;
        } 
    }
    res.status(404).send("articulo no enconterado");
});

//eliminar articulo
app.delete('/db/:id', (req, res) => {
    const id = req.params.id;
    catalogo = catalogo.filter((articulo)=> {
        if(articulo.id != id){
            return true;
        }
        return false;
    });
    res.send("articulo eliminado");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

