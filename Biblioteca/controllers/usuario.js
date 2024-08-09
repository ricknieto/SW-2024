'use strict'

let Usuario = require('../models/usuario')

let crearUsuario = function(req, res) {const body = req.body;
    // console.log({body});

    let usuarioDAO = new Usuario()
    usuarioDAO.nombre = body.nombre;
    usuarioDAO.correo = body.correo;
    usuarioDAO.telefono = body.telefono;
    usuarioDAO.libros = body.libros;

    // console.log(libroDAO);

    usuarioDAO.save()
        .then(usuario => {
            return res.status(200).send({usuario});
        })
        .catch(err => {
            return res.status(500).send({err});
        });

    // return res.status(200).send({message: "crearUsuario"});
}

let leerUsuarios = function(req, res) {

    Usuario.find({})
        .then(
            usuarios =>{
                console.log({usuarios});
                return res.status(200).send({usuarios});
            }
        )
        .catch(
            err => {
                // throw err
                return res.status(404).send({message: "No se encontraron libros"});
            }
        );
    

    // return res.status(200).send({message: "leerUsuarios"});
}

let leerUsuario = function(req, res) {

    console.log({params: req.params});

    let correo = req.params.correo;

    Usuario.findOne({correo: correo})
        .then(usuario => {
            console.log({usuario});

            if(usuario == null){
                return res.status(404).send({error: "No se encontro usuario"});
            } else{
                return res.status(200).send(usuario);
            }
        })
        .catch(err => {
            return res.status(404).send({error: "No se encontro usuario"});
        });

    // return res.status(200).send({message: "leerUsuario", correo});

}

let actualizarUsuario = function(req, res) {
    let id = req.params.id;

    console.log({id});
    
    Usuario.findById(id)
        .then(
            usuario =>{
                console.log({usuario});
                
                if(req.body.nombre != undefined){
                    usuario.nombre = req.body.nombre;
                }
                
                if(req.body.correo != undefined){
                    usuario.correo = req.body.correo;
                }
                
                if(req.body.telefono != undefined){
                    usuario.telefono = req.body.telefono;
                }
                
                if(req.body.libros != undefined){
                    usuario.libros = req.body.libros;
                }
                
                usuario.save()
                    .then(usuario => {
                        return res.status(200).send({usuario});
                    })
                    .catch(err => {
                        return res.status(500).send({message: "No se pudo actualizar usuario"});
                    });
            }
        )
        .catch(
            err => {
                // throw err
                return res.status(404).send({message: "No se encontraron usuarios"});
            }
        );
    // return res.status(200).send({message: "actualizarUsuario"});
}

var eliminarUsuario = function(req, res) {

    let id = req.params.id;
    
    Usuario.findById(id)
        .then(
            usuario =>{
                console.log({usuario});
                
                usuario.delete()
                    .then(succes => {
                        return res.status(200).send({message: "Usuario eliminado"});
                    })
                    .catch(err => {
                        return res.status(500).send({message: "No se pudo eliminar usuario"});
                    });
            }
        )
        .catch(
            err => {
                // throw err
                return res.status(404).send({message: "No se encontraron libros"});
            }
        );

    // return res.status(200).send({message: "eliminarUsuario"});
}

module.exports = {
    crearUsuario,
    leerUsuarios,
    leerUsuario,
    actualizarUsuario,
    eliminarUsuario
}