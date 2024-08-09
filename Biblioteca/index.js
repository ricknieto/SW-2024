'use strict'

const bodyParser = require("body-parser");
let app = require('express')();

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

let mongoose = require('mongoose');

let Libro = require('./models/libro');

let Usuario = require('./routes/usuario')

let puerto = 3001;

mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/servicios-web")
    .then(
        data => {
            console.log("La conexion a la base de datos funciona ...");
			
            app.listen(puerto, () => {
                // console.log(`Escuchando en puerto ${puerto}`)
                console.log('Escuchando en puerto ' + puerto);
            });
        }
    )
    .catch(
        err => {
            if(err){
                throw err;
            }
    });

app.post('/pedro/clase/registrar-libro', (req, res) => {
    // console.log('registrar-libro');

    const body = req.body;
    // console.log({body});

    let libroDAO = new Libro()
    libroDAO.titulo = body.titulo;
    libroDAO.autor = body.autor;
    libroDAO.fecha = Date();
    libroDAO.codigo = body.codigo;

    // console.log(libroDAO);

    libroDAO.save()
        .then(libro => {
            return res.status(200).send({libro});
        })
        .catch(err => {
            return res.status(500).send({err});
        });

    // res.status(200).send({message: 'registrar-libro'});
});

app.get('/pedro/clase/leer-libros', (req, res) => {

    let body = req.body;

    console.log(body);

    Libro.find({})
        .then(
            libros =>{
                console.log({libros});
                return res.status(200).send({libros});
            }
        )
        .catch(
            err => {
                // throw err
                return res.status(404).send({message: "No se encontraron libros"});
            }
        );
    
});

app.use('/pedro/clase/usuario', Usuario);
