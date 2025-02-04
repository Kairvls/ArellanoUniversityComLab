import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kaisuan",
  database: "computer_lab",
});

export async function POST(req) {
  const { id, status } = await req.json();
  await db.query("UPDATE computers SET status = ? WHERE id = ?", [status, id]);
  return NextResponse.json({ message: "Status updated" });
}
