import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kaisuan",
  database: "computer_lab",
});

export async function GET() {
  const [rows] = await db.query("SELECT * FROM computers");
  return NextResponse.json(rows);
}
export async function POST(req) {
    const { lab, pc_number, status } = await req.json();
    await db.query("UPDATE computers SET status = ? WHERE lab = ? AND pc_number = ?", [status, lab, pc_number]);
    return NextResponse.json({ message: "Status updated" });
  }