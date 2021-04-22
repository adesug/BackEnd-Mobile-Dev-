const mainRoutes = require('express').Router();
const barangRoutes = require("./barangRoutes");

mainRoutes.use('/barang', barangRoutes);

module.exports= mainRoutes;