const express = require('express');
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;




const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // use false for STARTTLS; true for SSL on port 465
    auth: {
        user: 'awanspinczow2@gmail.com',
        pass: 'aovd fffr kcpi vmkp',
    }
});


app.use(express.static('public'));
app.use(express.json());

app.post('/send',async (req, res)  => {
    res.json({ message: `Dane odebrane: ${req.body['first-name']} ${req.body['last-name']}` });
    const info = await transporter.sendMail({
        from: 'awanspinczow2@gmail.com',
        to:`awanspinczow2@gmail.com` ,
        subject: 'Potwierdzenie Rezerwacji',
        text: "Hello world?", // plain text body
        html: `
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Rezerwacja</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f4f9;
          margin: 0;
          padding: 0;
          color: #333;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        h1 {
          text-align: center;
          color: #4CAF50;
          font-size: 28px;
          margin-bottom: 20px;
        }
        p {
          font-size: 16px;
          line-height: 1.6;
          margin: 10px 0;
        }
        .highlight {
          color: #333;
          font-weight: bold;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
          font-size: 12px;
          color: #aaa;
        }
        .footer a {
          color: #4CAF50;
          text-decoration: none;
        }
        .section {
          margin-bottom: 15px;
          padding: 10px;
          border-radius: 5px;
          background-color: #f9f9f9;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        .section p {
          margin: 5px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Potwierdzenie Rezerwacji</h1>
        
        <div class="section">
          <p class="highlight">Imię:</p>
          <p>${req.body['first-name']}</p>
        </div>

        <div class="section">
          <p class="highlight">Nazwisko:</p>
          <p>${req.body['last-name']}</p>
        </div>

        <div class="section">
          <p class="highlight">Telefon:</p>
          <p>${req.body['phone']}</p>
        </div>

        <div class="section">
          <p class="highlight">Wiadomość:</p>
          <p>${req.body['message']}</p>
        </div>

        <div class="footer">
          <p>Thank you for choosing us!</p>
          <p>Have a great day! <a href="#">Visit our website</a></p>
        </div>
      </div>
    </body>
    </html>
    `,
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});