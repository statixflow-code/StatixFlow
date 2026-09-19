import nodemailer from "nodemailer";

export function getTransporter() {
  const emailUser = process.env.EMAIL_ADDRESS || "statixflow@gmail.com";
  const emailPass = process.env.EMAIL_PASS || "";

  if (emailPass && emailPass.trim() !== "") {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });
  }

  return {
    sendMail: async () => {
      return { messageId: "simulated-" + Date.now() };
    },
  };
}

export async function sendEnrollmentEmails({
  userName,
  userEmail,
  phone,
  collegeName,
  department,
  courseTitle,
}) {
  const adminEmail = process.env.EMAIL_ADDRESS || "statixflow@gmail.com";
  const transporter = getTransporter();

  const userHtmlContent = `
    <div style="font-family: 'Segoe UI', Roboto, Helvetica, sans-serif; background-color: #f8fafc; padding: 30px; color: #02295d;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(2, 41, 93, 0.08);">
        <div style="background: linear-gradient(135deg, #02295d 0%, #07889f 100%); padding: 30px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700; tracking: -0.5px;">Statixflow</h1>
          <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9; color: #25d462;">Enrollment Confirmation</p>
        </div>
        <div style="padding: 32px;">
          <h2 style="color: #02295d; font-size: 22px; margin-top: 0;">Congratulations, ${userName}! 🎉</h2>
          <p style="font-size: 15px; line-height: 1.6; color: #475569;">
            Your registration for <strong>${courseTitle}</strong> at Statixflow has been successfully submitted!
          </p>
          <div style="background-color: #f1f5f9; border-left: 4px solid #25d462; padding: 20px; border-radius: 8px; margin: 24px 0;">
            <h3 style="margin-top: 0; font-size: 16px; color: #02295d;">Enrollment Details</h3>
            <p style="margin: 6px 0; font-size: 14px; color: #334155;"><strong>Course:</strong> ${courseTitle}</p>
            <p style="margin: 6px 0; font-size: 14px; color: #334155;"><strong>Applicant:</strong> ${userName}</p>
            <p style="margin: 6px 0; font-size: 14px; color: #334155;"><strong>Email:</strong> ${userEmail}</p>
            <p style="margin: 6px 0; font-size: 14px; color: #334155;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 6px 0; font-size: 14px; color: #334155;"><strong>College:</strong> ${collegeName}</p>
            <p style="margin: 6px 0; font-size: 14px; color: #334155;"><strong>Department:</strong> ${department}</p>
            <p style="margin: 6px 0; font-size: 14px; color: #07889f;"><strong>Status:</strong> Pending Approval</p>
          </div>
          <p style="font-size: 14px; line-height: 1.6; color: #475569;">
            Our team will review your application details shortly. You will receive further instructions and class schedules via email.
          </p>
        </div>
        <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
          © ${new Date().getFullYear()} Statixflow Learning Platform. All rights reserved.
        </div>
      </div>
    </div>
  `;

  const adminHtmlContent = `
    <div style="font-family: 'Segoe UI', Roboto, Helvetica, sans-serif; background-color: #f8fafc; padding: 30px; color: #02295d;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #02295d 0%, #07889f 100%); padding: 24px; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px;">⚡ New Course Enrollment Received!</h2>
        </div>
        <div style="padding: 24px;">
          <p style="font-size: 15px; color: #334155;">A new student has registered for a course on Statixflow:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 140px; color: #02295d;">Course Title:</td><td>${courseTitle}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #02295d;">Student Name:</td><td>${userName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #02295d;">Email:</td><td><a href="mailto:${userEmail}" style="color: #07889f;">${userEmail}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #02295d;">Phone:</td><td>${phone}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #02295d;">College Name:</td><td>${collegeName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #02295d;">Department:</td><td>${department}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #02295d;">Timestamp:</td><td>${new Date().toLocaleString()}</td></tr>
          </table>
        </div>
      </div>
    </div>
  `;

  try {
    const userPromise = transporter.sendMail({
      from: `"Statixflow Academy" <${adminEmail}>`,
      to: userEmail,
      subject: `Enrollment Received: ${courseTitle} - Statixflow`,
      html: userHtmlContent,
    });

    const adminPromise = transporter.sendMail({
      from: `"Statixflow System" <${adminEmail}>`,
      to: adminEmail,
      subject: `[New Enrollment] ${userName} - ${courseTitle}`,
      html: adminHtmlContent,
    });

    await Promise.all([userPromise, adminPromise]);
  } catch (error) {
  }
}
