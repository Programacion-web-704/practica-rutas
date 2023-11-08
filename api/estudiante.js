const express = require('express')

const ruta = express.Router()

/* API #1 : De actores hacia peliculas*/
ruta.get('/all', async(req, res) => {
    console.log("hello here")
    console.log(req.body);
})


module.exports = ruta