// import path from 'path';
// import cors from 'cors';
const express = require('express');
// import routes from './routes/routes';
const connectToMongoDB = require('./database');

require('dotenv').config();
const app = express();
connectToMongoDB();

// app.use(cors());
// app.use(express.json());

//app.use('/images', express.static(path.resolve(__dirname, '..', '..', 'uploads')));
//app.use(routes);

module.exports = app;