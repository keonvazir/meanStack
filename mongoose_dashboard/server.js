const express = require("express");
const app = express();
const session = require('express-session')
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({entended: true}));
app.use(express.static(__dirname + "/static"));
app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'woot',
    resave: false, 
    saveUninitialized: false}));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

mongoose.connect('mongodb://localhost/animals', {useNewUrlParser: true});
const AnimalSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    age: {type: Number, required: true}
   }, {timestamps: true});
   // create an object to that contains methods for mongoose to interface with MongoDB
    const Animal = mongoose.model('Animal', AnimalSchema);

const flash = require('express-flash');
    app.use(flash());
    app.post('/', (req, res) => {
        const newAnimal = new Animal(req.body);
        newAnimal.save()
            .then(() => res.redirect('/'))
            .catch(err => {
            console.log("We have an error!", err);
               // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        });
});

app.get("/", function(req, res){
    Animal.find({}, function(err, animals){
        if(err){
            console.log("You recevied an error!!!!");
        }
        else{
            res.render("index", {results: animals});
        }
    });
    
})

app.get("/animals/new", function(req, res){
    console.log("~New Form~");
    res.render("new");
})

app.get('/animals/:_id', function(req, res){
    Animal.findOne({_id: req.params._id}, function(err, animal){
        if(err){
            console.log("~Error matching DB request!~", err);
        }
        else{
            res.render("details", {animal: animal});
        }
    })
});

app.get('/animals/edit/:_id', function(req, res){
    Animal.findOne({_id: req.params._id}, function(err, animal){
        if(err){
            console.log("~Error matching DB request!~", err);
        }
        else{
            res.render("edit", {animal: animal});
        }
    })
});

app.post('/animals', function(req, res){
    console.log("~Post~", req.body);
    const animal = new Animal({name: req.body.name, age: req.body.age});
    animal.save(function(err){
        if(err){
            console.log("~Someone added a Ferret!~", err);
            for(var key in err.errors){
                req.flash("animalform", err.errors[key].message);
            }
            res.redirect("/animals/new");
        }
        else{
            console.log("successfully uploaded a animal");
            res.redirect("/");
        }
    })
});

app.post('/animals/:_id', function(req, res){
    console.log("~Edit~");
    Animal.findOne({_id: req.params._id}, function(err, animal){
        if(err){
            console.log("~Error matching DB request~", err);
        }
        else {
            Animal.update({_id: animal._id}, {$set: {name: req.body.name, age: req.body.age}}, function(err){
                if(err){
                    console.log("~Error updating~", err);
                }
                else{
                    res.redirect('/');
                }
            })
        }
    })
});

app.post('/animals/destroy/:_id', function(req, res){
    console.log("~Destroy~");
    Animal.findOne({_id: req.params._id}, function(err, animal){
        if(err){
            console.log("~Error cannot complete the deletion~", err);
        }
        else{
            Animal.remove({_id: animal._id}, function(err){
                if(err){
                    console.log(err, "~Error in deleting, try again~");
                }
                else{
                    res.redirect("/");
                }
            })
        }
    })
});


app.listen(8000, () => console.log("listening on port 8000"));
