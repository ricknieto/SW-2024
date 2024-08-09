'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PrestamoModelo = Schema({
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    libro: String,
    fechaPrestamo: Date,
    fechaDevolucion: Date
});

module.exports = mongoose.model("Prestamo", PrestamoModelo);