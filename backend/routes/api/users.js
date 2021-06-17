const router = require('express').Router();
const users_controller  = require('../../controllers/users');

//route
// router.get('/api', (req, res) => {
//     res.send('app.js api index page');
// });
//http://localhost:3000/api/users
router.get('/', users_controller.index);
router.get('/list', users_controller.listAll);

module.exports = router;
