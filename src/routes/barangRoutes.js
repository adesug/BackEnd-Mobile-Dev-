const barangRoutes = require('express').Router();
const barangController = require('../controllers/barangController');
const barangControllers = require('../controllers/barangController');

barangRoutes.get('/',barangControllers.getAllBarang);
barangRoutes.get('/:id',barangControllers.getBarangBy);
barangRoutes.post('/', barangControllers.createNewBarang);
barangRoutes.put('/:id', barangControllers.updateBarang);
barangRoutes.delete('/:id', barangControllers.deleteBarang);

module.exports = barangRoutes;