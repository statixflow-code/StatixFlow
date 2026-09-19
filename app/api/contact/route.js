import { NextResponse } from "next/server";
import { getTransporter } from "@/lib/nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, Email, and Message are required." },
        { status: 400 }
      );
    }

    const adminEmail = process.env.EMAIL_ADDRESS || "statixflow@gmail.com";
    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"Statixflow Contact" <${adminEmail}>`,
      to: adminEmail,
      subject: `[Contact Inquiry] ${subject || "General Inquiry"} - from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #02295d;">
          <h2 style="color: #07889f;">New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f1f5f9; padding: 15px; border-radius: 8px;">${message}</div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
     message: "Thank you for reaching out! We will respond to your inquiry shortly."
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}
