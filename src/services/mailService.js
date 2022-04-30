const nodemailer = require('nodemailer');



module.exports = (nome, email, assunto, msg) => {
    const smtp = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'testes.caiotavares@gmail.com',
            pass: `${process.env.MAIL_PASSWORD}`

            // user:'testes.caio@devcaiotavares.com',
            // pass: 'Demonidor12@'
        }
    })

    const mailOptions = {
        from: 'testes.caiotavares@gmail.com',
        to: email,
        subject: `Fale Conosco PURECO: ${nome}: ${assunto}`,
        text: msg
    }

    return new Promise((resolve, reject) => {
        smtp.sendMail(mailOptions)
            .then(response => {
                smtp.close();
                return resolve(response);
            })
            .catch(error => {
                smtp.close();
                return reject(error);
            })
    })
}