const express = require('express');
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3002;


// Acceder a las variables de entorno
const con = mysql.createConnection({
 host: process.env.DB_HOST,
 user: process.env.DB_USER,
 password: process.env.DB_PASSWORD,
 database: process.env.DB_NAME,
 //port: process.env.DB_PORT,
});

//get usuarios
app.get("/", (req, res) => {
    let sql ="SELECT * FROM useri2";
    con.query(sql, (error, result) => {
        if(error){
            res.status(500).json({ error });
        }else{
            res.status(200).json(result);
        }
    });
});

//Get un solo usuario

app.get("/user/:id", (req, res) => {
    let id = res.params.id;
    let sql = "SELECT * FROM useri2 WHERE id = ${id}";
    con.query(sql, (error, result) => {
        if(error) {
            res.status(500).json({ error });
        }else {
            res.status(200).json(result);
        }
    });
});

// agregar usuario
app.post("/user", (req, res) => {
    const { nombres, apellidos, email, pass} = req.body;
    let sql = `INSERT INTO useri2 (nombres, apellidos, email, pass) VALUES ("${nombres}","${apellidos}","${email}","${pass}")`;
    con.query(sql, (error, result) => {
        if(error) {
            res.status(500).json({ error });
        }else {
            res
                .status(201)
                .json({ message: "El usuario se ha creado", id: result.insertId});
        }
    });
});

//update user
app.put("/user/:id", (req, res) => {
    let id = req.params.id;
    const { nombres, apellidos, email, pass} = req.body;
    let sql = `UPDATE useri2 SET nombres=?, apellidos=?, email=?, pass=? WHERE id=${id}`;
    con.query(sql, [nombres, apellidos, email, pass], (error, result) => {
        if(error) {
            res.status(500).json({ error });
        }else {
            res
                .status(200)
                .json({ message: "Usuario actualizado", id: id});
        }
    });
});

//borrar usuario
app.delete("/user/:id", (req, res) => {
    let id = req.params.id;
    let sql = `DELETE FROM useri2 WHERE id =${id}`;
    con.query(sql, (error, result) => {
        if(error) {
            res.status(500).json({ error });
        }else {
            res
                .status(200)
                .json({ message: "Usuario se eliminado", sucess:true});
        }
    });
});


app.listen(PORT);
