import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

const allPostArr = [{ fname: 'f1', lname: 'l1', title: 't1', message: 'c1' },
    { fname: 'f2', lname: 'l2', title: 't2', message: 'c2' },
    { fname: 'f3', lname: 'l3', title: 't3', message: 'c3' },
    { fname: 'f4', lname: 'l4', title: 't4', message: 'c4' },
    { fname: 'f5', lname: 'l5', title: 't5', message: 'c5' },
    { fname: 'f6', lname: 'l6', title: 't6', message: 'c6' }
]

//const allPostArr = [];

app.get('/', (req, res)=>{
    const mm = "Hi just testing";
    res.render('index.ejs', {msg:mm});
});

// show all the posts on the posts page
app.get('/allposts', (req, res) => {
    
    res.render('allposts.ejs', {allposts:allPostArr});
})

app.post('/newpost', (req, res) => {
    allPostArr.push(req.body);
    console.log(allPostArr);
})


app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});
