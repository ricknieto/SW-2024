const express = require('express');
const router = express.Router();

var Usuario = require('../controllers/usuario')

router.post("/crear-usuario", Usuario.crearUsuario);
router.get("/leer-usuarios", Usuario.leerUsuarios);
router.get("/leer-usuario/:correo", Usuario.leerUsuario);
router.put("/actualizar-usuario/:id", Usuario.actualizarUsuario);
router.delete("/eliminar-usuario/:id", Usuario.eliminarUsuario);

module.exports = router;