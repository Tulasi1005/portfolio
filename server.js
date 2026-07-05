import express from 'express';
import cors from 'cors';
import { Resend } from "resend";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const resend = new Resend(process.env.RESEND_API_KEY);

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// API Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Nodemailer server is healthy' });
});

// Contact Route
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      error: "All fields are required.",
    });
  }

  try {
    // Email to you
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2>New Portfolio Contact</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <hr>

          <p style="white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    // Auto reply to visitor
    await resend.emails.send({
      from: "M. Tulasi Laxmi <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2>Hello ${name}, 👋</h2>

          <p>Thank you for contacting me.</p>

          <p>I have received your message regarding:</p>

          <p><strong>${subject}</strong></p>

          <p>I will get back to you within <strong>24 hours</strong>.</p>

          <br>

          <p>Regards,</p>
          <h3>M. Tulasi Laxmi</h3>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });

  } catch (err) {
    console.error("Resend Error:", err);

    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`[Server] Express listening on port ${PORT}`);
  console.log(`[Server] Health endpoint: http://localhost:${PORT}/api/health`);
});
