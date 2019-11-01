const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
// app.get('/', (req, res) => {
//    res.send("Hello Express");
// });
app.use(bodyParser.urlencoded({entended: true}));
app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
})

app.post("/result", function(req, res){
    req.session.results = req.body;
    console.log(req.body);
    res.redirect("result");
})

app.get("/result", function(req, res){
    res.render("results", {results: req.session.results});
})




app.listen(8000, () => console.log("listening on port 8000"));
