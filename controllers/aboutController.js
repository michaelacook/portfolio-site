/* About Controller */

const nodemailer = require('nodemailer');


module.exports = async (req, res) => {

    if (req.method === 'POST') {
        try {
            await sendEmail(req);
            return res.redirect('/about?send=success#contact')
        } catch (err) {
            return res.redirect('/about?send=fail#contact')
        }
    }

    const args = new Object();
    const data = require('../data.json');
    skills = data.skills;
    args.skills = skills;
    res.render('about.pug', args);
}


/**
 * Send an email. return the sendMail call with no callback so it returns a promise
 * @param {Object} req - http request
 */
function sendEmail(req) {
    const name = req.body.name;
    const email = req.body.email;
    const msg = req.body.message;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        service: 'gmail',
        auth: {
            user: 'mcook0775@gmail.com',
            pass: process.env['GMAIL_PASS']
        }
    });

    const mailOptions = {
        from: 'mcook0775@gmail.com',
        to: 'mcook0775@gmail.com',
        subject: 'Portfolio Inquiry',
        text: `
Name: ${name}
Email: ${email}
Message:

${msg}`};

    return transporter.sendMail(mailOptions);
}