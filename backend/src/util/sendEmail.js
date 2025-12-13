const nodemailer = require('nodemailer');

async function sendVerificationEmail(to,subject, body){

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "your_email",
            pass: "your_email_password"
        }
    });

    const mailOptions = {
        from: "your_email",
        to: to,
        subject: subject,
        html: body
    };

    await transporter.sendMail(mailOptions);


}

module.exports = sendVerificationEmail;