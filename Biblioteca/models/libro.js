'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let LibroModelo = Schema({
    titulo: String,
    autor: String,
    fecha: Date,
    codigo: String
});


module.exports = mongoose.model("Libro", LibroModelo);


// class Libro{
//     titulo = "";
//     autor = "";
//     fecha = "";
//     codigo = "";

//     constructor(titulo, autor, fecha, codigo) {
//         this.titulo = titulo;
//         this.autor = autor;
//         this.fecha = fecha;
//         this.codigo = codigo;
//     }
// }

// module.exports = Libro