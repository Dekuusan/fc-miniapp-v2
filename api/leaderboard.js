import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'api', 'db.json');

  let db = [];

  try {
    db = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    db = [];
  }

  db.sort((a, b) => b.score - a.score);

  res.json(db);
}
