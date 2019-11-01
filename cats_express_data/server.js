const express = require("express");
const app = express();
app.get('/', (request, response) => {
   response.send("Hello Express");
});
app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");




app.get("/cars", function(request, response){
    response.render("cars");
})
app.get("/cats", function(request, response){
    response.render("cats");
})
app.get("/form", function(request, response){
    response.render("form");
})
app.get("/black_cat", (request, response) => {
    // hard-coded user data
    var details = {
        text: "Here are some Black Cats",
        name: "Michael", age: 3, pic: "black_cat.png", spots: ["under the coach", "on the sofa"]} 
        
    
    response.render('details', {kitty: details});
})
app.get("/persian_cat", (request, response) => {
    // hard-coded user data
    var details = 
        {text: "Here are some Persian Cats", name: "Karl", age: 21, pic: "persian_cat.png", spots: ["under the coach", "persain things are always the best things"]} 
        
    response.render('details', {kitty: details});
})
app.get("/bugatti", (request, response) => {
    // hard-coded user data
    var details = 
        {text: "Here is a Bugatti",name: "Brand new Bugatti", speed: 250, pic: "bugatti.png", spots: ["crusing down memory lane", "my goal is to be able to afford this car"]}
        
    response.render('details', {kitty: details});
})
app.get("/porshe", (request, response) => {
    // hard-coded user data
    var details =
        {text: "Here is a Porshe",name: "Little Red Porshe", speed: 300, pic: "porshe.png", spots: ["little red corvette", "i mean porshe!"]}
    response.render('details', {kitty: details});
})

app.listen(8000, () => console.log("listening on port 8000"));
