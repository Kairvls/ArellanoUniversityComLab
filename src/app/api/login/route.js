import pool from '@/lib/db';
import { serialize } from 'cookie';

export async function POST(req) {
    try {
        const { lrn } = await req.json();

        
        const query = 'SELECT * FROM students WHERE lrn = ?';
        const [rows] = await pool.execute(query, [lrn]);

        if (rows.length === 0) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        }

        const user = rows[0];
        

        

        
        const cookie = serialize('lrn', user.lrn, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
        });

        return new Response(
            JSON.stringify({ message: 'Login successful', username: user.lrn }),
            {
                status: 200,
                headers: { 'Set-Cookie': cookie },
            }
        );
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error logging in', details: error.message }), { status: 500 });
    }
}
