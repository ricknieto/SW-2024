'use strict'

let app = require('express')();

let puerto = 3000;

app.listen(puerto, () => {
    // console.log(`Escuchando en puerto ${puerto}`)
    console.log('Escuchando en puerto ' + puerto);
});

app.get('/test', (req, res) => {
    res.send('TEST!');
});

app.get('/libro', (req, res) => {
    res.send(
        {
            libro: {
                titulo: "Libro",
                autor: "autor",
                fecha: "fecha",
                codigo: "000001"
            }
        }
    );
});

app.get('/usuario', (req, res) => {
    res.send(
        {
            usuario: {
                nombre: "Ricardo",
                correo: "rnieto@ucgdl.edu.mx",
                telefono: "11234567890",
                libros: []
            }
        }
    );
});