const nodemailer = require('nodemailer');

async function sendVerificationEmail(to,subject, body){

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "ssharama702@gmail.com",
            pass: "741852963"
        }
    });

    const mailOptions = {
        from: "ssharama702@gmail.com",
        to: to,
        subject: subject,
        html: body
    };

    await transporter.sendMail(mailOptions);


}

module.exports = sendVerificationEmail;