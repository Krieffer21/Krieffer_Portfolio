const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require('cors');
const path = require('path');

// let corsOptions = {
//   origin: "http://localhost:3000"
// }

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require("./src/components/Contact/index.js")(app);
app.use(express.static(path.join(__dirname, 'client/build')))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


  app.post('/api/form', (req, res) => {
    let data = req.body;
    console.log(data);
    let smtpTransport = nodemailer.createTransport({
      service: process.env.SERVICE || "Gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.user || "proj3group@gmail.com",
        pass: process.env.pass || "Thegooniestest"
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


app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT
  );
});
