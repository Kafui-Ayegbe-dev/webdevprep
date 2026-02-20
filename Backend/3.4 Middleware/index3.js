import express from "express";

const app = express();
const port = 3000;


function logger (req, res, next){
  console.log('This is my custom middleware method: ', req.method);
  console.log('This is my custom middleware url: ', req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
