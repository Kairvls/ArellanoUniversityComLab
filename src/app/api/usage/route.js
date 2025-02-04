import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { lrn, lab, pc_number } = await req.json();

  await db.query("INSERT INTO student_usage (lrn, lab, pc_number) VALUES (?, ?, ?)", [lrn, lab, pc_number]);
  await db.query("UPDATE computers SET status = 'not available' WHERE lab = ? AND pc_number = ?", [lab, pc_number]);

  return NextResponse.json({ message: "PC Reserved" });
}

export async function GET() {
  const [rows] = await db.query("SELECT s.lrn, u.lab, u.pc_number FROM student_usage u JOIN students s ON u.lrn = s.lrn");
  return NextResponse.json(rows);
}

  
  