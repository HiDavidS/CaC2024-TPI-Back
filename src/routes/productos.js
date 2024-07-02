// src/routes/productos.js
const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos');

router.get('/productos', productosController.getProductos);
router.post('/productos', productosController.createProducto);
router.put('/productos/:id', productosController.updateProducto);
router.delete('/productos/:id', productosController.deleteProducto);

module.exports = router;
