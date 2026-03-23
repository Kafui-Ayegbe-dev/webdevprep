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

let temp_list = []

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function countryExists(new_country, res){
  const result = await db.query(`SELECT country_code FROM countries WHERE country_name=$1`,[new_country]);

  if (result.rows.length === 0){

    res.render("index.ejs", { countries: countries, total: countries.length, error: 'Country does not exist. Please try again' });

  } 
  else if (countries.includes(new_country)){
    res.render("index.ejs", { countries: countries, total: countries.length, error: 'Country already exists. Please try again' });
  }
  else {
    const data = result.rows[0];
    const countryCode = data.country_code;

    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [

      countryCode,
    ]);
    res.redirect("/");
  }

}

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
  //db.end();
});

// Part 2
app.post('/add', async (req, res) => {
  const country_name = req.body.country;

  console.log(country_name);

  const result = await db.query(`SELECT country_code FROM countries WHERE country_name=$1`,[country_name]);

  if (result.rows.length === 0){
    countryExists("klk", res);
  }
  else {
    countryExists(result.rows[0].country_code, res);
  }
  

})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
