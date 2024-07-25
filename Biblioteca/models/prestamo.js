'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let PrestamoModelo = Schema({
    fecha: Date,
    codigo_de_libro: String,
    fecha_de_entrega: Date,
    usuario: String,
    ultimo_prestamo: Date,
});


module.exports = mongoose.model("Prestamo", PrestamoModelo);


// class Prestamo{
//     fecha = "";
//     codigo_de_libro = "";
//     fecha_de_entrega = "";
//     usuario = "";
//     ultimo_prestamo = "";

//     constructor(fecha, codigo_de_libro, fecha_de_entrega, usuario, ultimo_prestamo) {
//         this.fecha = fecha;
//         this.codigo_de_libro = codigo_de_libro;
//         this.fecha_de_entrega = fecha_de_entrega;
//         this.usuario = usuario;
//         this.ultimo_prestamo = ultimo_prestamo;
//     }
// }

// module.exports = Prestamo