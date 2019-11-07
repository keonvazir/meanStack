const peoples = require("../controllers/peoples.js");

module.exports = function(app){
    app.get("/", peoples.index)

    app.get("/new/:name", peoples.addPerson)

    app.get("/remove/:name", peoples.deletePerson)

    app.get("/:name", peoples.showPerson)
}
