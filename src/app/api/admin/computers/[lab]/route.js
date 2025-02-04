import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kaisuan",
  database: "computer_lab",
});

export async function GET(req, { params }) {
  const { lab } = params;
  const [computers] = await db.query("SELECT * FROM computers WHERE lab = ?", [lab]);
  return NextResponse.json(computers);
}
