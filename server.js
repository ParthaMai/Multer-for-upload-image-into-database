const express = require('express')
const app = express()
const db= require('./db');
require('dotenv').config();

const bodyParser= require('body-parser');
app.use(bodyParser.json()); // req body

//Import the person files
const studentRoutes=require('./routes/studentRoute');

//Use the routers
app.use('/student',studentRoutes);

const PORT=process.env.PORT || 3000;

app.listen(3000)
