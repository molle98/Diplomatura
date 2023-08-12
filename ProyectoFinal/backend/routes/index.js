var express = require('express');
var router = express.Router();
var pool = require('../models/db');


router.get('/', async (req, res) => {
  try {
    const query = 'SELECT url FROM ImagenesHome WHERE id = 1'; // Cambia esto según tu estructura
    const result = await pool.query(query, [1]); // Cambia el ID según corresponda
    
    const data = {
      imageUrl: result[0].url
    };
    
    res.render('home', data);
  } catch (error) {
    console.error('Error al obtener la página de inicio:', error);
    res.status(500).send('Error interno del servidor');
  }
});

router.get('/contacto', (req, res) => {
  res.render('contacto');
});

router.get('/nosotros', async (req, res) => {
  try {
    // Realizar la consulta para obtener las imágenes de la tabla imagenesNosotros
    const nosotrosQuery = 'SELECT * FROM imagenesNosotros'; // Cambiar esto según tu estructura
    const nosotrosResult = await pool.query(nosotrosQuery);

    // Obtener las URLs de las imágenes de Alan Moore y Frank Miller
    const alanMooreImage = nosotrosResult.find(img => img.id === 1).url; // Cambiar el ID según corresponda
    const frankMillerImage = nosotrosResult.find(img => img.id === 2).url; // Cambiar el ID según corresponda

    // Renderizar la vista nosotros.hbs con las rutas de las imágenes
    res.render('nosotros', { alanMoore: alanMooreImage, frankMiller: frankMillerImage });
  } catch (error) {
    console.error('Error al obtener las imágenes de la página "Nosotros":', error);
    res.render('error'); // Manejar el error de manera adecuada en tu aplicación
  }
});

router.get('/comics', (req, res) => {
  // Realizar una consulta a la base de datos para obtener los cómics
  pool.query('SELECT * FROM comics', (error, resultados) => {
    if (error) {
      console.error('Error al obtener los cómics:', error);
      res.render('error'); // Manejo de error
    } else {
      const data = {
        comics: resultados // Pasar los cómics a la vista
      };
      res.render('comics', data); // Renderizar la vista comics con los datos
    }
  });
});





module.exports = router;
