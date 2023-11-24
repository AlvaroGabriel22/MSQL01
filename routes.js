
const HomeController = require('./Controllers/HomeController');
const SobreController = require('./Controllers/SobreController')

const router = require ("express").Router();

router.get('/', HomeController.index)
router.get('/sobre', SobreController.index)

module.exports = router;
