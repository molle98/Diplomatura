const express = require('express');
const app = express();

// Ruta 1
app.get('/', (req, res) => {
  res.send('Ruta Principal');
});

// Ruta 2
app.get('/ruta2', (req, res) => {
  res.send('Ruta 2');
});

// Ruta 3
app.get('/ruta3', (req, res) => {
  res.send('Ruta 3');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('La aplicación está funcionando en http://localhost:3000');
});