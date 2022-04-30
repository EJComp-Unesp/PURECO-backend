const nodemailer = require('nodemailer');



module.exports = (nome, email, assunto, msg) => {
    const smtp = nodemailer.createTransport({
        host: `${process.env.MAIL_HOST}`,
        port: 587,
        secure: false,
        auth: {
            user: `${process.env.MAIL_USER}`,
            pass: `${process.env.MAIL_PASSWORD}`
        }
    })

    const mailOptions = {
        from: `${process.env.MAIL_USER}`,
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