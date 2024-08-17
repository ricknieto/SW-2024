'use strict';

let Usuario = require('../Modelos/Usuario');

let crearUsuario = function(req, res) {
    const body = req.body;

    let usuarioDAO = new Usuario();
    usuarioDAO.nombre = body.nombre;
    usuarioDAO.correo = body.correo;
    usuarioDAO.telefono = body.telefono;

    usuarioDAO.save()
        .then(usuario => {
            return res.status(200).send({ usuario });
        })
        .catch(err => {
            return res.status(500).send({ err });
        });
}

let leerUsuarios = function(req, res) {
    Usuario.find({})
        .then(usuarios => {
            return res.status(200).send({ usuarios });
        })
        .catch(err => {
            return res.status(404).send({ message: "No se encontraron usuarios" });
        });
}

let leerUsuario = function(req, res) {
    let correo = req.params.correo;

    Usuario.findOne({ correo: correo })
        .then(usuario => {
            if (usuario == null) {
                return res.status(404).send({ error: "No se encontró usuario" });
            } else {
                return res.status(200).send(usuario);
            }
        })
        .catch(err => {
            return res.status(404).send({ error: "No se encontró usuario" });
        });
}

let actualizarUsuario = function(req, res) {
    let id = req.params.id;

    Usuario.findById(id)
        .then(usuario => {
            if (req.body.nombre != undefined) {
                usuario.nombre = req.body.nombre;
            }
            if (req.body.correo != undefined) {
                usuario.correo = req.body.correo;
            }
            if (req.body.telefono != undefined) {
                usuario.telefono = req.body.telefono;
            }

            usuario.save()
                .then(usuario => {
                    return res.status(200).send({ usuario });
                })
                .catch(err => {
                    return res.status(500).send({ message: "No se pudo actualizar usuario" });
                });
        })
        .catch(err => {
            return res.status(404).send({ message: "No se encontró el usuario" });
        });
}

let eliminarUsuario = function(req, res) {
    let id = req.params.id;

    Usuario.findById(id)
        .then(usuario => {
            usuario.deleteOne() // Cambiado de delete a remove
                .then(success => {
                    return res.status(200).send({ message: "Usuario eliminado" });
                })
                .catch(err => {
                    return res.status(500).send({ message: "No se pudo eliminar usuario" });
                });
        })
        .catch(err => {
            return res.status(404).send({ message: "No se encontró el usuario" });
        });
}

module.exports = {
    crearUsuario,
    leerUsuarios,
    leerUsuario,
    actualizarUsuario,
    eliminarUsuario
};
