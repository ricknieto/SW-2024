'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let ArticuloModelo = Schema({
    nombre: String,
    descripcion: String,
    cantidad: String,
});


module.exports = mongoose.model("Articulo", ArticuloModelo);