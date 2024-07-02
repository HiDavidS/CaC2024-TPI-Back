// src/controllers/productos.js
const db = require('../config/db');

exports.getProductos = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Productos');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProducto = async (req, res) => {
  const { nombre, descripcion, precio, stock } = req.body;
  try {
    const [result] = await db.query('INSERT INTO Productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)', [nombre, descripcion, precio, stock]);
    res.status(201).json({ id: result.insertId, nombre, descripcion, precio, stock });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, stock } = req.body;
  try {
    await db.query('UPDATE Productos SET nombre = ?, descripcion = ?, precio = ?, stock = ? WHERE id = ?', [nombre, descripcion, precio, stock, id]);
    res.json({ id, nombre, descripcion, precio, stock });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProducto = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM Productos WHERE id = ?', [id]);
    res.json({ message: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
