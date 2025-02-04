import pool from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
      const { username, password } = await req.json();
      const hashedPassword = await bcrypt.hash(password, 10);

      const query = 'INSERT INTO admins (username, password) VALUES (?, ?)';
      const [result] = await pool.execute(query, [username, hashedPassword]);

      return new Response(JSON.stringify({ message: 'User created successfully!' }), { status: 201 });
      
  } catch (error) {
      return new Response(JSON.stringify({ error: 'Error creating user', details: error.message }), { status: 500 });
  }
}