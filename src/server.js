// const path = require('path');
// const routes = require('./routes');
const app = require('./app');
//const nodemailer = require("nodemailer");
// const cors = require("cors");
const express = require("express");
const bodyParser = require('body-parser');

require('dotenv').config();

app.use(express.json());
app.use(require("cors")());
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.json({message: "Ok"});
})

app.post('/send', (req, res, next) => {

    const {nome, email, assunto, msg} = req.body;

    res.json({
        nome,
        email,
        assunto,
        msg
    });
})

const PORT = process.env.PORT || process.env.LOCAL_PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));