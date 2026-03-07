import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended : true}));

const baseURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

app.get("/", (req, res) =>{
    res.render("index.ejs");
});

// this is a post to axios-get because the browser is posting something to the backend
// to tell the backend to get something
app.post("/get-artefact", async (req, res) => {
    try {
        // creates a random num from 1 to 1000 that will fetch data from the museum api
        const randID = Math.floor(Math.random() * 1000) + 1;
        const response = await axios.get(baseURL+randID);

        // content object that fetches the info we want from the museum object
        // to be rendered to the user on the front end
       

        res.render("index.ejs", { 
            name: response.data.objectName,
            image: response.data.primaryImage,
            culture: response.data.culture,
            department: response.data.department
        });
    } catch (error) {
        console.error("Failed to make request: ", error.message);
    }
    
})


app.listen(port, ()=> {
    console.log(`Server running on port: ${port}`);
});