import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER, 
        pass: process.env.MAIL_PASS, 
      },
    });
  }

  async sendContactEmail(data: any) {
    const mailOptions = {
      from: process.env.MAIL_FROM,   
      to: process.env.MAIL_USER,     
      subject: `New Contact Message: ${data.subject}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${data.fullName}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Subject:</b> ${data.subject}</p>
        <p><b>Message:</b></p>
        <p>${data.message}</p>
      `,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
    } catch (error) {
      console.error('Failed to send email:', error.message);
    }
  }
}