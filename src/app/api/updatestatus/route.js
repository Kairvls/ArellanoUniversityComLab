import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(req) {
    const { lab, pc_number, status } = await req.json();
    const db = await mysql.createConnection({ host: "localhost", user: "root", password: "kaisuan", database: "computer_lab" });

    await db.execute("UPDATE computers SET status = ? WHERE lab = ? AND pc_number = ?", [status, lab, pc_number]);
    db.end();

    return NextResponse.json({ success: true });
}
