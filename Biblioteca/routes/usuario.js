const express = require('express');
const router = express.Router();

var Usuario = require('../controllers/usuario');

router.post("/pedro/clase/crear-usuario", Usuario.crearUsuario);
router.get("/pedro/clase/leer-usuarios", Usuario.leerUsuarios);
router.get("/pedro/clase/leer-usuario/:correo", Usuario.leerUsuario);
router.put("/pedro/clase/actualizar-usuario/:id", Usuario.actualizarUsuario);
router.delete("/pedro/clase/eliminar-usuario/:id", Usuario.eliminarUsuario);

module.exports = router;