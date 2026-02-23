import express from "express";
//import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 3000;
const app = express();


function whatDay(req, res, next){
    const d = new Date();
    let day = d.getDay();

    if (day === 0 || day === 6){
        res.locals.message = "It's the weekend, it's time to have fun!"
    }
    else {
        res.locals.message = "It's a weekday, it's time to work hard!"
    }

    next();
}

let mm = "sample message";

app.use(bodyParser.urlencoded({extended:true}));
app.use(whatDay);

app.get('/', (req, res)=>{
    //res.sendFile(__dirname + "/views/index.ejs");

    res.render("index.ejs");
})

// app.post("/submit", (req,res) => {
//     res.render("index.ejs", {
//         message : req.body["message"]
//     })
// })


app.listen(port, ()=>{
    console.log(`Server listening on port: ${port}`);
});