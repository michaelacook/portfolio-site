/* About Controller */

const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');


module.exports = (req, res) => {

    if (req.method === 'POST') {
        sgMail.setApiKey('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');
        const msg = {
            to: 'mcook0775@gmail.com',
            from: 'mcook0775@gmail.com',
            subject: 'Sending with Twilio SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        sgMail.send(msg);
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
    return new Promise((resolve) => {
      const name = req.body.name;
      const email = req.body.email;
      const msg = req.body.message;
  
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        service: "gmail",
        auth: {
          type: 'OAuth2',
          user: "mcook0775@gmail.com",
          pass: process.env["GMAIL_PASS"],
        },
      });
  
      const mailOptions = {
        from: "mcook0775@gmail.com",
        to: "mcook0775@gmail.com",
        subject: "Portfolio Inquiry",
        text: `
              Name: ${name}
              Email: ${email}
              Message:
        ${msg}`,
      };
  
      transporter.sendMail(mailOptions);
      resolve();
    });
  }