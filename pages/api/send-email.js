const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const { name, email, message } = req.body;

  // Nodemailer transporter beállítása
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Gmail SMTP szerver
    port: 465, // Biztonságos port
    secure: true, // SSL használata
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  

  const mailOptions = {
    from: email,
    to: 'sajatemail@gmail.com',
    subject: 'New Contact Form Submission',
    html: `
      <h1>New Message from ${name}</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Nodemailer error:', error); // Részletes hibaüzenet
    res.status(500).json({ success: false, error: error.message });
  }
  
}
