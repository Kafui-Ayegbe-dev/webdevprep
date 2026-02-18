import express from "express"; //import
const app = express(); //init object
const port = 3000;

app.listen(3000, () => {
  console.log(`Server is running on port: ${port}`);
})
