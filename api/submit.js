import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { user, score } = req.query;

  if (!user || !score) {
    return res.status(400).json({ error: 'Missing user or score' });
  }

  const filePath = path.join(process.cwd(), 'api', 'db.json');

  let db = [];

  try {
    db = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    db = [];
  }

  db.push({ user, score: Number(score) });

  fs.writeFileSync(filePath, JSON.stringify(db));

  res.json({ ok: true });
}
