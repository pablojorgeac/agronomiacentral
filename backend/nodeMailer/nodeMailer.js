const nodeMailer = require('nodemailer');

const html = '';

const title = '';

const subscribers = [];

async function mailer() {
  const transporter = nodeMailer.createTransport({
    host: '',
    port: 465,
    secure: true,
    auth: {
      user: '',
      pass: '',
    },
  });

  const info = await transporter.sendMail({
    from: 'Club Agronomía Central <>',
    to: subscribers,
    subject: title,
    html: html,
  });

  console.log('Message sent: ' + info.messageId);
  console.log(info.accepted);
  console.log(info.rejected);
}

module.exports = { mailer };
