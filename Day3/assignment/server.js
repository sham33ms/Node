const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json());


function validateInputs(req, res, next) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.json({ msg: "All fields are required" });
  }

  if (!email.includes("@") || !email.includes(".")) {
    return res.json({ msg: "Invalid email format" });
  }

  next();
}


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.post("/report", validateInputs, (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  transporter.sendMail(
    {
      to: "shameem4contact@gmail.com",
      subject: "Bug Report",
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
    },
    (err) => {
      if (err) return res.status(500).json({ msg: "Failed to send" });
      else res.json({ msg: "Bug sent!" });
    }
  );
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
