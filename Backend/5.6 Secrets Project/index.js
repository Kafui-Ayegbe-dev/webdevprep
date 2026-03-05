import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

const baseURL = "https://secrets-api.appbrewery.com" 

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended : true}));
+
app.get('/', async (req, res) => {

    try {
        const response = await axios.get(baseURL+"/random");

        const data = {
            user : response.data.username,
            secret : response.data.secret
        }
        
        res.render("index.ejs", data);

    } catch (error) {
        console.error("Request cannot be made: ", error.message);
    }
});


app.listen(port, ()=> {
    console.log(`Server listening on port: ${port}`);
});