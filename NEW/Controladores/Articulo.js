'use strict';

let Articulo = require('../Modelos/Articulo');

let crearArticulo = function(req, res) {
    const body = req.body;

    let articuloDAO = new Articulo();
    articuloDAO.nombre = body.nombre;
    articuloDAO.descripcion = body.descripcion; // Ajuste aquí
    articuloDAO.cantidad = body.cantidad; // Ajuste aquí

    articuloDAO.save()
        .then(articulo => {
            return res.status(200).send({ articulo });
        })
        .catch(err => {
            return res.status(500).send({ err });
        });
}

let leerArticulos = function(req, res) {
    Articulo.find({})
        .then(articulos => {
            return res.status(200).send({ articulos });
        })
        .catch(err => {
            return res.status(404).send({ message: "No se encontraron articulos" });
        });
}

let leerArticulo = function(req, res) {
    let id = req.params.id; // Cambiado a id ya que buscas por id

    Articulo.findById(id)
        .then(articulo => {
            if (articulo == null) {
                return res.status(404).send({ error: "No se encontró articulo" });
            } else {
                return res.status(200).send(articulo);
            }
        })
        .catch(err => {
            return res.status(404).send({ error: "No se encontró articulo" });
        });
}

let actualizarArticulo = function(req, res) {
    let id = req.params.id;

    Articulo.findById(id)
        .then(articulo => {
            if (req.body.nombre != undefined) {
                articulo.nombre = req.body.nombre;
            }
            if (req.body.descripcion != undefined) {
                articulo.descripcion = req.body.descripcion;
            }
            if (req.body.cantidad != undefined) {
                articulo.cantidad = req.body.cantidad;
            }

            articulo.save()
                .then(articulo => {
                    return res.status(200).send({ articulo });
                })
                .catch(err => {
                    return res.status(500).send({ message: "No se pudo actualizar articulo" });
                });
        })
        .catch(err => {
            return res.status(404).send({ message: "No se encontró el articulo" });
        });
}

let eliminarArticulo = function(req, res) {
    let id = req.params.id;

    Articulo.findById(id)
        .then(articulo => {
            articulo.deleteOne() // Cambiado de delete a remove
                .then(success => {
                    return res.status(200).send({ message: "Articulo eliminado" });
                })
                .catch(err => {
                    return res.status(500).send({ message: "No se pudo eliminar articulo" });
                });
        })
        .catch(err => {
            return res.status(404).send({ message: "No se encontró el articulo" });
        });
}

module.exports = {
    crearArticulo,
    leerArticulos,
    leerArticulo,
    actualizarArticulo,
    eliminarArticulo
};
