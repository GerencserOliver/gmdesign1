const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');  // CORS importálása

const app = express();
const port = 5000;

// CORS engedélyezése
app.use(cors());  // Ez lehetővé teszi, hogy a frontend más portokon is hozzáférhessen

// Middleware beállítások
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer transporter beállítása
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'GMWebsiteDesign@gmail.com',
    pass: 'gmki cfhg pipk kkdi',
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'sajatemail@gmail.com',
    subject: 'New Contact Form Submission',
    html: `  <!-- HTML email -->
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              padding: 20px;
            }
            h1 {
              color: #4CAF50;
            }
            .content {
              background-color: white;
              border: 1px solid #ddd;
              padding: 20px;
            }
            p {
              font-size: 16px;
              line-height: 1.6;
            }
          </style>
        </head>
        <body>
          <div class="content">
            <h1>New Message from ${name}</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
        </body>
      </html>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error: ' + error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
