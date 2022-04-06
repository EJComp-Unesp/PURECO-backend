// const path = require('path');
// const routes = require('./routes');
const app = require('./app');
//const nodemailer = require("nodemailer");
const cors = require("cors");
const express = require("express");

require('dotenv').config();

app.use(cors());
app.use(express.json());

//const upload = require("multer")();
app.post('/send',/*upload.single('anexo') */ (req, res, next) => {
    const nome = "req.body.nome";
    const email = "req.body.email";
    const mensagem = "req.body.mensagem";
    //const anexo = req.file;

    res.json({
        nome,
        email,
        mensagem
    });
})

const PORT = process.env.PORT || process.env.LOCAL_PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));