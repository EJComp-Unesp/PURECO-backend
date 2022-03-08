// import path from 'path';
// import cors from 'cors';
const express = require('express');
require('dotenv').config();
// import routes from './routes/routes';
// import connectToMongoDB from './database';

const app = express();

//connectToMongoDB();
//app.use(cors());
//app.use('/images', express.static(path.resolve(__dirname, '..', '..', 'uploads')));
app.use(express.json());
//app.use(routes);

module.exports = app;