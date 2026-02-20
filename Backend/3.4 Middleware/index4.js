import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) =>{
  res.sendFile(__dirname + "/public/index.html");
})

app.post('/submit', (req, res) =>{
  var n1 = req.body.street;
  var n2 = req.body.pet;
  var bandname = n1+n2;
  console.log('Your band name is: ', bandname);
  res.send(`<h1>Your band name is:</h1><h2>${bandname}</h2>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
