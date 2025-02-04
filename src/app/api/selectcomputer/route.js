export async function POST(req) {
    const { lrn, lab, pc_number } = await req.json();
    const db = await mysql.createConnection({ 
        host: "localhost", 
        user: "root", 
        password: "kaisuan", 
        database: "computer_lab" 
    });

    try {
        // Update computer status to 'not available' after selection
        await db.execute("UPDATE computers SET status = 'not available' WHERE lab = ? AND pc_number = ?", [lab, pc_number]);

        // Store the student's selection in admin records
        await db.execute("INSERT INTO admin_records (lrn, lab, pc_number) VALUES (?, ?, ?)", [lrn, lab, pc_number]);

        db.end();
        return NextResponse.json({ success: true });
    } catch (error) {
        db.end();
        return NextResponse.json({ success: false, error: "Error processing request." });
    }
}
