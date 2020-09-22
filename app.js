const nodemailer = require("nodemailer");
const express = require("express");
const PORT = process.env.PORT || 3000;

let corsOptions = {
    origin: "http://localhost:3000"
  }  

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));


module.exports = function (app) {

app.post('/api/form', (req, res) => {
    let data = req.body;
    console.log(data);
    let smtpTransport = nodemailer.createTransport({
      service: process.env.SERVICE || "Gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    })

    let mailOptions = {
      from: data.email,
      to: process.env.EMAIL,
      subject: `Message from ${data.name}`,
      html: `
        <h3> Information </h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>
        `
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
      if (error) {
        res.send(error)
      }
      else {
        res.send("Success" + response)
      }
    });

    smtpTransport.close();
  })
}

app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
