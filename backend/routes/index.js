const router = require('express').Router();

//route
router.use('/api',require('./api'));

router.get('/', (req, res) => {
    res.send('app.js index page');
});

module.exports = router;
