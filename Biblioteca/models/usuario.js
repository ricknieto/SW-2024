'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let UsuarioModelo = Schema({
    nombre: String,
    correo: String,
    telefono: Date,
    libros: String,
});


module.exports = mongoose.model("Usuario", UsuarioModelo);


// class Usuario{
//     nombre = "";
//     correo = "";
//     telefono = "";
//     libros = "";

//     constructor(nombre, correo, telefono, libros,) {
//         this.nombre = nombre;
//         this.correo = correo;
//         this.telefono = telefono;
//         this.libros = libros;
//     }
// }

// module.exports = Usuario