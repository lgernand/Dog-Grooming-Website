const express = require('express');
const app = express();

var path = require('path');

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 

app.get("/", (req, res) => {
    res.render(__dirname + "/views/pages/index");
})

app.listen(3000, (req, res) => {
    console.log("spinning up...");
})