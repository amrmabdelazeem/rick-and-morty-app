import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

/* This link is an endpoint for fetching charcter names */
const API_URL = "https://rickandmortyapi.com/api/character/?name=rick";
const data = "INFO";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

// app.post("/", async (req, res)=>{
//   const charId = req.body.id;
//   try{
//     const result = await axios.get(API_URL + charId);
//     const data = result.data;
//     const imgSrc = data.image;
//     res.render("index.ejs", {data:data, imgSrc:imgSrc});
//   }catch(error){
//     console.log(`Error ${error}`);
//     res.render("index.ejs", {data:"404 Error"});
//   }
// })

app.post("/", async (req, res)=>{
  const charName = req.body.character;
  try{
    const result = await axios.get(API_URL);
    const data = result.data.results;
    
    let index = Object.keys(data);
    let chosen = Object.entries(data);
    let arrLength = index.length;
    const randomNumber = String(Math.floor(Math.random() * arrLength));
    const imgSrc = data[randomNumber].image;
    
    res.render("index.ejs",{data:chosen[randomNumber][1], imgSrc:imgSrc});
  }catch(error){
    console.log(`Error ${error}`);
    res.render("index.ejs", {data:"404 Error"});
  }
})


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
