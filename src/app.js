const express = require ('express');
const mongoose = require ('mongoose');
require('dotenv').config();
const  userRoutes = require ('./routes/user');
const adminRoutes = require('./routes/admin');

//settings
const app = express();
const port = process.env.port || 3000;

//middlewares
app.use(express.json());

app.use('/api', userRoutes );
app.use('/api', adminRoutes)

//routes
app.get('/', (req, res) => {
    res.send("Welcome to my API");
  });
  
//database conection
mongoose
.connect( process.env.MONGODB_URI)
.then(() => console.log('database is conected'))
.catch((error) => console.error(error))

//server listener

app.listen(port, () => 
console.log('server on port', port));
