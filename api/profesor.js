const express = require('express')

const ruta = express.Router()

/* API #1 : De actores hacia peliculas*/
ruta.get('/', async(req, res) => {
    console.log("hello here professor")
    console.log(req.body);
})


module.exports = ruta