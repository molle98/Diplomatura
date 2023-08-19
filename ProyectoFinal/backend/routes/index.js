var express = require('express');
var router = express.Router();
var pool = require('../models/db');


router.get('/', async (req, res) => {
  try {
    const query = 'SELECT url FROM ImagenesHome WHERE id = 1'; 
    const result = await pool.query(query, [1]); 
    
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
    
    const nosotrosQuery = 'SELECT * FROM imagenesNosotros'; 
    const nosotrosResult = await pool.query(nosotrosQuery);

    
    const alanMooreImage = nosotrosResult.find(img => img.id === 1).url; 
    const frankMillerImage = nosotrosResult.find(img => img.id === 2).url; 

    
    res.render('nosotros', { alanMoore: alanMooreImage, frankMiller: frankMillerImage });
  } catch (error) {
    console.error('Error al obtener las imágenes de la página "Nosotros":', error);
    res.render('error');
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

router.get('/comics/create', (req, res) => {
  res.render('createComics');
});

//Manejar creacion de comics
router.post('/comics/create', (req, res) => {
  const { title, image, price, description } = req.body;

  // Realizar la consulta SQL para insertar un nuevo cómic en la base de datos
  const insertQuery = 'INSERT INTO comics (title, image, price, description) VALUES (?, ?, ?, ?)';
  pool.query(insertQuery, [title, image, price, description], (error, results) => {
    if (error) {
      console.error('Error al crear el cómic:', error);
      res.sendStatus(500); // Error interno del servidor
    } else {
      console.log('Cómic creado:', results);
      res.redirect('/comics'); // Redirigir de vuelta a la página de cómics
    }
  });
});


// Ruta para mostrar el formulario de edición de cómics
router.get('/comics/edit/:id', async (req, res) => {
  const comicId = req.params.id;
  try {
    // Realizar consulta a la base de datos para obtener los detalles del cómic por su ID
    const query = 'SELECT * FROM comics WHERE id = ?';
    const comic = await pool.query(query, [comicId]);
    
    // Renderizar la vista editComic.hbs con los datos del cómic
    res.render('editComics', { comicId, comic: comic[0] });
  } catch (error) {
    console.error('Error al obtener el cómic para editar:', error);
    res.render('error');
  }
});


// Ruta para eliminar un cómic por su ID
router.delete('/comics/delete/:id', (req, res) => {
  const comicId = req.params.id;

  // Realiza la consulta SQL para eliminar el cómic por su ID
  const deleteQuery = 'DELETE FROM comics WHERE id = ?';

  pool.query(deleteQuery, [comicId], (error, results) => {
    if (error) {
      console.error('Error al eliminar el cómic:', error);
      res.sendStatus(500); // Error interno del servidor
    } else {
      console.log('Cómic eliminado:', results);
      res.sendStatus(200); // OK
    }
  });
});


module.exports = router;
