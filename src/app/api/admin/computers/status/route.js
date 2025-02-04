import db from "@/lib/db";
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { status, lab, pc_number, lrn } = await req.json();
  await db.query("UPDATE computers SET status = ? WHERE lab = ? AND pc_number = ?", [status, lab, pc_number]);
  await db.query("INSERT INTO student_usage (lab, pc_number, lrn) VALUES (?, ?, ?)", [lab, pc_number, lrn]);
  
  return NextResponse.json({ message: "Status Updated" });
  
}
export async function GET() {
  const [rows] = await db.query("SELECT u.lab, u.pc_number, s.lrn FROM student_usage u JOIN students s ON u.lrn = s.lrn");
  return NextResponse.json(rows);
}