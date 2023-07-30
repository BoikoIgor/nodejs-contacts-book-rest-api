const sgMail = require('@sendgrid/mail');
require('dotenv').config();
const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: 'igor.boiko@yahoo.com' };
  await sgMail.send(email);
  return true;
};

// const email = {
//   to: 'leboco5346@wiemei.com',
//   from: 'igor.boiko@yahoo.com',
//   subject: 'testing email',
//   html: '<p><strong>Testing email</strong> from localhost:3000</p>',
// };
// sgMail
//   .send(email)
//   .then(() => console.log('Email send success'))
//   .catch((error) => console.log(error.message));
module.exports = sendEmail;
