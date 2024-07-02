// src/app.js
const express = require('express');
const productosRoutes = require('./src/routes/productos');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("CaC Deploy");
});

app.use('/api', productosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
