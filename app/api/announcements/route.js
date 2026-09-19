import { NextResponse } from "next/server";
import { db } from "@/configs/db";
import { announcements } from "@/configs/schema";

export async function GET() {
  try {
    const data = await db.select().from(announcements);
    return NextResponse.json({ success: true, announcements: data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch announcements" },
      { status: 500 }
    );
  }
}
