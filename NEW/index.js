'use strict'

const bodyParser = require("body-parser");
let app = require('express')();

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

let mongoose = require('mongoose');

let Articulos = require('./Rutas/Articulo');

let Usuarios = require('./Rutas/Usuario')

let puerto = 3006;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/servicios-web-proyecto-JoseLuis")
    .then(
        data => {
            console.log("La conexion a la base de datos funciona ...");
			
            app.listen(puerto, () => {
                console.log('Escuchando en puerto ' + puerto);
            });
        }
    )
    .catch(
        err => {
            if (err) {
                throw err;
            }
    });

app.use('/ricardo/proyecto/usuarios', Usuarios);
app.use('/ricardo/proyecto/articulos', Articulos);

