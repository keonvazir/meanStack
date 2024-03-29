const express = require("express");
const app = express();
const session = require("express-session");
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
// app.get('/', (req, res) => {
//    res.send("Hello Express");
// });
app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    if(req.session.counter == null){
        req.session.counter == 0;
    }else{
        req.session.counter += 1;
    }
    res.render("index", {counter: req.session.counter});
})

app.get("/plus", function(req, res){
    req.session.counter += 1;
    res.redirect("/");
})

app.get("/reset", function(req, res){
    req.session.counter = null;
    res.redirect("/");
})



app.listen(8000, () => console.log("listening on port 8000"));
