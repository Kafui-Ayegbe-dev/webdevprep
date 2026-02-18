import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Helloooooooo");
})

app.get("/contact", (req, res)=> {
  res.send("This is the contact endpoint");
})

app.get("/about", (req, res) => {
  res.send("this is the about endpoint")
})

app.listen(port, ()=>{
  console.log(`Server listening on port: ${port}`);
})