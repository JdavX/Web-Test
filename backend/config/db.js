//require('dotenv').config();
const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DB_URI,
    {
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false, 
    
}).then(() => {
    console.log('connection established');
}).catch((err) => {
    console.log(err.message);
});


db.on('error', () =>{
    console.log('error occured from the database');
});

db.on('open', () =>{
    console.log('successfully accessed MongoDB');
});

module.exports = mongoose;