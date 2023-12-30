import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

/* This link is an endpoint for fetching charcter names */
const API_URL = "https://rickandmortyapi.com/api/character/";
const data = "INFO";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", async (req, res)=>{
  const charId = req.body.id;
  const charName = req.body.character;
  if(charId !== undefined && charId !== ""){
    try{
      const result = await axios.get(API_URL + charId);
      const data = result.data;
      const imgSrc = data.image;
      res.render("index.ejs", {data:data, imgSrc:imgSrc});
    }catch(error){
      console.log(`Error ${error}`);
      res.render("index.ejs", {data:"404 Error"});
    }
  } else if(charName !== undefined){
    try{
      const result = await axios.get(API_URL + `?name=${charName}`);
      const data = result.data;
      console.log(data);
      const imgSrc = data.image;
      res.render("index.ejs",{data:data, imgSrc:imgSrc});
    }catch(error){
      console.log(`Error ${error}`);
      res.render("index.ejs", {data:"404 Error"});
    }
  }

})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
