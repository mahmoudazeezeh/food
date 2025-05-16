import { NextResponse } from "next/server"

export async function GET() {
  // هذا المسار API يمكن استخدامه لاحقًا لتخزين مواقع المستخدمين أو معالجة بيانات الخريطة
  return NextResponse.json({ status: "success", message: "Map API is working" })
}
