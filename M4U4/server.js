const express = require('express');

const app = express();

app.get('/respuesta/:tipo', (req, res) => {
  const tipo = req.params.tipo;

  if (tipo === 'opcion1') {
    res.send('Esta es la respuesta para la opción 1.');
  } else if (tipo === 'opcion2') {
    res.send('Esta es la respuesta para la opción 2.');
  } else if (tipo === 'opcion3') {
    res.send('Esta es la respuesta para la opción 3.');
  } else {
    res.send('Tipo no válido.');
  }
});

const port = 3000;
app.listen(port, () => {
    console.log('Servidor escuchando en el puerto 3000')
} );