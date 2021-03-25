const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Welcome to musix <br><br>😃👻😃👻😃👻😃👻😃</h1>  "
  );
});

app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: '"musix team"<example.gimail.com>', // sender address
    to: user.email, // list of receivers
    subject: "Welcome to musixteam👻", // Subject line
    html: `<h2>Hi ${user.name}</h2><br>
    
    <h4>We are Excited to have you onBoard. Let's have fun together and Let the music play.</h4>
    <br>
    <h3>Thanks for joining us!</h3>
    <br>
    <h3>Musix Team</h3>
    <h4>😃👻😃👻</h4><br>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

// main().catch(console.error);
