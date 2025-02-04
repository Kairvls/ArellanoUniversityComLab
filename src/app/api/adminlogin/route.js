import pool from '@/lib/db';
import { serialize } from 'cookie';

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    const query = 'SELECT * FROM admins WHERE username = ? OR password = ?';
    const [rows] = await pool.execute(query, [username, password]);

    if(rows.length === 0) {
      return new Response(JSON.stringify({ error: 'Invalid Credentials' }), { status: 404 });
    }

    const user = rows[0];

    const cookie = serialize('username', user.username, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24,
      path: '/adminlogin',
    });

    return new Response(
      JSON.stringify({ message: 'Login successful', username: user.usernmae }),
      {
          status: 200,
          headers: { 'Set-Cookie': cookie },
      }
  );
  }
  catch (error) {
      return new Response(JSON.stringify({ error: 'Error logging in', details: error.message }), { status: 500 });
  }
}
