const sgMail = require("@sendgrid/mail");

const sendgridKey = process.env.SENDGRID_API_KEY;
const adminEmail = process.env.SENDGRID_ADMIN_EMAIL;

sgMail.setApiKey(sendgridKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: adminEmail,
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    // html: ``,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: adminEmail,
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. I hope to see you sometime soon.`,
    // html: ``,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
