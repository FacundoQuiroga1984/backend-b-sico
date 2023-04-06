const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const query = req.query;// se puede desestructurar la query para obtener valores{q, name, page, limit, etc..}

    res.json({
        msg:'get api controlador',
        query// si se desestructura acá van los parametros de la desestructuración.
    })
}

const usuariosPost = (req, res = response) => {
    
    const {nombre, edad} = req.body;
    
    res.json({
            msg:'post api controlador',
            nombre,edad
        })
}

const usuariosPut = (req, res = response) => {
       
    const id = req.params.id;

    res.json({
            msg:'put api controlador',
            id
        })
}

    const usuariosDelete = (req, res = response) => {

        res.json({
            msg:'delete api controlador'
        })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}