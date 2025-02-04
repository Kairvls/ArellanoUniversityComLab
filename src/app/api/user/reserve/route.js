import db from '@/lib/db';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { computerId, lrn } = req.body;
        try {
            await db.query('UPDATE computers SET user_lrn = ?, status = "not_available" WHERE id = ?', [lrn, computerId]);
            res.status(200).json({ message: 'Computer reserved successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error reserving computer', error });
        }
    }
}
