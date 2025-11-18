export default function handler(req,res){
  const fs=require('fs');
  let db=[];
  try{ db=JSON.parse(fs.readFileSync('db.json')); }catch{}
  db.sort((a,b)=>b.score-a.score);
  res.json(db);
}
