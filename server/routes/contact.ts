import type { Request, Response } from "express";
import nodemailer from "nodemailer";

export async function handleContact(req: Request, res: Response) {
  try {
    const { name, email, message } = req.body ?? {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Use Gmail to send emails directly (no API keys needed!)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'mohammadsameers766@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD  // App password from Gmail
      }
    });

    // Send email to your inbox
    await transporter.sendMail({
      from: process.env.GMAIL_USER || 'mohammadsameers766@gmail.com',
      to: 'mohammadsameers766@gmail.com',
      subject: `New Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    res.json({ ok: true });
  } catch (err: any) {
    console.error("/api/contact error", err);
    
    // If no email configured, just log it
    if (err.code === 'EAUTH' || !process.env.GMAIL_APP_PASSWORD) {
      console.log('\n📧 CONTACT FORM SUBMISSION (Email not configured):');
      console.log('Name:', req.body.name);
      console.log('Email:', req.body.email);
      console.log('Message:', req.body.message);
      console.log('\nTo enable emails, see the instructions below.\n');
      
      return res.status(500).json({ 
        error: 'Email not configured. See terminal for message details.' 
      });
    }
    
    res.status(500).json({ error: "Failed to send email" });
  }
}

