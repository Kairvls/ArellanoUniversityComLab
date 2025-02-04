import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'kaisuan',
  database: 'computer_lab',
});

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { pc_number, lab_name, status } = req.body;

    pool.query('SELECT id FROM labs WHERE name = ?', [lab_name], (err, results) => {
      if (err) return res.status(500).json({ message: 'Database error' });

      const labId = results[0]?.id;
      if (labId) {
        pool.query('INSERT INTO computers (pc_number, lab_id, status) VALUES (?, ?, ?)', 
          [pc_number, labId, status], (err, result) => {
            if (err) return res.status(500).json({ message: 'Database error' });
            return res.status(200).json({ message: 'Computer added successfully' });
          });
      } else {
        return res.status(400).json({ message: 'Lab not found' });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
