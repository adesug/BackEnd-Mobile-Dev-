const authRoutes = require('express').Router();
const authController = require('../controllers/authController');

authRoutes.post('/sign-up', authController.signUp);

module.exports = authRoutes;