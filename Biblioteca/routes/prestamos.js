const express = require('express');
const router = express.Router();

var Prestamo = require('../controllers/prestamo');

router.post("/pedro/clase/crear-prestamo", Prestamo.crearPrestamo);
router.get("/pedro/clase/leer-prestamos", Prestamo.leerPrestamos);
router.get("/pedro/clase/leer-prestamo/:id", Prestamo.leerPrestamo);
router.put("/pedro/clase/actualizar-prestamo/:id", Prestamo.actualizarPrestamo);
router.delete("/pedro/clase/eliminar-prestamo/:id", Prestamo.eliminarPrestamo);

module.exports = router;