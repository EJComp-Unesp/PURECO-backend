const express = require('express');
// const path = require('path');
// const routes = require('./routes');
const app = require('./app');

require('dotenv').config();

const PORT = process.env.PORT || process.env.LOCAL_PORT;

// app.on('ready', () => {
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));