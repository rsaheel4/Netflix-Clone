const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const app= express();

app.use(express.json());
app.use(cors());

const db =mysql.createConnection({

  user: "root",
  host: "localhost",
  password:"",
  database:"user",
});

app.post("/log",(req,res)=>{
  const email = req.body.email;
  const pass = req.body.pass;


  db.query("INSERT INTO login (email,pass) VALUES (?,?)",[email,pass],(err,result)=>{
    console.log(err);
  }
  );
});

app.post('/logInn',(req,res)=>
{
  const email = req.body.email;
  const pass = req.body.pass;
  
  db.query(
    "SELECT * FROM login WHERE email = ? AND pass = ?",[email,pass],(err,result)=>{
      if(err)
      {
        res.send({err: err})
      }
      else{
        if(result.length > 0){
          res.send(result)
        }
        else{
          res.send({message:"Wrong email or password"})
        }
      }
    }
  )

})

app.listen(3006,()=>{
  console.log("running ");
})