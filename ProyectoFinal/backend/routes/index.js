var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
  res.render('home');
});

router.get('/contacto', (req, res) => {
  res.render('contacto');
});

router.get('/nosotros', (req, res) => {
  res.render('nosotros');
});

router.get('/comics', (req, res) => {
  res.render('comics');
});




module.exports = router;
