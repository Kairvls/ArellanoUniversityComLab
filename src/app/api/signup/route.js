import pool from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
      const { firstname, lastname, lrn, gender, grade, section, email, password, strand } = await req.json();
      const hashedPassword = await bcrypt.hash(password, 10);

      const query = 'INSERT INTO students (firstname, lastname, lrn, gender, grade, section, email, password, strand) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const [result] = await pool.execute(query, [firstname, lastname, lrn, gender, grade, section, email, hashedPassword, strand]);

      return new Response(JSON.stringify({ message: 'User created successfully!' }), { status: 201 });
      
  } catch (error) {
      return new Response(JSON.stringify({ error: 'Error creating user', details: error.message }), { status: 500 });
  }
}
