export default function handler(req,res){
  const fs=require('fs');
  const {user,score}=req.query;
  if(!user||!score) return res.json({error:'Missing user or score'});
  let db=[];
  try{ db=JSON.parse(fs.readFileSync('db.json')); }catch{}
  db.push({user,score:Number(score)});
  fs.writeFileSync('db.json',JSON.stringify(db));
  res.json({ok:true});
}
