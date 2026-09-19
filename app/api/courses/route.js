import { NextResponse } from "next/server";
import { db } from "@/configs/db";
import { courses } from "@/configs/schema";

export async function GET() {
  try {
    const data = await db.select().from(courses);
    return NextResponse.json({ success: true, courses: data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}
