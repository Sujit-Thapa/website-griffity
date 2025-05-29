import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const data = await req.formData();

  // Shared fields
  const name = data.get("name") || data.get("fullName"); // Either "name" or "fullName"
  const email = data.get("email");
  const message = data.get("message") || data.get("coverLetter");
  const contact = data.get("contact");
  const cvFile = data.get("cvUpload") as File | null;

  // Setup mail transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SENDER_MAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Setup attachments if CV exists
  const attachments = [];
  if (cvFile) {
    const buffer = Buffer.from(await cvFile.arrayBuffer());
    attachments.push({
      filename: cvFile.name,
      content: buffer,
    });
  }

  // Subject and message formatting
  const isJoinUs = !!contact || !!cvFile; // Determine if it's the Join Us form

  const subject = isJoinUs
    ? `New Join Us Submission from ${name}`
    : `New Contact Message from ${name}`;

  const text = isJoinUs
    ? `
Full Name: ${name}
Email: ${email}
Contact: ${contact}
Cover Letter: ${message}
    `
    : `
Name: ${name}
Email: ${email}
Message: ${message}
    `;

  // Send email
  await transporter.sendMail({
    from: process.env.SENDER_MAIL,
    to: process.env.CONTACT_RECEIVER,
    subject,
    text,
    attachments,
  });

  return NextResponse.json({ success: true });
}
