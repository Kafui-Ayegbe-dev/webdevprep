import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'world',
  password: 'user',
  port: 5432
});

db.connect((err) => {
  if (err) console.error('Connection error:', err);
  else console.log('Connected!');
});

let countries = []

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  // const result = db.query('SELECT * FROM visited_countries', (err, res) =>{
  //   if(err){
  //     console.error("Error executing query", err.stack);
  //   } else {
  //     return res.rows
  //   }

  //   db.end();
  // })

  // result.forEach((country) => {
  //   countries.push(country.country_code);
  // });

  // res.render('index.ejs', countries)

  const result = await db.query("SELECT country_code FROM visited_countries");

  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  console.log(result.rows);
  res.render("index.ejs", { countries: countries, total: countries.length });
  db.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
