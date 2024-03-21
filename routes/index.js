const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Bienvenidos a mi API...'))

router.post('/users', controllers.createUser);
router.get('/users', controllers.getAllUsers);

module.exports = router;
