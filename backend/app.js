const express = require('express');
const app = express();
require('dotenv').config();

require('./config/db');


//middlewares
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());
//app.use(require('./routes/api'));
app.use(require('./routes'));


app.listen(3000, () => {
    console.log('listening on port 3000');
});