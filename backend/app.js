const express = require('express');
const app = express();


//middlewares
app.use(require('./routes'));
//app.use(require('./routes/api'));

//routes
// app.get('/', (req, res) => {
//     res.send('app.js index page');
// });

// app.get('/api', (req, res) => {
//     res.send('app.js api index page');
// });

app.listen(3000, () => {
    console.log('listening on port 3000');
});