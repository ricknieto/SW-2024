'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UsuarioModelo = Schema({
    nombre: String,
    correo: String,
    telefono: String,
    libros: []
});

module.exports = mongoose.model("Usuario", UsuarioModelo);