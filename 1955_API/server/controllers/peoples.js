const mongoose = require("mongoose");
const People = mongoose.model("People");

module.exports = {
    index: function(req, res){
        People.find({}, function(err, people){
            if(err){
                console.log("~Root err~");
                res.json(err);
            }else{
                res.json(people);
            }
        })
    },
    addPerson: function(req, res){
        console.log("~Person~");
        // const newPerson = new People(req.body);
        People.create({name: req.params.name}, function(err, people){
            if(err){
                res.json(err);
            }else{
                res.json({added:true});
            }
    })
},
    deletePerson: function(req, res){
        console.log("~removePerson~");
        People.remove({name: req.params.name}, function(err, person){
            if(err){
                res.json(err);
            }else{
                res.json({removed: true});
            }
        })
    },

    showPerson: function(req, res){
        console.log("~showPerson's details~");
        People.findOne({name: req.params.name}, function(err, person){
            if(err){
                res.json(err);
            }else{
                res.json(person);
            }
        })
    }
};
