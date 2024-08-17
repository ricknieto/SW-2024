const express = require('express');
const router = express.Router();

var Articulo = require('../Controladores/Articulo');

router.post("/crear-articulo", Articulo.crearArticulo);
router.get("/leer-articulos", Articulo.leerArticulos);
router.get("/leer-articulo/:id", Articulo.leerArticulo);
router.put("/actualizar-articulo/:id", Articulo.actualizarArticulo);
router.delete("/eliminar-articulo/:id", Articulo.eliminarArticulo);

module.exports = router;