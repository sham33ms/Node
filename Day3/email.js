const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
require("dotenv").config();


app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
    ,
  });

  const mailOptions = {

    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Email sent successfully!");
  } catch (err) {
    res.status(500).send("Failed to send email");
  }
});

app.listen(3006, () => console.log("Server running on port 3006"));