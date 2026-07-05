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
<div style="max-width:650px;margin:auto;background:#ffffff;border-radius:14px;overflow:hidden;font-family:Segoe UI,Arial,sans-serif;border:1px solid #e5e7eb">

  <div style="background:linear-gradient(135deg,#2563eb,#38bdf8);padding:30px;text-align:center;color:white">
      <h1 style="margin:0;font-size:28px">📩 New Portfolio Enquiry</h1>
      <p style="margin-top:8px;font-size:15px;opacity:.95">
        Someone has contacted you from your portfolio website.
      </p>
  </div>

  <div style="padding:30px">

      <table style="width:100%;border-collapse:collapse">
          <tr>
              <td style="padding:12px;font-weight:bold;width:120px;background:#f8fafc">Name</td>
              <td style="padding:12px">${name}</td>
          </tr>

          <tr>
              <td style="padding:12px;font-weight:bold;background:#f8fafc">Email</td>
              <td style="padding:12px">
                  <a href="mailto:${email}" style="color:#2563eb;text-decoration:none">
                    ${email}
                  </a>
              </td>
          </tr>

          <tr>
              <td style="padding:12px;font-weight:bold;background:#f8fafc">Subject</td>
              <td style="padding:12px">${subject}</td>
          </tr>
      </table>

      <h3 style="margin-top:35px;color:#2563eb">
          Message
      </h3>

      <div style="
      background:#f8fafc;
      padding:20px;
      border-left:5px solid #2563eb;
      border-radius:10px;
      white-space:pre-wrap;
      line-height:1.8">
      ${message}
      </div>

  </div>

  <div style="
  background:#0f172a;
  color:white;
  padding:20px;
  text-align:center">

      <strong>M. Tulasi Laxmi Portfolio</strong>

      <br><br>

      This email was generated automatically from your portfolio contact form.

  </div>

</div>
`
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
