import { NextResponse } from "next/server";
import { db } from "@/configs/db";
import { enrollments } from "@/configs/schema";
import { sendEnrollmentEmails } from "@/lib/nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { userName, userEmail, phone, collegeName, department, courseTitle, courseId } = body;

    if (!userName || !userEmail || !phone || !collegeName || !department || !courseTitle) {
      return NextResponse.json(
        { success: false, error: "All fields (Name, Email, Phone, College Name, Department, Course) are required." },
        { status: 400 }
      );
    }

    const [inserted] = await db
      .insert(enrollments)
      .values({
        userName,
        userEmail,
        phone,
        collegeName,
        department,
        courseId: courseId ? Number(courseId) : null,
        courseTitle,
        status: "pending",
      })
      .returning();

    await sendEnrollmentEmails({
      userName,
      userEmail,
      phone,
      collegeName,
      department,
      courseTitle,
    });

    return NextResponse.json({
      success: true,
      message: "Enrollment submitted successfully! Check your email for confirmation.",
      enrollment: inserted,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal server error submitting enrollment. Please try again." },
      { status: 500 }
    );
  }
}
