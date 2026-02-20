import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan('tiny'));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/endpoint2", (req, res) =>{
  res.send("You got it working budd");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
