
const HomeController = require('./Controllers/HomeController');
const LivrosController = require('./Controllers/LivrosController');
const SobreController = require('./Controllers/SobreController')

const router = require ("express").Router();

router.get('/', HomeController.index)
router.get('/sobre', SobreController.index)
router.get('/livros/:id',LivrosController.Show)

module.exports = router;
