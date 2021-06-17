const router = require('express').Router();


//route
// router.get('/api', (req, res) => {
//     res.send('app.js api index page');
// });

//http://localhost:3000/api/users
router.use('/users',require('./users'));

//http://localhost:3000/api
router.get('/', (req, res) => {
    res.send('app.js api index page');
});

module.exports = router;
