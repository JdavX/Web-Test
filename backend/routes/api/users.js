const router = require('express').Router();
const users_controller  = require('../../controllers/users');

//route
// router.get('/api', (req, res) => {
//     res.send('app.js api index page');
// });

//create
router.post('/', users_controller.createUser);
//read
router.get('/', users_controller.index);
router.get('/list', users_controller.listAll);
//update
router.patch('/', users_controller.index);
//delete
router.delete('/', users_controller.index);
//http://localhost:3000/api/users

module.exports = router;
