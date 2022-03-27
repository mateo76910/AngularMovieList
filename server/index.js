const express = require("express");
const bodyParser = require("body-parser");
var morgan = require("morgan");
let biography = require("./data").biography;
let projects = require("./data").projects;
const { uuid } = require("./utils");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan("tiny"))


app.get("/api/bio",(req,res)=>{
  const message="Poslano"
  res.send({message, biography})
})

app.get("/api/projects",(req,res)=>{
  res.send({projects})
})

app.delete("/api/projects/:id",(req,res) =>{
  const id = req.params.id;
  projects = projects.filter((item)=> item.id != id);
  res.send({message:"Uspješno obrisano"})
})

app.post("/api/projects",(req,res) =>{
  projects.push({...req.body, id:uuid()});
  let project = projects[projects.lenght-1];
  res.send({message:"Uspješno dodano",project})
})

app.put("/api/projects",(req,res)=>{
  let project = undefined;
  for (let i_p in projects){
    if (projects[i_p].id == req.body.id) {
      projects[i_p].name = req.body.name;
      projects[i_p].description = req.body.description;
      project = projects[i_p];
      break
    }
  }
  res.send({message:"Uspješno editano",project})
})


app.listen(port,()=>{console.log(`Slušam na ${port}`)})