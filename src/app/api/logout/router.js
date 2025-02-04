export default function handler(req, res) {
    res.setHeader('Set-Cookie', 'token=; HttpOnly; Path=/; Max-Age=0');
    res.json({ message: 'Logged out' });
  }
  