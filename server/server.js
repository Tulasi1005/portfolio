import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// API Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Nodemailer server is healthy' });
});

// Contact Route
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields (name, email, subject, message) are required.' });
  }

  // Create Nodemailer Transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587/other
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Setup email options
  const mailOptions = {
    from: `"${name}" <${process.env.SMTP_USER}>`, // Sending through your authenticated SMTP user
    replyTo: email, // Replies will go directly to the visitor's email
    to: process.env.CONTACT_RECEIVER,
    subject: `Portfolio Contact: ${subject}`,
    text: `You have received a new contact message from your portfolio:
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; padding: 25px; color: #1e293b; background-color: #f8fafc; border-radius: 12px; max-width: 600px; margin: auto; border: 1px solid #e2e8f0;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-top: 0; font-size: 20px;">
          New Portfolio Submission
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 6px 0; font-weight: bold; width: 100px; color: #64748b; font-size: 14px;">Name:</td>
            <td style="padding: 6px 0; font-size: 14px; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #64748b; font-size: 14px;">Email:</td>
            <td style="padding: 6px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none; font-weight: 600;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #64748b; font-size: 14px;">Subject:</td>
            <td style="padding: 6px 0; font-size: 14px; font-weight: 600;">${subject}</td>
          </tr>
        </table>
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2563eb; border-radius: 6px; margin-top: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin-top: 0; margin-bottom: 8px; color: #475569; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message Payload</h4>
          <p style="white-space: pre-wrap; margin: 0; font-size: 14px; line-height: 1.6; color: #334155;">${message}</p>
        </div>
        <p style="margin-top: 25px; margin-bottom: 0; font-size: 11px; color: #94a3b8; text-align: center;">
          Sent from M. Tulasi Laxmi Portfolio Contact Form
        </p>
      </div>
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully from: ${email} -> ${process.env.CONTACT_RECEIVER}`);
    return res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Nodemailer SMTP Error:', error);
    return res.status(500).json({ error: 'Failed to send message. Please ensure SMTP credentials are correct.' });
  }
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`[Server] Express listening on port ${PORT}`);
  console.log(`[Server] Health endpoint: http://localhost:${PORT}/api/health`);
});
