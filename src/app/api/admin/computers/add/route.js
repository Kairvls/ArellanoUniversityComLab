import db from "@/lib/db";
import { NextResponse } from 'next/server';

export async function POST(req) {
    const { lab, pc_number } = await req.json();
    await db.query("INSERT INTO computers (lab, pc_number, status) VALUES (?, ?, 'available')", [lab, pc_number]);
    return NextResponse.json({ message: "PC Added" });
  }
  