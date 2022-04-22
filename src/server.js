// const path = require('path');
// const routes = require('./routes');
const app = require('./app');
//const nodemailer = require("nodemailer");
const cors = require("cors");
const express = require("express");

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.post('/send', (req, res, next) => {
    console.log(req.body);

    const nome = req.body.nome;
    const email = req.body.email;
    const assunto = req.body.assunto;
    const msg = req.body.msg;

    res.json({
        nome,
        email,
        assunto,
        msg
    });
})

const PORT = process.env.PORT || process.env.LOCAL_PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));