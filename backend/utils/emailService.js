// backend/utils/emailService.js
const nodemailer = require("nodemailer");

const sendConfirmationEmail = (userEmail, movieTitle, showtime) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: "Ticket Confirmation - Movie Booking",
    text: `Your ticket for "${movieTitle}" at ${showtime} has been confirmed!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendConfirmationEmail };
