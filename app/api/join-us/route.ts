import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const data = await req.formData();
    const fullName = data.get("fullName");
    const email = data.get("email");
    const contact = data.get("contact");
    const coverLetter = data.get("coverLetter");
    const cvFile = data.get("cvUpload") as File | null;

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SENDER_MAIL,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Prepare attachments if CV is uploaded
    let attachments = [];
    if (cvFile) {
        const buffer = Buffer.from(await cvFile.arrayBuffer());
        attachments.push({
            filename: cvFile.name,
            content: buffer,
        });
    }

    // Send the email
    await transporter.sendMail({
        from: process.env.SENDER_MAIL,
        to: process.env.CONTACT_RECEIVER, // your receiving email
        subject: `New Join Us Submission from ${fullName}`,
        text: `
Full Name: ${fullName}
Email: ${email}
Contact: ${contact}
Cover Letter: ${coverLetter}
    `,
        attachments,
    });

    return NextResponse.json({ success: true });
}